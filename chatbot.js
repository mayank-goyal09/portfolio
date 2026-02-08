/* =================================================================
   🤖 COSMIC AI ASSISTANT - ENHANCED CHATBOT FOR MAYANK GOYAL PORTFOLIO
   ================================================================= */

const portfolioKnowledge = {
    // ===== OWNER INFO =====
    owner: {
        name: "Mayank Goyal",
        title: "Data Analyst | ML Engineer | AI Enthusiast",
        email: "itsmaygal09@gmail.com",
        linkedin: "https://www.linkedin.com/in/mayank-goyal-4b8756363",
        github: "https://github.com/mayank-goyal09",
        twitter: "https://x.com/mem0ews",
        about: `I'm Mayank — a "student" by title, but in practice a data analyst, AI explorer, and builder of things that actually get used. I learn by shipping real projects and listening to real feedback. I'm shaping myself into someone who can think like a scientist, execute like an engineer, and communicate like a storyteller.

I look beyond the raw numbers to understand the intent behind them. It's about building tools that don't just function, but fit naturally into how people actually work.

Binary is boring. I'm here to find the ghost in the machine, the raw intent that turns cold data into a move.`
    },

    // ===== EXPERIENCE =====
    experience: {
        role: "Data Analyst Intern",
        company: "SpaceECE, Pune",
        duration: "Jul 2025 - Oct 2025",
        description: "Successfully completed a Business Analysis internship focusing on data-driven dashboard creation. Recognized by leadership for diligence and inquisitive analytical approach.",
        projects: ["Umang & Udaan Dashboard", "Intern Exit Analysis", "Education & Test Analysis", "Process Optimization"]
    },

    // ===== SKILLS =====
    skills: [
        { name: "Data Analytics", desc: "Exploratory analysis, cleaning, transformation, and insight extraction using Python, SQL, Excel, and Power BI" },
        { name: "Machine Learning", desc: "Supervised & unsupervised models, pipelines, and deployable ML apps with Scikit-learn" },
        { name: "Deep Learning", desc: "Neural networks, CNNs, ANNs, LSTM/RNNs using TensorFlow/Keras" },
        { name: "Python & OOP", desc: "Backend systems, OOP architecture, and enterprise applications with SQLite" },
        { name: "SQL & Databases", desc: "Designing schemas, writing efficient queries, and managing data flows" },
        { name: "Dashboards & Reporting", desc: "Building clear, narrative-driven reports and interactive views with Power BI and Streamlit" },
        { name: "AI & Exploration", desc: "Experimenting with NLP, deep learning, and reinforcement learning ideas" },
        { name: "Data Science", desc: "End-to-end modeling, feature engineering, and experiment-driven insights" },
        { name: "Prompt Engineering", desc: "Designing effective prompts and workflows for LLM-powered systems" },
        { name: "Market Research", desc: "Analyzing consumer behavior, trends, and competitive landscapes" }
    ],

    // ===== DATA ANALYTICS PROJECTS =====
    dataAnalyticsProjects: [
        {
            name: "Real-Time Safety Intelligence",
            spotlight: true,
            desc: "An advanced environmental defense system that ingests live weather API streams to calculate instantaneous safety risks. Transforms chaotic atmospheric data into actionable 'Go/No-Go' safety protocols for field operations.",
            tech: ["OpenWeather API", "Python", "Real-time Dashboard"],
            stats: "Live monitoring, ~25ms latency, 6 risk types analyzed",
            github: "https://github.com/mayank-goyal09/environmental-safety-dashboard"
        },
        {
            name: "Marketing Analytics Dashboard",
            desc: "Comprehensive Power BI marketing performance dashboard tracking campaign ROI and customer engagement with real-time data refresh.",
            tech: ["Power BI", "Marketing KPIs"],
            stats: "10+ KPIs tracked, Real-time data refresh",
            github: "https://github.com/mayank-goyal09/Marketing-PowerBI-Dashboard"
        },
        {
            name: "E-commerce Revenue Intelligence",
            desc: "Deep-dive analysis on Target's e-commerce sales patterns and customer behavior using Python and SQL.",
            tech: ["Python", "SQL", "Pandas"],
            stats: "100K+ records analyzed, 15+ key insights extracted",
            github: "https://github.com/mayank-goyal09/target-ecommerce-sales-analysis"
        },
        {
            name: "Aviation Operations Analytics",
            desc: "Interactive Excel dashboard analyzing 1,701 flight records for delay patterns and trends spanning 5 years of historical data.",
            tech: ["Excel", "Data Visualization"],
            stats: "1.7K flights analyzed, 5 years of historical data",
            github: "https://github.com/mayank-goyal09/flight-delay-analysis-dashboard"
        },
        {
            name: "Workforce Intelligence Dashboard",
            desc: "Strategic HR dashboard monitoring 2,458+ employees across demographics and performance with 8+ department coverage.",
            tech: ["Excel", "HR Analytics"],
            stats: "2.5K+ employees tracked, 8+ departments",
            github: "https://github.com/mayank-goyal09/hr-analytics-dashboard"
        },
        {
            name: "Olympic Performance Analytics",
            desc: "Analyzed 32 years of Olympic data (200+ countries) to reveal athletic dominance patterns using Python and Pandas.",
            tech: ["Python", "Pandas", "Data Visualization"],
            stats: "32 years data coverage, 200+ countries",
            github: "https://github.com/mayank-goyal09/olympic-legacy-1976-2008"
        },
        {
            name: "Pizza Sales SQL Analysis",
            desc: "SQL analysis extracting revenue trends and customer ordering patterns with 20+ complex SQL queries.",
            tech: ["SQL", "Revenue Analysis"],
            stats: "1000+ transactions, 20+ SQL queries",
            github: "https://github.com/mayank-goyal09/pizza-sales-sql-analysis"
        },
        {
            name: "Titanic Survival Analytics",
            desc: "Interactive Excel dashboard analyzing 891 Titanic passengers to predict survival outcomes with 8+ predictive factors.",
            tech: ["Excel", "Predictive Analytics"],
            stats: "891 passengers analyzed, 8+ predictive factors",
            github: "https://github.com/mayank-goyal09/titanic-survival-dashboard"
        },
        {
            name: "IPL Cricket Analytics",
            desc: "Power BI dashboard tracking team performance and cricket statistics across 15+ IPL seasons with 50+ metrics.",
            tech: ["Power BI", "Sports Analytics"],
            stats: "15+ seasons covered, 50+ metrics tracked",
            github: "https://github.com/mayank-goyal09/IPL-PowerBI-Dashboard"
        },
        {
            name: "AI-ML-Job-Pulse",
            desc: "Data Analysis project exploring AI/ML job trends, skill demand, salary patterns, and market insights.",
            tech: ["Python", "Pandas", "Data Analysis"],
            stats: "100+ job listings, 15+ skills analyzed",
            github: "https://github.com/mayank-goyal09/AI-ML-Job-Pulse"
        },
        {
            name: "Performance Predictors EDA",
            desc: "Exploratory Data Analysis on Student Performance Dataset uncovering key factors influencing academic outcomes.",
            tech: ["Python", "EDA", "Pandas", "NumPy"],
            stats: "17 Q&A analysis, 10+ insights found",
            github: "https://github.com/mayank-goyal09/performance-predictors-eda"
        }
    ],

    // ===== MACHINE LEARNING PROJECTS =====
    machineLearningProjects: [
        // SUPERVISED LEARNING
        {
            name: "SmartHarvest – Crop Recommendation Engine",
            type: "Supervised - Classification",
            desc: "End-to-end ML system recommending the most suitable crop using soil nutrients (NPK), climate, and soil properties. Achieves ~95% accuracy with Random Forest.",
            tech: ["Python", "Scikit-learn", "Streamlit", "Random Forest"],
            stats: "~95% accuracy with feature-engineered agronomic variables",
            liveApp: "https://smartharvest-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/SmartHarvest"
        },
        {
            name: "Mr. Cardio Disease Astrologer",
            type: "Supervised - Classification",
            desc: "KNN-based heart disease prediction using indicators like cholesterol, blood pressure and heart rate with interactive risk estimation UI.",
            tech: ["Python", "Scikit-learn", "KNN", "Streamlit"],
            stats: "Interactive healthcare UI for risk estimation",
            liveApp: "https://mr-cardio-disease-astrologer-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/Mr.-cardio-disease-astrologer"
        },
        {
            name: "Lending Logic – Loan Approval System",
            type: "Supervised - Classification",
            desc: "Gaussian Naïve Bayes model predicting loan approval probability using engineered financial features with ~92% accuracy.",
            tech: ["Python", "Scikit-learn", "Naïve Bayes", "Streamlit"],
            stats: "~92% accuracy with focus on reducing false positives",
            liveApp: "https://lending-logic-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/lending-logic"
        },
        {
            name: "CardioPredict – SVM Heart Risk Model",
            type: "Supervised - Classification",
            desc: "Support Vector Machine model predicting heart disease risk from clinical features, tuned for medical risk prediction.",
            tech: ["Python", "Scikit-learn", "SVM", "Streamlit"],
            stats: "Margin-based classifier optimized for healthcare",
            liveApp: "https://cardiopredict-svm-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/CardioPredict-SVM"
        },
        {
            name: "VociPark – Parkinson's Disease Detection",
            type: "Supervised - Classification",
            desc: "End-to-end Parkinson's detection from voice data using SVM classifier optimized via GridSearchCV with ~82% test accuracy.",
            tech: ["Python", "Scikit-learn", "SVM", "Streamlit"],
            stats: "~82% test accuracy, ~0.80 balanced accuracy",
            liveApp: "https://vocipark-parkinson-s-detection-from-voice-project.streamlit.app/",
            github: "https://github.com/mayank-goyal09/VociPark-Parkinson-s-Detection-from-Voice"
        },
        {
            name: "Used Car Price Predictor",
            type: "Supervised - Regression",
            desc: "Random Forest Regressor predicting fair selling prices of used cars from 45K+ CarDekho listings with R² ≈ 0.92.",
            tech: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
            stats: "R² ≈ 0.92, 45K+ listings analyzed",
            liveApp: "https://used-car-price-modeling-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/used-car-price-modeling"
        },
        {
            name: "Delivery Oracle – E-commerce Intelligence",
            type: "Supervised - Regression & Classification",
            desc: "End-to-end delivery intelligence system using Olist dataset with Ridge regression for ETA and Logistic Regression for late-delivery risk.",
            tech: ["Python", "Scikit-learn", "Ridge", "Streamlit"],
            stats: "Multi-model delivery prediction system",
            liveApp: "https://delivery-oracle-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/delivery-oracle"
        },
        {
            name: "Medicine Recommendation System",
            type: "Supervised - Classification",
            desc: "AI-powered diagnostic tool using Decision Tree to predict diseases from symptoms and provide personalized recommendations.",
            tech: ["Python", "Scikit-learn", "Decision Tree", "Streamlit"],
            stats: "Symptom-based disease prediction with medication recommendations",
            liveApp: "https://medicine-recommendation-system-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/medicine-recommendation-system"
        },
        {
            name: "ATP Tennis Match Outcome Classifier",
            type: "Supervised - Classification",
            desc: "ML-powered sports analytics using Random Forest to predict ATP tennis match winners across 59K+ matches with 99.5% accuracy.",
            tech: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
            stats: "99.5% accuracy, 20 years of ATP history (2000-2019)",
            liveApp: "https://atp-tennis-match-outcome-classifier-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/ATP-Tennis-Match-Outcome-Classifier"
        },
        {
            name: "PJM Energy Demand Forecaster",
            type: "Supervised - Regression",
            desc: "End-to-end ML system predicting hourly electricity demand using 10+ years of PJM load data with Random Forest (R² ≈ 0.95).",
            tech: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
            stats: "MAE ≈ 500 MW, RMSE ≈ 700 MW, R² ≈ 0.95",
            liveApp: "https://pjm-energy-demand-forecaster-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/PJM-Energy-Demand-Forecaster"
        },
        // UNSUPERVISED LEARNING
        {
            name: "Geo-Pulse – Smart City Traffic Intelligence",
            type: "Unsupervised - Clustering",
            desc: "Production-ready geospatial ML system identifying traffic accident hotspots using DBSCAN clustering on 3M+ US accident records.",
            tech: ["Python", "Scikit-learn", "DBSCAN", "Pydeck", "Streamlit"],
            stats: "3M+ records, 87 hotspot clusters in LA, 3km optimal radius",
            liveApp: "https://geo-pulse-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/Geo-Pulse"
        },
        {
            name: "Developer Persona Segmentation",
            type: "Unsupervised - Clustering",
            desc: "ML-powered developer persona segmentation using MiniBatch K-Means on Stack Overflow 2025 survey (~42K developers).",
            tech: ["Python", "Scikit-learn", "K-Means", "Streamlit"],
            stats: "3 personas: Modern Web Builders (45%), Generalists (35%), Veterans (20%)",
            liveApp: "https://developer-persona-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/Developer-persona"
        },
        {
            name: "PCA Sommelier – Wine Intelligence Studio",
            type: "Unsupervised - Dimensionality Reduction",
            desc: "Portfolio-ready PCA wine analysis lab that reduces high-dimensional wine chemistry into 2-3 principal components.",
            tech: ["Python", "Scikit-learn", "PCA", "Streamlit"],
            stats: "Interactive PCA pipeline with explained variance analysis",
            liveApp: "https://pca-sommelier-project.streamlit.app",
            github: "https://github.com/mayank-goyal09/pca-prism"
        }
    ],

    // ===== PYTHON/OOP PROJECTS =====
    pythonProjects: [
        {
            name: "YouTube Studio Automation",
            flagship: true,
            desc: "An enterprise-grade data pipeline that interfaces with the YouTube Data API to mirror raw metrics into a local SQLite Data Warehouse, enabling granular SQL-driven insights.",
            tech: ["Python Automation", "YouTube Data API", "SQLite", "ETL Pipeline", "Streamlit"],
            features: ["Automated Data Ingestion Loop", "Raw SQL Access to Analytics", "Custom Metric Engineering", "Zero-Dependency Architecture"],
            liveApp: "https://youtube-dashboard-appql-w6tacoledpx4fgpmkdtth4.streamlit.app/",
            github: "https://github.com/mayank-goyal09/YouTube-Studio"
        },
        {
            name: "LedgerAPI",
            desc: "Enterprise Bank Management System with production-ready backend architecture featuring account management, transaction processing, and audit trails.",
            tech: ["Python OOP", "SQLite", "Backend"],
            features: ["Account Management", "Transaction Processing", "Audit Trails", "Inter-transfers"],
            github: "https://github.com/mayank-goyal09/LedgerAPI"
        },
        {
            name: "Smart Inventory Billing System",
            desc: "Complete inventory and billing solution for retail management with stock management and multi-payment support.",
            tech: ["Streamlit", "SQLite", "OOP"],
            features: ["Stock Management", "Billing System", "Multi-payment", "Dashboard"],
            github: "https://github.com/mayank-goyal09/smart-inventory-billing-system"
        },
        {
            name: "Maygal Book Vault",
            desc: "Digital library management system with advanced book tracking, member management, and fine calculation.",
            tech: ["Streamlit", "Python OOP", "SQLite"],
            features: ["Book Cataloging", "Member Management", "Issue/Return", "Fine Calculation"],
            github: "https://github.com/mayank-goyal09/Maygal-book-vault"
        },
        {
            name: "The File Forge",
            desc: "Advanced file management system with batch processing capabilities and auto organization.",
            tech: ["Streamlit", "File Handling", "Python"],
            features: ["File Operations", "Batch Processing", "Format Conversion", "Auto Organization"],
            github: "https://github.com/mayank-goyal09/the-file-forge"
        },
        {
            name: "Gridlock Game",
            desc: "NumPy-powered Tic-Tac-Toe with web interface demonstrating array manipulation and Python game logic.",
            tech: ["NumPy", "Streamlit", "Game Logic"],
            features: ["NumPy Arrays", "Win Detection", "Interactive UI", "Game State"],
            liveApp: "https://gridlock-game-bdoqnt2uavckvypewafl8g.streamlit.app/",
            github: "https://github.com/mayank-goyal09/Gridlock-Game"
        }
    ],

    // ===== DEEP LEARNING PROJECTS =====
    deepLearningProjects: [
        {
            name: "Smart Price Predictor – Smartphone Pricing",
            type: "ANN",
            desc: "AI-powered Multi-Layer Perceptron classifying smartphones into 4 price categories based on 20+ hardware specs with premium dark glassmorphism UI.",
            tech: ["Python", "TensorFlow/Keras", "Streamlit"],
            stats: "4-Class Classification, 20+ hardware features, Real-time confidence scores",
            liveApp: "https://ram-project.streamlit.app/",
            github: "https://github.com/mayank-goyal09/ram-battery-camera-to--"
        },
        {
            name: "Student Performance Predictor (ANN)",
            type: "ANN",
            desc: "Robust ANN regression system predicting student final grades using UCI dataset, analyzing demographic, social & study factors.",
            tech: ["Python", "TensorFlow/Keras", "Scikit-learn", "Streamlit"],
            stats: "End-to-end pipeline with Dropout & Early Stopping",
            liveApp: "https://student-performance-ann-regreappr-project.streamlit.app/",
            github: "https://github.com/mayank-goyal09/student-performance-ann-regressor"
        },
        {
            name: "ASL Digits Recognizer",
            type: "CNN",
            desc: "Custom 3-layer CNN achieving ~96% accuracy on ASL digits (0-9) with dual deployment — Streamlit web app + OpenCV real-time webcam inference.",
            tech: ["Python", "TensorFlow/Keras", "OpenCV", "Streamlit"],
            stats: "~96% accuracy, 3 Conv2D-MaxPool blocks, Webcam ROI Cropping",
            liveApp: "https://asl-digit-recognition-cnn-opencv-project.streamlit.app/",
            github: "https://github.com/mayank-goyal09/asl-digit-recognition-cnn-opencv"
        },
        {
            name: "WeatherLens AI — Multi-City LSTM Forecasting",
            type: "RNN/LSTM",
            desc: "End-to-end deep learning weather forecasting system using LSTM networks to predict 7-day (168 hours) temperature across 4 major global cities.",
            tech: ["Python", "TensorFlow/Keras", "Open-Meteo API", "Streamlit"],
            stats: "Multi-step LSTM, 4-city coverage, Beats baseline",
            liveApp: "https://multi-city-lstm-weather-forecast-project.streamlit.app/",
            github: "https://github.com/mayank-goyal09/multi-city-lstm-weather-forecast"
        }
    ],

    // ===== TIPS & ADVICE =====
    tips: [
        "Small, daily projects beat huge theoretical plans. Pick tiny data problems, commit them to GitHub, and improve one thing each iteration.",
        "Document everything. Your future self (and recruiters) will thank you for detailed READMEs.",
        "Deploy your projects! A live demo is worth a thousand lines of code. Streamlit makes this super easy.",
        "Focus on end-to-end pipelines. Going from raw data to deployed model is the real skill.",
        "Learn by building, not just reading. Start with a problem that interests you.",
        "Version control is non-negotiable. Commit early, commit often.",
        "The best portfolio project solves a real problem you personally care about.",
        "Feature engineering often matters more than model selection. Master your data first.",
        "Write code like someone else has to maintain it — that someone is usually future you.",
        "Don't chase every new framework. Master the fundamentals: Python, SQL, and statistics."
    ]
};

