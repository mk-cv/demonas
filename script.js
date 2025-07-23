// Global variables
let currentZIndex = 20;
let openWindows = new Set();
let activeSkillsTab = 'product';
let activeExperience = 'insside';
let activeProject = 0;
let terminalHistory = [];
let historyIndex = -1;

// Boot sequence data
const bootTexts = [
    "Initializing system...",
    "Loading neural networks...",
    "Calibrating AI interfaces...",
    "Accessing product manager database...",
    "Optimizing user experience parameters...",
    "Preparing innovation frameworks...",
    "Establishing team leadership protocols...",
    "Ready to disrupt..."
];

// Skills data
const skillsData = {
    product: [
        {
            name: "Product Strategy",
            level: "expert",
            context: "Developed comprehensive product roadmaps and go-to-market strategies for digital products",
            percentage: 100
        },
        {
            name: "User Research",
            level: "advanced",
            context: "Conducted user interviews, usability testing, and data analysis to inform product decisions",
            percentage: 80
        },
        {
            name: "UX/UI Design",
            level: "proficient",
            context: "Collaborated with designers to create intuitive user experiences and interfaces",
            percentage: 60
        },
        {
            name: "Agile/Scrum",
            level: "expert",
            context: "Led cross-functional teams using Agile methodologies, sprint planning, and backlog management",
            percentage: 100
        },
        {
            name: "Roadmapping",
            level: "advanced",
            context: "Created strategic product roadmaps aligned with business objectives and user needs",
            percentage: 80
        },
        {
            name: "MVP Development",
            level: "expert",
            context: "Defined and prioritized minimum viable product features to validate market fit quickly",
            percentage: 100
        }
    ],
    tech: [
        {
            name: "React/Next.js",
            level: "proficient",
            context: "Built and maintained product features using React components and Next.js framework",
            percentage: 60
        },
        {
            name: "JavaScript",
            level: "proficient",
            context: "Implemented interactive features and collaborated with developers on front-end functionality",
            percentage: 60
        },
        {
            name: "SQL/NoSQL",
            level: "familiar",
            context: "Designed data models and worked with development teams on database implementations",
            percentage: 40
        },
        {
            name: "Figma/Design Tools",
            level: "advanced",
            context: "Created wireframes, prototypes, and collaborated on design systems",
            percentage: 80
        },
        {
            name: "API Integration",
            level: "proficient",
            context: "Specified API requirements and coordinated integration between systems",
            percentage: 60
        },
        {
            name: "DevOps Basics",
            level: "familiar",
            context: "Understand CI/CD pipelines and deployment processes to coordinate with engineering teams",
            percentage: 40
        }
    ],
    leadership: [
        {
            name: "Team Leadership",
            level: "advanced",
            context: "Led cross-functional teams of 2-8 people, fostering collaboration and alignment",
            percentage: 80
        },
        {
            name: "Stakeholder Management",
            level: "advanced",
            context: "Built consensus among diverse stakeholders including executives, clients, and technical teams",
            percentage: 80
        },
        {
            name: "Communication",
            level: "expert",
            context: "Translated complex technical concepts for non-technical audiences and vice versa",
            percentage: 100
        },
        {
            name: "Problem Solving",
            level: "advanced",
            context: "Identified root causes and implemented effective solutions to complex product challenges",
            percentage: 80
        },
        {
            name: "Adaptability",
            level: "expert",
            context: "Quickly adjusted strategies in response to market changes and emerging technologies",
            percentage: 100
        },
        {
            name: "Mentoring",
            level: "advanced",
            context: "Guided junior product managers and team members in skill development and career growth",
            percentage: 80
        }
    ],
    ai: [
        {
            name: "Prompt Engineering",
            level: "advanced",
            context: "Designed effective prompts for LLMs to generate high-quality, relevant outputs",
            percentage: 80
        },
        {
            name: "AI Product Integration",
            level: "advanced",
            context: "Incorporated AI capabilities into products to enhance user experience and functionality",
            percentage: 80
        },
        {
            name: "LLM Applications",
            level: "proficient",
            context: "Developed use cases and applications leveraging large language models",
            percentage: 60
        },
        {
            name: "AI Ethics",
            level: "advanced",
            context: "Ensured responsible AI implementation with focus on fairness, transparency, and privacy",
            percentage: 80
        },
        {
            name: "ChatGPT/Claude",
            level: "expert",
            context: "Extensive experience using and optimizing AI assistants for various business applications",
            percentage: 100
        },
        {
            name: "AI UX Design",
            level: "advanced",
            context: "Designed intuitive interfaces for AI-powered features and products",
            percentage: 80
        }
    ]
};

