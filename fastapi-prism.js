// ============================================
// 💎 FASTAPI PRISM BACKGROUND - WebGL Shader
// ============================================

class PrismBackground {
    constructor() {
        this.canvas = document.getElementById('prismCanvas');
        if (!this.canvas) return;

        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        if (!this.gl) {
            console.warn('WebGL not supported for prism background');
            return;
        }

        this.mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
        this.startTime = Date.now();

        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        document.addEventListener('mousemove', (e) => {
            this.mouse.targetX = e.clientX / window.innerWidth;
            this.mouse.targetY = 1.0 - e.clientY / window.innerHeight;
        });

        this.createShaders();
        this.createBuffers();
        this.render();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    getVertexShader() {
        return `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;
    }

    getFragmentShader() {
        return `
            precision highp float;
            
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec2 uMouse;
            
            #define PI 3.14159265359
            #define TAU 6.28318530718
            #define MAX_STEPS 60
            #define MAX_DIST 80.0
            #define SURF_DIST 0.002
            
            float hash(float n) {
                return fract(sin(n) * 43758.5453123);
            }
            
            mat2 rot(float a) {
                float s = sin(a);
                float c = cos(a);
                return mat2(c, -s, s, c);
            }
            
            float sdOctahedron(vec3 p, float s) {
                p = abs(p);
                float m = p.x + p.y + p.z - s;
                vec3 q;
                if(3.0 * p.x < m) q = p.xyz;
                else if(3.0 * p.y < m) q = p.yzx;
                else if(3.0 * p.z < m) q = p.zxy;
                else return m * 0.57735027;
                
                float k = clamp(0.5 * (q.z - q.y + s), 0.0, s);
                return length(vec3(q.x, q.y - s + k, q.z - k));
            }
            
            float smin(float a, float b, float k) {
                float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
                return mix(b, a, h) - k * h * (1.0 - h);
            }
            
            float map(vec3 p) {
                vec3 op = p;
                
                vec2 m = (uMouse - 0.5) * 1.5;
                p.xy += m * 0.2;
                
                p.xz *= rot(uTime * 0.05);
                p.xy *= rot(uTime * 0.03);
                
                float d = 100.0;
                
                // Multiple small diamonds spread across the scene
                for(int i = 0; i < 12; i++) {
                    float fi = float(i);
                    float angle = fi * TAU / 12.0 + uTime * 0.1;
                    float angle2 = fi * 0.7 + uTime * 0.08;
                    
                    float radius = 4.0 + 2.0 * sin(fi * 1.3 + uTime * 0.2);
                    float yOffset = sin(angle2) * 3.0;
                    
                    vec3 pos = vec3(
                        cos(angle) * radius,
                        yOffset,
                        sin(angle) * radius
                    );
                    
                    vec3 po = p - pos;
                    po.xy *= rot(uTime * 0.3 + fi * 0.5);
                    po.yz *= rot(uTime * 0.2 + fi * 0.3);
                    
                    // Small diamonds (0.15 - 0.35 size)
                    float size = 0.15 + 0.2 * hash(fi);
                    float distort = sin(po.x * 8.0 + fi) * sin(po.y * 8.0) * sin(po.z * 8.0) * 0.02;
                    float diamond = sdOctahedron(po, size) + distort;
                    
                    d = smin(d, diamond, 0.3);
                }
                
                // Add some extra tiny floating diamonds
                for(int j = 0; j < 8; j++) {
                    float fj = float(j);
                    float a1 = fj * TAU / 8.0 + uTime * 0.15 + PI;
                    float a2 = fj * 0.9 + uTime * 0.12;
                    
                    float r = 6.0 + sin(fj * 2.1) * 2.0;
                    
                    vec3 pos2 = vec3(
                        cos(a1) * r,
                        sin(a2) * 2.5,
                        sin(a1) * r
                    );
                    
                    vec3 po2 = p - pos2;
                    po2.xy *= rot(uTime * 0.4 + fj);
                    
                    float tinyDiamond = sdOctahedron(po2, 0.1 + 0.08 * hash(fj + 20.0));
                    d = smin(d, tinyDiamond, 0.2);
                }
                
                return d;
            }
            
            vec3 getNormal(vec3 p) {
                vec2 e = vec2(0.002, 0.0);
                return normalize(vec3(
                    map(p + e.xyy) - map(p - e.xyy),
                    map(p + e.yxy) - map(p - e.yxy),
                    map(p + e.yyx) - map(p - e.yyx)
                ));
            }
            
            float raymarch(vec3 ro, vec3 rd) {
                float t = 0.0;
                for(int i = 0; i < MAX_STEPS; i++) {
                    vec3 p = ro + rd * t;
                    float d = map(p);
                    if(abs(d) < SURF_DIST || t > MAX_DIST) break;
                    t += d * 0.8;
                }
                return t;
            }
            
            vec3 getBackground(vec3 rd) {
                // Stars
                float stars = 0.0;
                vec3 p = rd * 150.0;
                float h = hash(dot(p, vec3(12.9898, 78.233, 54.53)));
                if(h > 0.985) stars = pow(h - 0.985, 8.0) * 15.0;
                
                // Purple nebula effect
                vec3 nebula = vec3(0.0);
                nebula += vec3(0.4, 0.1, 0.6) * pow(max(0.0, sin(rd.x * 1.5 + uTime * 0.05)), 4.0) * 0.15;
                nebula += vec3(0.2, 0.3, 0.7) * pow(max(0.0, sin(rd.y * 2.0 + uTime * 0.03)), 4.0) * 0.15;
                nebula += vec3(0.5, 0.2, 0.8) * pow(max(0.0, cos(rd.z * 1.8)), 4.0) * 0.1;
                
                return stars + nebula * 0.5;
            }
            
            void main() {
                vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / min(uResolution.x, uResolution.y);
                
                vec2 m = (uMouse - 0.5) * 0.3;
                vec3 ro = vec3(m.x * 1.5, m.y * 1.5, 10.0);
                vec3 rd = normalize(vec3(uv, -1.0));
                
                rd.xy *= rot(m.x * 0.1);
                rd.yz *= rot(m.y * 0.1);
                
                float t = raymarch(ro, rd);
                
                vec3 color = vec3(0.0);
                
                if(t < MAX_DIST) {
                    vec3 p = ro + rd * t;
                    vec3 normal = getNormal(p);
                    
                    vec3 viewDir = normalize(ro - p);
                    
                    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
                    
                    float ior = 1.5;
                    vec3 refractDir = refract(rd, normal, 1.0 / ior);
                    
                    if(length(refractDir) > 0.0) {
                        float t2 = raymarch(p - normal * 0.01, refractDir);
                        
                        if(t2 < MAX_DIST) {
                            vec3 p2 = p - normal * 0.01 + refractDir * t2;
                            vec3 normal2 = getNormal(p2);
                            
                            // Purple-themed chromatic aberration
                            vec3 r = refract(refractDir, -normal2, ior - 0.25);
                            vec3 g = refract(refractDir, -normal2, ior);
                            vec3 b = refract(refractDir, -normal2, ior + 0.25);
                            
                            vec3 bgR = getBackground(r) * vec3(1.2, 0.5, 1.0);
                            vec3 bgG = getBackground(g) * vec3(0.6, 0.8, 1.3);
                            vec3 bgB = getBackground(b) * vec3(0.8, 0.6, 1.5);
                            
                            color = vec3(bgR.x, bgG.y, bgB.z);
                            color = pow(color, vec3(0.75)) * 4.0;
                            
                        } else {
                            color = getBackground(refractDir) * 1.5;
                        }
                    }
                    
                    // Specular highlight
                    vec3 lightDir = normalize(vec3(1.0, 1.0, -1.0));
                    vec3 halfDir = normalize(lightDir + viewDir);
                    float spec = pow(max(dot(normal, halfDir), 0.0), 120.0);
                    color += spec * vec3(0.9, 0.8, 1.0) * 2.5;
                    
                    // Purple-tinted fresnel
                    vec3 fresnelColor = vec3(
                        0.5 + 0.5 * sin(fresnel * TAU + uTime + 1.0),
                        0.3 + 0.3 * sin(fresnel * TAU + uTime + TAU / 3.0),
                        0.7 + 0.3 * sin(fresnel * TAU + uTime + TAU * 2.0 / 3.0)
                    );
                    color += fresnel * fresnelColor * 0.8;
                    
                    // Edge glow
                    float edge = pow(1.0 - abs(dot(viewDir, normal)), 4.0);
                    color += edge * vec3(0.5, 0.4, 0.9) * 0.5;
                    
                } else {
                    color = getBackground(rd) * 0.3;
                }
                
                // Vignette
                float vignette = 1.0 - length(uv) * 0.5;
                vignette = smoothstep(0.2, 1.0, vignette);
                color *= vignette;
                
                // Purple tint
                color *= vec3(0.95, 0.9, 1.1);
                
                // Tone mapping
                color = pow(color, vec3(0.9));
                color *= 0.7; // Dim it so it's a subtle background
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;
    }

    createShader(type, source) {
        const gl = this.gl;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    createProgram(vertexShader, fragmentShader) {
        const gl = this.gl;
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    createShaders() {
        const gl = this.gl;

        const vertexShader = this.createShader(gl.VERTEX_SHADER, this.getVertexShader());
        const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, this.getFragmentShader());

        if (!vertexShader || !fragmentShader) {
            console.error('Failed to create shaders');
            return;
        }

        this.program = this.createProgram(vertexShader, fragmentShader);

        if (!this.program) {
            console.error('Failed to create program');
            return;
        }

        this.uTime = gl.getUniformLocation(this.program, 'uTime');
        this.uResolution = gl.getUniformLocation(this.program, 'uResolution');
        this.uMouse = gl.getUniformLocation(this.program, 'uMouse');
    }

    createBuffers() {
        const gl = this.gl;

        const positions = new Float32Array([
            -1, -1,
            1, -1,
            -1, 1,
            1, 1,
        ]);

        this.positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    }

    render() {
        if (!this.program) return;

        const gl = this.gl;
        const currentTime = (Date.now() - this.startTime) * 0.001;

        // Smooth mouse movement
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.03;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.03;

        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(this.program);

        gl.uniform1f(this.uTime, currentTime);
        gl.uniform2f(this.uResolution, this.canvas.width, this.canvas.height);
        gl.uniform2f(this.uMouse, this.mouse.x, this.mouse.y);

        const positionLocation = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        requestAnimationFrame(() => this.render());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PrismBackground();
});