// ===== CHATBOT CLASS =====
class CosmicAssistant {
    constructor() {
        this.isOpen = false;
        this.messagesContainer = null;
        this.inputField = null;
        this.currentPage = this.detectCurrentPage();
    }

    detectCurrentPage() {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('data-analytics')) return 'data-analytics';
        if (path.includes('machine-learning')) return 'machine-learning';
        if (path.includes('python-projects')) return 'python-projects';
        if (path.includes('deep-learning')) return 'deep-learning';
        return 'home';
    }

    init() {
        this.createChatbotUI();
        this.bindEvents();
    }

    createChatbotUI() {
        // Create the chatbot wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'cosmic-chat-wrapper';
        wrapper.innerHTML = `
            <!-- Floating Orb Button (Original Design) -->
            <button class="cosmic-orb" id="cosmicOrb" aria-label="Open AI assistant"></button>

            <!-- Chat Window -->
            <div class="cosmic-chat-window" id="cosmicChatWindow" aria-hidden="true">
                <div class="chat-header">
                    <div class="chat-header-left">
                        <div class="status-indicator">
                            <span class="status-dot"></span>
                        </div>
                        <div class="header-text">
                            <h3>Cosmic AI</h3>
                            <p>Ask me about Mayank's projects!</p>
                        </div>
                    </div>
                    <button class="chat-close-btn" id="chatCloseBtn" aria-label="Close">×</button>
                </div>

                <div class="chat-messages" id="chatMessages">
                    <!-- Messages will be injected here -->
                </div>

                <div class="chat-quick-actions" id="quickActions">
                    <button data-action="greeting">👋 Hi</button>
                    <button data-action="skills">💼 Skills</button>
                    <button data-action="projects">🚀 Projects</button>
                    <button data-action="ml-projects">🤖 ML</button>
                    <button data-action="dl-projects">🧠 Deep Learning</button>
                    <button data-action="contact">📧 Contact</button>
                    <button data-action="tip">💡 Tip</button>
                </div>

                <form class="chat-input-form" id="chatInputForm">
                    <input type="text" id="chatInput" placeholder="Ask about projects, skills..." autocomplete="off" />
                    <button type="submit">Send</button>
                </form>
            </div>
        `;

        document.body.appendChild(wrapper);

        // Save references
        this.messagesContainer = document.getElementById('chatMessages');
        this.inputField = document.getElementById('chatInput');
    }

    bindEvents() {
        const orb = document.getElementById('cosmicOrb');
        const closeBtn = document.getElementById('chatCloseBtn');
        const form = document.getElementById('chatInputForm');
        const quickActions = document.getElementById('quickActions');

        orb.addEventListener('click', () => this.toggle());
        closeBtn.addEventListener('click', () => this.close());

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = this.inputField.value.trim();
            if (text) {
                this.handleUserMessage(text);
                this.inputField.value = '';
            }
        });

        quickActions.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const action = e.target.dataset.action;
                this.handleQuickAction(action);
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        const window = document.getElementById('cosmicChatWindow');
        const orb = document.getElementById('cosmicOrb');

        window.style.display = 'flex';
        window.setAttribute('aria-hidden', 'false');
        orb.classList.add('orb-active');
        this.isOpen = true;

        // Show welcome message if first time
        if (!this.messagesContainer.dataset.initialized) {
            this.showWelcomeMessage();
            this.messagesContainer.dataset.initialized = 'true';
        }

        this.inputField.focus();
    }

    close() {
        const window = document.getElementById('cosmicChatWindow');
        const orb = document.getElementById('cosmicOrb');

        window.style.display = 'none';
        window.setAttribute('aria-hidden', 'true');
        orb.classList.remove('orb-active');
        this.isOpen = false;
    }

    showWelcomeMessage() {
        let welcomeText = `👋 **Hey there! I'm the Cosmic AI Assistant** for Mayank Goyal's portfolio.\n\n`;

        switch (this.currentPage) {
            case 'data-analytics':
                welcomeText += `📊 You're exploring the **Data Analytics** projects! I can tell you about any of the dashboards, SQL analyses, or visualization projects here.\n\nTry asking about "Marketing Dashboard" or "Olympic Analytics"!`;
                break;
            case 'machine-learning':
                welcomeText += `🤖 Welcome to the **Machine Learning Lab**! I know all about the supervised and unsupervised projects here.\n\nAsk me about "SmartHarvest", "Geo-Pulse", or any ML project!`;
                break;
            case 'python-projects':
                welcomeText += `🐍 You're in the **Python & OOP** section! These are enterprise-grade applications built with Python.\n\nAsk about the "YouTube Studio Automation" flagship project or any backend system!`;
                break;
            case 'deep-learning':
                welcomeText += `🧠 Welcome to the **Deep Learning Lab**! Here you'll find ANNs, CNNs, and LSTM projects.\n\nAsk about "ASL Digits Recognizer" or "WeatherLens AI"!`;
                break;
            default:
                welcomeText += `I can help you explore:\n• 📊 **Data Analytics** - Dashboards & SQL analyses\n• 🤖 **Machine Learning** - 18+ ML projects\n• 🧠 **Deep Learning** - ANNs, CNNs, LSTMs\n• 🐍 **Python/OOP** - Enterprise applications\n• 💼 **Experience & Skills**\n• 📧 **Contact Information**\n\nJust ask or use the quick buttons below!`;
        }

        this.addMessage('assistant', welcomeText);
    }

    addMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message chat-message-${role}`;

        // Process markdown-like formatting
        const formattedText = this.formatMessage(text);

        msgDiv.innerHTML = `
            <div class="message-bubble">
                ${formattedText}
            </div>
        `;

        this.messagesContainer.appendChild(msgDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    formatMessage(text) {
        // Convert **bold** to <strong>
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert newlines to <br>
        text = text.replace(/\n/g, '<br>');
        // Convert URLs to links
        text = text.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
        return text;
    }

    handleUserMessage(text) {
        this.addMessage('user', text);

        // Simulate typing delay
        setTimeout(() => {
            const response = this.generateResponse(text);
            this.addMessage('assistant', response);
        }, 400 + Math.random() * 300);
    }

    handleQuickAction(action) {
        const prompts = {
            'greeting': 'Hello!',
            'skills': 'What are Mayank\'s skills?',
            'projects': 'Tell me about all of Mayank\'s projects',
            'ml-projects': 'Show me Machine Learning projects',
            'dl-projects': 'Tell me about Deep Learning projects',
            'contact': 'How can I contact Mayank?',
            'experience': 'What is Mayank\'s work experience?',
            'tip': 'Give me a learning tip for data science'
        };

        const prompt = prompts[action] || 'Hello!';
        this.handleUserMessage(prompt);
    }

    generateResponse(input) {
        const t = input.toLowerCase();
        const k = portfolioKnowledge;

        // ===== GREETINGS =====
        if (this.matches(t, ['hello', 'hi', 'hey', 'greet', 'howdy', 'what\'s up'])) {
            return `👋 **Hey there!** I'm the Cosmic AI Assistant on Mayank Goyal's portfolio.\n\nI know everything about:\n• 📊 **11+ Data Analytics** projects\n• 🤖 **18+ Machine Learning** projects  \n• 🧠 **4 Deep Learning** projects\n• 🐍 **9 Python/OOP** applications\n\nWhat would you like to explore?`;
        }

        // ===== ABOUT MAYANK =====
        if (this.matches(t, ['who is mayank', 'about mayank', 'tell me about mayank', 'who are you', 'mayank goyal'])) {
            return `👨‍💻 **About Mayank Goyal**\n\n${k.owner.about}\n\n**Current Focus:**\n• Data Analytics & Visualization\n• Machine Learning Engineering\n• Deep Learning Research\n• Enterprise Python Development\n\n🔗 **Links:**\n• GitHub: ${k.owner.github}\n• LinkedIn: ${k.owner.linkedin}`;
        }

        // ===== EXPERIENCE =====
        if (this.matches(t, ['experience', 'work', 'intern', 'job', 'spaceece', 'professional'])) {
            const exp = k.experience;
            return `💼 **Professional Experience**\n\n**${exp.role}** @ ${exp.company}\n📅 ${exp.duration}\n\n${exp.description}\n\n**Key Dashboards Developed:**\n${exp.projects.map(p => `• ${p}`).join('\n')}\n\nThis internship focused on building data-driven dashboards and was recognized for analytical excellence!`;
        }

        // ===== SKILLS =====
        if (this.matches(t, ['skill', 'tech', 'stack', 'what can', 'capabilities', 'expertise'])) {
            const skillsList = k.skills.slice(0, 6).map(s => `• **${s.name}**: ${s.desc}`).join('\n');
            return `💼 **Mayank's Core Skills**\n\n${skillsList}\n\n...and more including Market Research & Prompt Engineering!\n\nWant to see projects using these skills? Just ask!`;
        }

        // ===== CONTACT =====
        if (this.matches(t, ['contact', 'reach', 'email', 'linkedin', 'github', 'hire', 'connect'])) {
            return `📬 **Contact Mayank**\n\n📧 **Email:** ${k.owner.email}\n\n🔗 **Social Links:**\n• [LinkedIn](${k.owner.linkedin})\n• [GitHub](${k.owner.github})\n• [Twitter/X](${k.owner.twitter})\n\nYou can also use the **Contact Form** on the main page. Mayank typically responds within 24 hours!`;
        }

        // ===== ALL PROJECTS OVERVIEW =====
        if (this.matches(t, ['all projects', 'all project', 'how many project', 'project count', 'portfolio overview', 'tell me about projects'])) {
            return `🚀 **Mayank's Complete Portfolio**\n\n📊 **Data Analytics (11 projects)**\nDashboards, SQL analyses, visualization\n\n🤖 **Machine Learning (18+ projects)**\nSupervised & Unsupervised learning\n\n🧠 **Deep Learning (4 projects)**\nANNs, CNNs, LSTM/RNNs\n\n🐍 **Python/OOP (9 projects)**\nEnterprise applications & games\n\n**Featured Spotlight Projects:**\n• 📺 YouTube Studio Automation (Python)\n• ⚠️ Real-Time Safety Intelligence (Analytics)\n• 🌍 Geo-Pulse Traffic Intelligence (ML)\n• 🤟 ASL Digits Recognizer (DL)\n\nWhich category interests you?`;
        }

        // ===== DATA ANALYTICS PROJECTS =====
        if (this.matches(t, ['data analyt', 'dashboard', 'visualization', 'power bi', 'excel', 'analytics project'])) {
            const projects = k.dataAnalyticsProjects.slice(0, 5);
            let response = `📊 **Data Analytics Projects**\n\n`;
            projects.forEach(p => {
                response += `**${p.name}**\n${p.desc.substring(0, 100)}...\n🛠️ ${p.tech.join(', ')}\n\n`;
            });
            response += `...and 6 more projects! Ask about any specific one for details.`;
            return response;
        }

        // ===== MACHINE LEARNING PROJECTS =====
        if (this.matches(t, ['machine learning', 'ml project', 'supervised', 'unsupervised', 'scikit', 'sklearn'])) {
            let response = `🤖 **Machine Learning Projects**\n\n**Supervised Learning (14+ projects):**\n`;
            const supervised = k.machineLearningProjects.filter(p => p.type.includes('Supervised')).slice(0, 4);
            supervised.forEach(p => {
                response += `• **${p.name}** - ${p.stats}\n`;
            });
            response += `\n**Unsupervised Learning:**\n`;
            const unsupervised = k.machineLearningProjects.filter(p => p.type.includes('Unsupervised')).slice(0, 3);
            unsupervised.forEach(p => {
                response += `• **${p.name}** - ${p.type.split(' - ')[1]}\n`;
            });
            response += `\nAsk about any specific project for more details!`;
            return response;
        }

        // ===== DEEP LEARNING PROJECTS =====
        if (this.matches(t, ['deep learning', 'neural network', 'cnn', 'ann', 'lstm', 'rnn', 'tensorflow', 'keras'])) {
            let response = `🧠 **Deep Learning Projects**\n\n`;
            k.deepLearningProjects.forEach(p => {
                response += `**${p.name}** (${p.type})\n${p.desc.substring(0, 120)}...\n📊 ${p.stats}\n🔗 [Live App](${p.liveApp})\n\n`;
            });
            return response;
        }

        // ===== PYTHON/OOP PROJECTS =====
        if (this.matches(t, ['python project', 'oop', 'backend', 'sqlite', 'streamlit app'])) {
            let response = `🐍 **Python & OOP Projects**\n\n`;
            const flagship = k.pythonProjects.find(p => p.flagship);
            if (flagship) {
                response += `⭐ **FLAGSHIP: ${flagship.name}**\n${flagship.desc}\n🔗 [Live Demo](${flagship.liveApp})\n\n`;
            }
            response += `**Other Projects:**\n`;
            k.pythonProjects.filter(p => !p.flagship).slice(0, 4).forEach(p => {
                response += `• **${p.name}** - ${p.desc.substring(0, 60)}...\n`;
            });
            return response;
        }

        // ===== SPECIFIC PROJECT SEARCHES =====
        // YouTube Studio
        if (this.matches(t, ['youtube', 'studio', 'youtube studio'])) {
            const p = k.pythonProjects.find(x => x.name.includes('YouTube'));
            return `📺 **${p.name}**\n\n${p.desc}\n\n**Tech Stack:** ${p.tech.join(' • ')}\n\n**Key Features:**\n${p.features.map(f => `• ${f}`).join('\n')}\n\n🔗 [Live Dashboard](${p.liveApp})\n💻 [GitHub Code](${p.github})`;
        }

        // SmartHarvest
        if (this.matches(t, ['smartharvest', 'crop', 'agriculture'])) {
            const p = k.machineLearningProjects.find(x => x.name.includes('SmartHarvest'));
            return `🌾 **${p.name}**\n\n${p.desc}\n\n**Stats:** ${p.stats}\n**Tech:** ${p.tech.join(' • ')}\n\n🔗 [Try It Live](${p.liveApp})\n💻 [GitHub](${p.github})`;
        }

        // Geo-Pulse
        if (this.matches(t, ['geo-pulse', 'geopulse', 'traffic', 'accident', 'dbscan'])) {
            const p = k.machineLearningProjects.find(x => x.name.includes('Geo-Pulse'));
            return `🌍 **${p.name}**\n\n${p.desc}\n\n**Stats:** ${p.stats}\n**Tech:** ${p.tech.join(' • ')}\n\n🔗 [Try It Live](${p.liveApp})\n💻 [GitHub](${p.github})`;
        }

        // ASL Recognizer
        if (this.matches(t, ['asl', 'sign language', 'digit recogn', 'hand gesture'])) {
            const p = k.deepLearningProjects.find(x => x.name.includes('ASL'));
            return `🤟 **${p.name}**\n\n${p.desc}\n\n**Stats:** ${p.stats}\n**Tech:** ${p.tech.join(' • ')}\n\n🔗 [Try It Live](${p.liveApp})\n💻 [GitHub](${p.github})`;
        }

        // WeatherLens
        if (this.matches(t, ['weather', 'forecast', 'lstm', 'temperature'])) {
            const p = k.deepLearningProjects.find(x => x.name.includes('Weather'));
            return `🌦️ **${p.name}**\n\n${p.desc}\n\n**Stats:** ${p.stats}\n**Tech:** ${p.tech.join(' • ')}\n\n🔗 [Try It Live](${p.liveApp})\n💻 [GitHub](${p.github})`;
        }

        // Heart Disease / Cardio
        if (this.matches(t, ['heart', 'cardio', 'disease prediction', 'health risk'])) {
            const projects = k.machineLearningProjects.filter(p =>
                p.name.toLowerCase().includes('cardio') ||
                p.desc.toLowerCase().includes('heart')
            );
            let response = `❤️ **Healthcare/Heart Disease Projects**\n\n`;
            projects.forEach(p => {
                response += `**${p.name}**\n${p.desc.substring(0, 100)}...\n🔗 [Live App](${p.liveApp})\n\n`;
            });
            return response;
        }

        // ===== LEARNING TIPS =====
        if (this.matches(t, ['tip', 'advice', 'learn', 'study', 'career advice', 'how to'])) {
            const randomTip = k.tips[Math.floor(Math.random() * k.tips.length)];
            return `💡 **Learning Tip from Mayank:**\n\n"${randomTip}"\n\nWant another tip? Just ask!`;
        }

        // ===== HELP =====
        if (this.matches(t, ['help', 'what can you do', 'how to use', 'commands'])) {
            return `🆘 **How I Can Help**\n\nI'm your guide to Mayank Goyal's portfolio! Try asking:\n\n**About Projects:**\n• "Show me ML projects"\n• "Tell me about YouTube Studio"\n• "What Deep Learning projects are there?"\n\n**About Mayank:**\n• "What are his skills?"\n• "Tell me about his experience"\n• "How can I contact him?"\n\n**Other:**\n• "Give me a learning tip"\n• "Show me all projects"\n\nOr just use the quick buttons below! 👇`;
        }

        // ===== THANKS =====
        if (this.matches(t, ['thank', 'thanks', 'awesome', 'great', 'helpful', 'perfect'])) {
            return `🙏 **You're welcome!** Happy to help you explore Mayank's portfolio.\n\nIs there anything else you'd like to know? Maybe:\n• Another project category?\n• Specific technologies used?\n• How to get in touch?`;
        }

        // ===== FALLBACK =====
        return `🤔 I'm not sure I understood that fully, but I'm here to help!\n\n**Try asking about:**\n• "Show me Machine Learning projects"\n• "What are Mayank's skills?"\n• "Tell me about the YouTube Studio project"\n• "How can I contact Mayank?"\n\nOr use the quick action buttons below! 👇`;
    }

    matches(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
}

// ===== INITIALIZE ON DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    const assistant = new CosmicAssistant();
    assistant.init();
});