// Experience data
const experienceData = {
    insside: {
        title: "Ssr Product Owner",
        company: "Insside",
        period: "Noviembre 2024 – Actualidad",
        status: "CURRENT",
        color: "from-pink-500 to-purple-500",
        description: [
            "Management of the complete digital product lifecycle (from discovery to MVP).",
            "Work with internal teams and external providers in solution development.",
            "Analysis, documentation, and refinement of requirements to ensure business-aligned deliveries.",
            "Participation in strategic definition and roadmap execution to maximize value."
        ],
        additional: [
            "Working with cross-functional teams on B2B and B2C digital products",
            "Leading AI integration initiatives for process optimization"
        ]
    },
    orbith: {
        title: "Product Analyst & Innovation Cell",
        company: "Orbith",
        period: "Mayo 2023 – Octubre 2024",
        status: "PAST",
        color: "from-blue-500 to-cyan-500",
        description: [
            "Led the development of new digital products for residential segments and ISPs.",
            "Coordinated with legal, commercial, and technical teams to ensure comprehensive implementations.",
            "Analyzed service profitability, defined MVPs, and optimized value propositions.",
            "Led a team of 2 developers in innovation and business intelligence projects, incorporating AI in exploratory stages."
        ],
        additional: [
            "Led the development of a customer portal with real-time tracking features",
            "Implemented AI-powered analytics for network traffic optimization"
        ]
    },
    sap1: {
        title: "Business Processes Associate Consultant",
        company: "SAP",
        period: "Mayo 2022 – Mayo 2023",
        status: "PAST",
        color: "from-green-500 to-teal-500",
        description: [
            "Analyzed client systems and recommended improvements aligned with SAP best practices.",
            "Developed roadmaps for updates and migrations.",
            "Advised on performance and process adoption."
        ],
        additional: [
            "Specialized in ERP optimization and integration solutions",
            "Conducted technical documentation and process mapping workshops"
        ]
    },
    sap2: {
        title: "Product Owner",
        company: "SAP",
        period: "Noviembre 2020 – Mayo 2022",
        status: "PAST",
        color: "from-orange-500 to-yellow-500",
        description: [
            "Defined product vision and prioritized backlog aligned with strategic objectives.",
            "Designed user personas and use scenarios, and conducted user testing.",
            "Conducted training workshops and worked with UI Designers to build functional and attractive interfaces."
        ],
        additional: [
            "Managed the release of a comprehensive dashboard solution for enterprise clients",
            "Facilitated UX research sessions and created detailed user journey maps"
        ]
    }
};

// Projects data
const projectsData = [
    {
        title: "AI-Enhanced Customer Portal",
        description: "Led the development of a customer portal that uses AI to provide personalized recommendations and improve user engagement. The platform resulted in a 35% increase in customer retention.",
        technologies: ["Product Management", "AI Integration", "UX/UI Design", "Agile"],
        color: "from-cyan-500 to-blue-500",
        role: "Lead Product Manager",
        teamSize: "6 members",
        duration: "8 months",
        status: "Completed"
    },
    {
        title: "Real-time Network Monitor",
        description: "Developed a real-time network monitoring tool that uses machine learning to predict potential service disruptions before they occur. The system reduced downtime by 40% and improved customer satisfaction scores.",
        technologies: ["Product Strategy", "Data Visualization", "ML Implementation", "DevOps"],
        color: "from-purple-500 to-pink-500",
        role: "Lead Product Manager",
        teamSize: "6 members",
        duration: "8 months",
        status: "Completed"
    },
    {
        title: "Enterprise Knowledge Base",
        description: "Created a comprehensive knowledge management system with AI-powered search capabilities, enabling teams to find information 70% faster than before. The system includes automated content categorization and personalized learning paths.",
        technologies: ["Information Architecture", "Search Optimization", "Content Strategy", "Team Management"],
        color: "from-green-500 to-teal-500",
        role: "Lead Product Manager",
        teamSize: "6 members",
        duration: "8 months",
        status: "Completed"
    }
];

// Terminal commands
const terminalCommands = {
    help: () => [
        "Available commands:",
        "  about       - Display information about Mindaugas Kučinskas",
        "  skills      - List key skills and competencies",
        "  experience  - Show professional experience",
        "  education   - Display educational background",
        "  contact     - Show contact information",
        "  clear       - Clear the terminal",
        "  help        - Show this help message",
        ""
    ],
    about: () => [
        "// ABOUT MINDAUGAS KUČINSKAS",
        "-------------------------",
        "Product Manager with experience in digital product development, UX/UI, and technology.",
        "Specialized in AI innovation and building products with high impact.",
        "Passionate about open work culture, continuous learning, and building in public.",
        ""
    ],
    skills: () => [
        "// SKILLS",
        "-------------------------",
        "- Product Strategy & Management",
        "- User Experience (UX/UI) Design",
        "- AI & Technology Integration",
        "- Team Leadership & Communication",
        "- Agile/Scrum Methodologies",
        "- Build in Public & Open Work",
        ""
    ],
    experience: () => [
        "// PROFESSIONAL EXPERIENCE",
        "-------------------------",
        "Senior Product Owner | Insside | 2024 - Present",
        "Product Analyst & Innovation Cell | Orbith | 2023 - 2024",
        "Business Processes Associate Consultant | SAP | 2022 - 2023",
        "Product Owner | SAP | 2020 - 2022",
        "",
        "Type 'experience [company]' for details (e.g., 'experience insside')",
        ""
    ],
    education: () => [
        "// EDUCATION",
        "-------------------------",
        "Computer Science Engineering | UADE | 2016 - 2020",
        "UX/UI Design | Coderhouse | 2021",
        "Node.js & Next.js | Digital House | 2022",
        "UX/UI Foundations | Interaction Design Foundation | 2023",
        ""
    ],
    contact: () => [
        "// CONTACT INFORMATION",
        "-------------------------",
        "Email: vijulibe@gmail.com",
        "LinkedIn: linkedin.com/in/yourusername",
        "GitHub: github.com/yourusername",
        "Location: Buenos Aires, Argentina",
        ""
    ],
    clear: () => {
        document.getElementById('terminalOutput').innerHTML = '<div class="terminal-line">Terminal cleared</div><div class="terminal-line"></div>';
        return [];
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    // Make desktop visible
    document.getElementById('desktop').classList.remove('hidden');

    // Handle background music playback
    const bgm = document.getElementById('bgm');
    if (bgm) {
        bgm.loop = false;

        // Attempt to play on load (will fail silently if autoplay is blocked)
        bgm.play().catch(() => {
            // Retry playback after first user interaction
            document.body.addEventListener('click', () => {
                if (bgm.paused) {
                    bgm.play().catch(err => console.warn("Playback failed on user click:", err));
                }
            }, { once: true }); // Only need one click
        });
    }

    // Initialize your features
    initializeEventListeners();
    initializeMatrix();
    updateTime();
    setInterval(updateTime, 1000);
    initializeSwipeGestures();

    // Show UI hints based on device
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        showNotification("Tap on the icons to explore different sections of the CV. Swipe to navigate!");
    } else {
        showNotification("Click on the desktop icons to open different sections of the CV.");
    }

    // Set initial states
    switchExperience('insside');
    switchProject(0);
});

// Matrix effect
function initializeMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const letters = 'アァイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > height && Math.random() > 0.975) drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(draw, 50);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    
}


// Event listeners
function initializeEventListeners() {
    fetchAndDisplayIp();
    // Desktop icons
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const windowId = icon.dataset.window;
            openWindow(windowId);
        });
    });
    
    
    // Window controls
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            const window = e.target.closest('.window');
            closeWindow(window.id);
        }
        
        if (e.target.classList.contains('minimize')) {
            const window = e.target.closest('.window');
            minimizeWindow(window.id);
        }

        if (e.target.classList.contains('maximize')) {
            const window = e.target.closest('.window');
            toggleMaximizeWindow(window);
        }
    });

    // Mobile touch support for window controls
    document.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('close')) {
            const window = e.target.closest('.window');
            closeWindow(window.id);
        }
        if (e.target.classList.contains('minimize')) {
            const window = e.target.closest('.window');
            minimizeWindow(window.id);
        }
        if (e.target.classList.contains('maximize')) {
            const window = e.target.closest('.window');
            toggleMaximizeWindow(window);
        }
    }, { passive: false });
    
    // Start menu
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    
    if (startButton && startMenu) {
        startButton.addEventListener('click', () => {
            startMenu.classList.toggle('hidden');
            startButton.classList.toggle('active');
        });
    }
    
    // Start menu items
    document.querySelectorAll('.start-item[data-window]').forEach(item => {
        item.addEventListener('click', () => {
            const windowId = item.dataset.window;
            openWindow(windowId);
            startMenu.classList.add('hidden');
            startButton.classList.remove('active');
        });
    });
    
    // Click outside to close start menu
    if (startButton && startMenu) {
        document.addEventListener('click', (e) => {
            if (!startButton.contains(e.target) && !startMenu.contains(e.target)) {
                startMenu.classList.add('hidden');
                startButton.classList.remove('active');
            }
        });
    }
    
    // Skills tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            switchSkillsTab(tab);
        });
    });
    
    // Experience tabs
    document.querySelectorAll('.exp-tab').forEach(button => {
        button.addEventListener('click', () => {
            const company = button.dataset.company;
            switchExperience(company);
        });
    });
    
    // Project tabs
    document.querySelectorAll('.project-tab').forEach(button => {
        button.addEventListener('click', () => {
            const project = parseInt(button.dataset.project);
            switchProject(project);
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    const sendAnotherBtn = document.getElementById('sendAnother');
    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', () => {
            document.getElementById('formSuccess').classList.add('hidden');
            contactForm.classList.remove('hidden');
            contactForm.reset();
        });
    }
    
    // Terminal
    const terminalInput = document.getElementById('terminalInput');
    if (terminalInput) {
        terminalInput.addEventListener('keydown', handleTerminalInput);
    }
    
    // Audio toggle
    const audioToggle = document.getElementById('audioToggle');
    if (audioToggle) {
        audioToggle.addEventListener('click', () => {
            const speakerSound = document.getElementById('speakerSound');
            if (speakerSound) {
                speakerSound.play();
            }
            // Toggle audio (placeholder functionality)
            const isPlaying = audioToggle.textContent === '🔊';
            audioToggle.textContent = isPlaying ? '🔇' : '🔊';
        });
    }
    
    // Window dragging
    initializeWindowDragging();
    initializeWindowResizing();
    
    // Custom cursor
    initializeCustomCursor();
    
    // Notification close
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('notification-close')) {
            hideNotification();
        }
    });
}

// Window management
function openWindow(windowId) {
    const window = document.getElementById(windowId + 'Window');
    if (!window) return;
    
    window.classList.remove('hidden');
    window.classList.remove('maximized'); // Always reset maximize on open
    window.style.zIndex = ++currentZIndex;
    openWindows.add(windowId);
    
    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Mobile: full screen windows
        window.style.left = '0px';
        window.style.top = '0px';
        window.style.width = '100vw';
        window.style.height = '100vh';
        
        // No need to add mobile close button
    } else {
        // Desktop: positioned windows
        const rect = window.getBoundingClientRect();
        const x = Math.max(50, Math.min(window.innerWidth - rect.width - 50, 50 + openWindows.size * 30));
        const y = Math.max(50, Math.min(window.innerHeight - rect.height - 100, 50 + openWindows.size * 30));
        
        window.style.left = x + 'px';
        window.style.top = y + 'px';
        window.style.width = '';
        window.style.height = '';
    }
    
    // Add to taskbar
    updateTaskbar();
    
    // Initialize window content
    if (windowId === 'skills') {
        renderSkills();
    } else if (windowId === 'experience') {
        renderExperience();
    } else if (windowId === 'projects') {
        renderProject();
    }
}

function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.add('hidden');
    openWindows.delete(windowId.replace('Window', ''));
    updateTaskbar();
}

function minimizeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.classList.add('hidden');
    // Note: In a full implementation, minimized windows would remain in openWindows
    // but be hidden until clicked in taskbar
}

function bringToFront(windowId) {
    const window = document.getElementById(windowId + 'Window');
    if (window) {
        window.style.zIndex = ++currentZIndex;
        
        // Remove active class from all windows
        document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
        window.classList.add('active');
    }
}

function toggleMaximizeWindow(window) {
    if (!window) return;
    const isMaximized = window.classList.toggle('maximized');
    if (isMaximized) {
        window.style.left = '0px';
        window.style.top = '0px';
        window.style.width = '100vw';
        window.style.zIndex = ++currentZIndex;
    } else {
        // Restore to default size and let openWindow reposition if needed
        window.style.width = '';
        window.style.height = '';
        window.style.left = '';
        window.style.top = '';
        window.style.zIndex = ++currentZIndex;
    }
}

function updateTaskbar() {
    const taskbarItems = document.getElementById('taskbarItems');
    taskbarItems.innerHTML = '';
    
    openWindows.forEach(windowId => {
        const window = document.getElementById(windowId + 'Window');
        if (window && !window.classList.contains('hidden')) {
            const item = document.createElement('button');
            item.className = 'taskbar-item';
            item.textContent = window.dataset.title || windowId;
            item.addEventListener('click', () => {
                const win = document.getElementById(windowId + 'Window');
                if (win && win.classList.contains('hidden')) {
                    win.classList.remove('hidden');
                }
                bringToFront(windowId);
            });
            taskbarItems.appendChild(item);
        }
    });
}

// Skills functionality
function switchSkillsTab(tab) {
    activeSkillsTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.toggle('active', button.dataset.tab === tab);
    });
    
    renderSkills();
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    
    const skills = skillsData[activeSkillsTab];
    
    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <div>
                    <div class="skill-name">${skill.name}</div>
                    <div class="skill-context">${skill.context}</div>
                </div>
                <div class="skill-badge ${skill.level}">${skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</div>
            </div>
            <div class="skill-bar">
                <div class="skill-progress ${skill.level}" style="width: ${skill.percentage}%"></div>
            </div>
        </div>
    `).join('');
    
    // Animate skill bars
    setTimeout(() => {
        container.querySelectorAll('.skill-progress').forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = skills[index].percentage + '%';
            }, index * 100);
        });
    }, 100);
}

// Experience functionality
function switchExperience(company) {
    activeExperience = company;
    
    // Update tab buttons
    document.querySelectorAll('.exp-tab').forEach(button => {
        button.classList.toggle('active', button.dataset.company === company);
    });
    
    renderExperience();
}

function renderExperience() {
    const container = document.getElementById('experienceDetails');
    if (!container) return;
    
    const exp = experienceData[activeExperience];
    
    container.innerHTML = `
        <div class="experience-card">
            <div class="experience-header">
                <div>
                    <div class="experience-title">${exp.title}</div>
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-period">${exp.period}</div>
                </div>
                <div class="experience-status" style="background: linear-gradient(to right, var(--color-from), var(--color-to))" data-color-from="${exp.color.split('-')[1]}" data-color-to="${exp.color.split('-')[3]}">
                    ${exp.status}
                </div>
            </div>
            <div class="experience-description">
                ${exp.description.map(desc => `
                    <div class="description-item">
                        <span class="description-bullet">$</span>
                        <span>${desc}</span>
                    </div>
                `).join('')}
            </div>
            <div class="experience-additional">
                <h4 style="color: #06b6d4; font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; margin-bottom: 0.5rem;">Additional Information:</h4>
                ${exp.additional.map(info => `
                    <div class="description-item">
                        <span class="description-bullet" style="color: #06b6d4;">></span>
                        <span>${info}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Projects functionality
function switchProject(projectIndex) {
    activeProject = projectIndex;
    
    // Update tab buttons
    document.querySelectorAll('.project-tab').forEach((button, index) => {
        button.classList.toggle('active', index === projectIndex);
    });
    
    renderProject();
}

function renderProject() {
    const container = document.getElementById('projectDetails');
    if (!container) return;
    
    const project = projectsData[activeProject];
    
    container.innerHTML = `
        <div class="project-image">
            🚀
        </div>
        <div class="project-content">
            <div class="project-section">
                <div class="project-section-title">
                    <div class="project-bullet" style="background: linear-gradient(to right, var(--project-color-from), var(--project-color-to))" data-color-from="${project.color.split('-')[1]}" data-color-to="${project.color.split('-')[3]}"></div>
                    <span class="project-section-label">PROJECT DESCRIPTION</span>
                </div>
                <div class="project-description">${project.description}</div>
            </div>
            
            <div class="project-section">
                <div class="project-section-title">
                    <div class="project-bullet" style="background: linear-gradient(to right, ${project.color.replace('from-', '').replace('to-', ', ')})"></div>
                    <span class="project-section-label">TECHNOLOGIES & SKILLS</span>
                </div>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-section">
                <div class="project-section-title">
                    <div class="project-bullet" style="background: linear-gradient(to right, ${project.color.replace('from-', '').replace('to-', ', ')})"></div>
                    <span class="project-section-label">PROJECT DATA</span>
                </div>
                <div class="project-data">
                    <div class="data-item">
                        <span class="data-label">Role:</span>
                        <span class="data-value">${project.role}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">Team Size:</span>
                        <span class="data-value">${project.teamSize}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">Duration:</span>
                        <span class="data-value">${project.duration}</span>
                    </div>
                    <div class="data-item">
                        <span class="data-label">Status:</span>
                        <span class="data-value success">${project.status}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Contact form
function handleContactSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const formSuccess = document.getElementById('formSuccess');
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="display: flex; align-items: center; gap: 0.5rem;"><svg class="animate-spin" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Processing...</span>';
    
    setTimeout(() => {
        e.target.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        showNotification("Message sent successfully! I'll get back to you soon.");
    }, 1500);
}

// Terminal functionality
function handleTerminalInput(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim();
        if (input) {
            terminalHistory.unshift(input);
            historyIndex = -1;
            processTerminalCommand(input);
        }
        e.target.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (terminalHistory.length > 0 && historyIndex < terminalHistory.length - 1) {
            historyIndex++;
            e.target.value = terminalHistory[historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            e.target.value = terminalHistory[historyIndex];
        } else if (historyIndex === 0) {
            historyIndex = -1;
            e.target.value = '';
        }
    }
}

function processTerminalCommand(input) {
    const output = document.getElementById('terminalOutput');
    
    // Add command to output
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line white';
    commandLine.textContent = `> ${input}`;
    output.appendChild(commandLine);
    
    // Add empty line
    const emptyLine = document.createElement('div');
    emptyLine.className = 'terminal-line';
    output.appendChild(emptyLine);
    
    // Process command
    const args = input.split(' ');
    const command = args[0].toLowerCase();
    
    let result = [];
    
    if (command === 'experience' && args.length > 1) {
        const company = args[1].toLowerCase();
        const companyData = {
            insside: [
                "// EXPERIENCE: INSSIDE (2024 - Present)",
                "-------------------------",
                "Role: Senior Product Owner",
                "",
                "• Management of the complete digital product lifecycle",
                "• Work with internal teams and external providers",
                "• Analysis and refinement of requirements",
                "• Strategic definition and roadmap execution",
                ""
            ],
            orbith: [
                "// EXPERIENCE: ORBITH (2023 - 2024)",
                "-------------------------",
                "Role: Product Analyst & Innovation Cell",
                "",
                "• Led development of new digital products",
                "• Coordinated with legal, commercial, and technical teams",
                "• Analyzed service profitability and defined MVPs",
                "• Led a team of developers in innovation projects",
                ""
            ],
            sap: [
                "// EXPERIENCE: SAP (2020 - 2023)",
                "-------------------------",
                "Roles: Product Owner (2020-2022), Business Processes Consultant (2022-2023)",
                "",
                "• Defined product vision and prioritized backlog",
                "• Designed user personas and conducted testing",
                "• Analyzed client systems for improvements",
                "• Developed roadmaps for updates and migrations",
                ""
            ]
        };
        
        if (companyData[company]) {
            result = companyData[company];
        } else {
            result = [
                `Company '${args[1]}' not found in experience.`,
                "Try 'insside', 'orbith', or 'sap'",
                ""
            ];
        }
    } else if (terminalCommands[command]) {
        result = terminalCommands[command]();
    } else {
        result = [
            `Command not found: ${command}`,
            "Type 'help' to see available commands",
            ""
        ];
    }
    
    // Add result to output
    result.forEach(line => {
        const resultLine = document.createElement('div');
        resultLine.className = 'terminal-line';
        if (line.startsWith('//')) {
            resultLine.classList.add('cyan');
        } else if (line.startsWith('  ')) {
            resultLine.classList.add('gray');
        }
        resultLine.textContent = line;
        output.appendChild(resultLine);
    });
    
    // Scroll to bottom
    output.scrollTop = output.scrollHeight;
}

// Window dragging
function initializeWindowDragging() {
    let isDragging = false;
    let currentWindow = null;
    let offset = { x: 0, y: 0 };
    
    document.addEventListener('mousedown', (e) => {
        if (e.target.closest('.window-header')) {
            isDragging = true;
            currentWindow = e.target.closest('.window');
            const rect = currentWindow.getBoundingClientRect();
            offset.x = e.clientX - rect.left;
            offset.y = e.clientY - rect.top;
            
            // Bring to front
            currentWindow.style.zIndex = ++currentZIndex;
            
            e.preventDefault();
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging && currentWindow) {
            const x = Math.max(0, Math.min(window.innerWidth - currentWindow.offsetWidth, e.clientX - offset.x));
            const y = Math.max(0, Math.min(window.innerHeight - currentWindow.offsetHeight - 40, e.clientY - offset.y));
            
            currentWindow.style.left = x + 'px';
            currentWindow.style.top = y + 'px';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        currentWindow = null;
    });
}

// Custom cursor
function initializeCustomCursor() {
    const cursor = document.getElementById('customCursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = (e.clientX - 2) + 'px';
            cursor.style.top = (e.clientY - 2) + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.9)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
    }
}

// Notifications
function showNotification(message) {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    
    messageElement.textContent = message;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
}

// Time update
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    if (timeElement && dateElement) {
        timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        dateElement.textContent = now.toLocaleDateString([], { month: '2-digit', day: '2-digit', year: 'numeric' });
    }
}

// Mobile-specific functionality


function initializeTouchEvents() {
    // Add touch feedback for icons
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('touchstart', (e) => {
            icon.style.transform = 'scale(0.95)';
        });
        
        icon.addEventListener('touchend', (e) => {
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Add touch feedback for buttons
    document.querySelectorAll('button, .tab-button, .exp-tab, .project-tab').forEach(btn => {
        btn.addEventListener('touchstart', (e) => {
            btn.style.opacity = '0.7';
        });
        
        btn.addEventListener('touchend', (e) => {
            btn.style.opacity = '1';
        });
    });
}

function initializeSwipeGestures() {
    let startX = 0;
    let startY = 0;
    let isSwipe = false;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipe = true;
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isSwipe) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = startX - currentX;
        const diffY = startY - currentY;
        
        // Prevent default scrolling for horizontal swipes
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {

        }
    }, { passive: false });
    
    document.addEventListener('touchend', (e) => {
        if (!isSwipe) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Check if it's a horizontal swipe
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 100) {
            handleSwipe(diffX > 0 ? 'left' : 'right');
        }
        
        isSwipe = false;
    });
}

function handleSwipe(direction) {
    // Handle swipe navigation for tabs
    const activeWindow = document.querySelector('.window:not(.hidden)');
    if (!activeWindow) return;
    
    // Skills tabs swipe
    if (activeWindow.id === 'skillsWindow') {
        const tabs = ['product', 'tech', 'leadership', 'ai'];
        const currentIndex = tabs.indexOf(activeSkillsTab);
        
        if (direction === 'left' && currentIndex < tabs.length - 1) {
            switchSkillsTab(tabs[currentIndex + 1]);
        } else if (direction === 'right' && currentIndex > 0) {
            switchSkillsTab(tabs[currentIndex - 1]);
        }
    }
    
    // Experience tabs swipe
    if (activeWindow.id === 'experienceWindow') {
        const tabs = ['insside', 'orbith', 'sap1', 'sap2'];
        const currentIndex = tabs.indexOf(activeExperience);
        
        if (direction === 'left' && currentIndex < tabs.length - 1) {
            switchExperience(tabs[currentIndex + 1]);
        } else if (direction === 'right' && currentIndex > 0) {
            switchExperience(tabs[currentIndex - 1]);
        }
    }
    
    // Projects tabs swipe
    if (activeWindow.id === 'projectsWindow') {
        const maxProjects = projectsData.length - 1;
        
        if (direction === 'left' && activeProject < maxProjects) {
            switchProject(activeProject + 1);
        } else if (direction === 'right' && activeProject > 0) {
            switchProject(activeProject - 1);
        }
    }
}

function optimizeMatrixForMobile() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    // Reduce matrix density on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        canvas.style.opacity = '0.1';
    }
}

function handleOrientationChange() {
    setTimeout(() => {
        // Recalculate window positions after orientation change
        const openWindowElements = document.querySelectorAll('.window:not(.hidden)');
        openWindowElements.forEach(window => {
            if (window.innerWidth <= 768) {
                window.style.left = '0px';
                window.style.top = '0px';
                window.style.width = '100vw';
                window.style.height = '100vh';
            }
        });
        
        // Reinitialize matrix
        initializeMatrix();
    }, 500);
}

function handleMobileResize() {
    const isMobile = window.innerWidth <= 768;
    
    // Update all open windows for mobile/desktop
    const openWindowElements = document.querySelectorAll('.window:not(.hidden)');
    openWindowElements.forEach(window => {
        if (isMobile) {
            window.style.left = '0px';
            window.style.top = '0px';
            window.style.width = '100vw';
            window.style.height = '100vh';
            
            // Add mobile close button if not exists
            const windowId = window.id.replace('Window', '');
            addMobileCloseButton(window, windowId);
        } else {
            // Reset to desktop positioning
            window.style.width = '';
            window.style.height = '';
            
            // Remove mobile close button
            const mobileBtn = window.querySelector('.mobile-close-btn');
            if (mobileBtn) {
                mobileBtn.remove();
            }
        }
    });
}

// Enhanced window dragging for mobile
function initializeMobileDragging() {
    let isDragging = false;
    let currentWindow = null;
    let offset = { x: 0, y: 0 };

    document.addEventListener('touchstart', (e) => {
        if (window.innerWidth > 768) return;

        const header = e.target.closest('.window-header');
        if (header) {
            isDragging = true;
            currentWindow = header.closest('.window');
            const touch = e.touches[0];
            const rect = currentWindow.getBoundingClientRect();
            offset.x = touch.clientX - rect.left;
            offset.y = touch.clientY - rect.top;
            currentWindow.style.zIndex = ++currentZIndex;
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (isDragging && currentWindow) {
            if (window.innerWidth <= 768) {
                // On mobile, we don't drag, but we prevent the default behavior
                e.preventDefault();
            }
        }
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isDragging = false;
        currentWindow = null;
    });
}

// Add haptic feedback for supported devices
function addHapticFeedback() {
    if ('vibrate' in navigator) {
        document.querySelectorAll('.icon, button, .tab-button').forEach(element => {
            element.addEventListener('touchstart', () => {

            });
        });
    }
}

// Initialize mobile dragging and haptic feedback
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        initializeMobileDragging();
        addHapticFeedback();
    }
});

function fetchAndDisplayIp() {
    fetch("https://api.ipify.org?format=json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const taskbar = document.querySelector('.taskbar');
            const taskbarRight = document.querySelector('.taskbar-right');

            if (taskbar && taskbarRight && data.ip) {
                const ipElement = document.createElement('div');
                ipElement.innerHTML = `<span class="glitch-ip-only">${data.ip}</span>`;
                ipElement.style.cssText = "margin-left:auto; padding:0 1rem; font-family:'JetBrains Mono', monospace; font-size:0.75rem;";
                taskbar.insertBefore(ipElement, taskbarRight);
            }
        })
        .catch(error => {
            console.warn('Failed to fetch IP address:', error);
            // Optionally show a fallback or do nothing
        });
}


function initializeWindowResizing() {
    const resizableWindows = document.querySelectorAll('.window');

    resizableWindows.forEach(win => {
        const resizers = document.createElement('div');
        resizers.classList.add('resizer-wrapper');

        ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom'].forEach(dir => {
            const resizer = document.createElement('div');
            resizer.className = `resizer ${dir}`;
            resizer.dataset.direction = dir;
            resizers.appendChild(resizer);
        });

        win.appendChild(resizers);

        resizers.addEventListener('mousedown', startResizing);
    });

    function startResizing(e) {
        e.stopPropagation(); // prevent drag conflict
        const target = e.target;
        if (!target.classList.contains('resizer')) return;

        const windowEl = target.closest('.window');
        const direction = target.dataset.direction;
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = windowEl.offsetWidth;
        const startHeight = windowEl.offsetHeight;
        const startLeft = windowEl.offsetLeft;
        const startTop = windowEl.offsetTop;

        function resizeMove(ev) {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;

            if (direction.includes('right')) {
                windowEl.style.width = Math.min(startWidth + dx, window.innerWidth - startLeft) + 'px';
            }
            if (direction.includes('left')) {
                const newWidth = startWidth - dx;
                if (newWidth > 300) {
                    windowEl.style.width = newWidth + 'px';
                    windowEl.style.left = startLeft + dx + 'px';
                }
            }
            if (direction.includes('bottom')) {
                windowEl.style.height = Math.min(startHeight + dy, window.innerHeight - startTop) + 'px';
            }
            if (direction.includes('top')) {
                const newHeight = startHeight - dy;
                if (newHeight > 200) {
                    windowEl.style.height = newHeight + 'px';
                    windowEl.style.top = startTop + dy + 'px';
                }
            }
        }

        function stopResize() {
            document.removeEventListener('mousemove', resizeMove);
            document.removeEventListener('mouseup', stopResize);
        }

        document.addEventListener('mousemove', resizeMove);
        document.addEventListener('mouseup', stopResize);
    }
}
