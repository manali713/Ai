document.addEventListener('DOMContentLoaded', function () {

    // --- Reusable "What I Do" Section HTML ---
    const whatIDoSectionHTML = `
        <div class="container">
            <div class="section-header reveal">
    <h2 class="workflow-title">Our AI-Powered Expertise</h2>
    <p class="workflow-subtitle">
        We help modern businesses unlock efficiency and growth with intelligent automation, custom AI agents, and data-driven insights.
    </p>
</div>
<div class="expertise-grid">
    <div class="expertise-card card-business reveal" data-reveal-delay="100">
        <div class="card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg></div>
        <h3 class="card-title">Workflow & Process Automation</h3>
        <p class="card-description">Automating repetitive business processes to save time, reduce errors, and scale operations seamlessly.</p>
        <div class="card-activities"><h4>What I Do:</h4><ul class="activities-list"><li>Map and optimize workflows</li><li>Automate approvals & reporting</li><li>Reduce manual workload with AI bots</li></ul></div>
        <div class="card-experience"><div class="experience-item"><span class="experience-number">60%</span><span class="experience-label">Avg. Time Saved</span></div><div class="experience-item"><span class="experience-number">25+</span><span class="experience-label">Processes Automated</span></div></div>
    </div>
    <div class="expertise-card card-product reveal" data-reveal-delay="200">
        <div class="card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"></path></svg></div>
        <h3 class="card-title">Custom AI Agent Development</h3>
        <p class="card-description">Domain-specific AI agents that handle support, sales, or internal tasks with precision and adaptability.</p>
        <div class="card-activities"><h4>What I Do:</h4><ul class="activities-list"><li>Design GPT-4/LangChain agents</li><li>Embed agents in CRM & tools</li><li>Automate complex knowledge workflows</li></ul></div>
        <div class="card-experience"><div class="experience-item"><span class="experience-number">10+</span><span class="experience-label">Industries Served</span></div><div class="experience-item"><span class="experience-number">20+</span><span class="experience-label">Custom Agents Built</span></div></div>
    </div>
    <div class="expertise-card card-ai reveal" data-reveal-delay="250">
        <div class="card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
        <h3 class="card-title">Knowledge Base Automation</h3>
        <p class="card-description">Turning static documentation into smart, self-learning AI knowledge assistants for customers and teams.</p>
        <div class="card-activities"><h4>What I Do:</h4><ul class="activities-list"><li>Automate FAQs with LLMs</li><li>Enable contextual search & answers</li><li>Keep knowledge bases always up to date</li></ul></div>
        <div class="card-experience"><div class="experience-item"><span class="experience-number">40%</span><span class="experience-label">Support Costs Reduced</span></div><div class="experience-item"><span class="experience-number">15+</span><span class="experience-label">Knowledge Systems Automated</span></div></div>
    </div>
    <div class="expertise-card card-ux reveal" data-reveal-delay="350">
        <div class="card-icon"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
        <h3 class="card-title">Sales & CRM AI Integration</h3>
        <p class="card-description">Smarter sales processes with AI-powered CRM workflows that personalize outreach and automate follow-ups.</p>
        <div class="card-activities"><h4>What I Do:</h4><ul class="activities-list"><li>AI-driven lead scoring</li><li>Automated outreach & reminders</li><li>CRM workflow customization</li></ul></div>
        <div class="card-experience"><div class="experience-item"><span class="experience-number">3x</span><span class="experience-label">Sales Efficiency</span></div><div class="experience-item"><span class="experience-number">50+</span><span class="experience-label">CRM Workflows Automated</span></div></div>
    </div>
</div>
        </div>
    `;

    // --- Reusable "Why Work With Me" Section HTML ---
    const whyWorkWithMeHTML = `
        <div class="container why-work-section">
            <div class="section-header reveal">
                <h2 class="workflow-title">Why Work With Me</h2>
                <p class="workflow-subtitle">
                    When you choose me, you're not just hiring a consultant—you're partnering with a strategic ally who transforms complex challenges into breakthrough solutions.
                </p>
            </div>
            <div class="why-cards-grid">
                <div class="why-card card-excellence reveal" data-reveal-delay="100">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div></div>
                    <h3 class="card-title">Proven Excellence</h3>
                    <p class="card-description">Track record of delivering measurable results for international clients across diverse industries.</p>
                    <ul class="card-highlights"><li>98% client satisfaction rate</li><li>Average 40% efficiency improvement</li></ul>
                </div>
                <div class="why-card card-strategy reveal" data-reveal-delay="200">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z"/></svg></div></div>
                    <h3 class="card-title">Strategic Execution</h3>
                    <p class="card-description">My unique blend of strategic thinking and hands-on implementation ensures your projects move from concept to reality seamlessly.</p>
                    <ul class="card-highlights"><li>End-to-end project ownership</li><li>Agile methodologies with measurable KPIs</li></ul>
                </div>
                <div class="why-card card-innovation reveal" data-reveal-delay="300">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L21 5v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg></div></div>
                    <h3 class="card-title">AI-Native Innovation</h3>
                    <p class="card-description">I bring cutting-edge automation solutions that position your business years ahead of competitors.</p>
                    <ul class="card-highlights"><li>Deep expertise in GPT-4 & Langchain</li><li>Custom AI workflows saving 60%+ manual effort</li></ul>
                </div>
                <div class="why-card card-business-acumen reveal" data-reveal-delay="400">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></div></div>
                    <h3 class="card-title">Deep Business Acumen</h3>
                    <p class="card-description">I speak fluent "business" and "tech"—bridging the gap between stakeholders and technical teams with a laser focus on ROI.</p>
                    <ul class="card-highlights"><li>MBA-level strategic thinking</li><li>Market research & competitive analysis</li></ul>
                </div>
                <div class="why-card card-global reveal" data-reveal-delay="500">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg></div></div>
                    <h3 class="card-title">Global Perspective</h3>
                    <p class="card-description">Working across multiple time zones and cultures has sharpened my ability to deliver world-class solutions.</p>
                    <ul class="card-highlights"><li>Experience with US, EU, and APAC markets</li><li>Cross-cultural team leadership</li></ul>
                </div>
                <div class="why-card card-commitment reveal" data-reveal-delay="600">
                    <div class="card-icon-wrapper"><div class="card-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div></div>
                    <h3 class="card-title">Unwavering Commitment</h3>
                    <p class="card-description">Your success is my success. I go beyond contractual obligations to ensure every project exceeds expectations.</p>
                    <ul class="card-highlights"><li>100% on-time delivery guarantee</li><li>Post-launch support included</li></ul>
                </div>
            </div>
        </div>
    `;

    // --- Contact Section HTML ---
    const contactSectionHTML = `
        <div class="container">
            <div class="contact-grid">
                <div class="contact-content reveal">
                    <h2 class="workflow-title" style="text-align: left; ">Ready to Revolutionize Your Operations?</h2>
                    <p>Let's discuss how AI automation can transform your business processes and drive unprecedented growth. Schedule a consultation or reach out to start the conversation.</p>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon"><i data-feather="mail"></i></div>
                            <div><strong>Email: manalik712@gmail.com</div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon"><i data-feather="calendar"></i></div>
                            <div><strong>Availability: Mon-Fri, 9AM-10PM IST</div>
                        </div>
                    </div>
                </div>
                <div class="contact-form glass-card reveal" data-reveal-delay="200">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Project Details *</label>
                            <textarea id="message" name="message" placeholder="Tell me about your automation needs..." required></textarea>
                        </div>
                        <div class="cta-group" style="margin-top: 1.5rem; justify-content: center;">
                            <button type="submit" class="secondary-btn"><i data-feather="globe"></i> Book a Call</button>
                        </div>
                    </form>
                    <div id="formStatus" style="margin-top:1rem;"></div>
                </div>
            </div>
        </div>
    `;

    // --- Education & Internships HTML ---
    const educationInternshipsHTML = `
        <div class="reveal">
            <h3 class="workflow-title">Education & Internships</h3>
            <p class="workflow-subtitle" style="font-size: 30;">Luxury meets precision. From strategic insight to scalable
                        delivery—every phase designed to impress and deliver exceptional results.</p>
            <div class="timeline">
                <div class="timeline-item reveal">
                    <div class="timeline-date">2019 – 2023</div>
                    <div class="timeline-content"><h3>Bachelor of Technology in Computer Engineering <span>| Gujarat Technological University</span></h3><p style="color: var(--accent-color); font-weight: 500;">CGPA: 9.11 | Grade: A+ | First Class Distinction</p><ul><li><i data-feather="chevron-right"></i>Maintained a high CGPA demonstrating devotion to academic performance.</li><li><i data-feather="chevron-right"></i>Acquired a varied skill set including Data Structures, AI, ML, and Software Development.</li><li><i data-feather="chevron-right"></i>Delivered technical projects, presentations and reports, effectively explaining complex ideas.</li></ul></div>
                </div>
                <div class="timeline-item reveal">
                    <div class="timeline-date">May 2023</div>
                    <div class="timeline-content"><h3>Internship in Data Analytics <span>| Pantech Solutions</span></h3><ul><li><i data-feather="chevron-right"></i>Obtained valuable hands-on experience, applying data mining to real-world scenarios.</li><li><i data-feather="chevron-right"></i>Worked on diverse data sets, collected & curated data, and streamlined cleanup systems.</li></ul></div>
                </div>
                <div class="timeline-item reveal">
                    <div class="timeline-date">July 2022</div>
                    <div class="timeline-content"><h3>UI/UX Designer Intern <span>| Laurentian University, Canada</span></h3><ul><li><i data-feather="chevron-right"></i>Collaborated with cross-functional teams to design user-friendly interfaces.</li><li><i data-feather="chevron-right"></i>Conducted requirements gathering for a refined SRS document.</li><li><i data-feather="chevron-right"></i>Created wireframes, prototypes, and mockups to communicate product concepts.</li></ul></div>
                </div>
                 <div class="timeline-item reveal">
                    <div class="timeline-date">2019</div>
                    <div class="timeline-content"><h3>Secondary High school - Science <span>| GSEB Board</span></h3><p style="color: var(--accent-color); font-weight: 500;">Percentile: 98.81 | Percentage: 86%</p></div>
                </div>
            </div>
        </div>
    `;

    // --- Merged Engagements & Activities Section HTML ---
    const engagementsActivitiesHTML = `
        <div class="section">
            <h3 class="workflow-title reveal" style="font-size: 2rem; margin-bottom: 2rem;">Engagements & Activities</h3>
            <div class="resume-grid">
                <div class="glass-card activity-card reveal" data-reveal-delay="0">
                    <span class="icon"><i data-feather="globe"></i></span>
                    <h4>Web Summit Delegate</h4>
                    <p>Represented my company and networked with tech leaders in Lisbon, Portugal.</p>
                </div>
                <div class="glass-card activity-card reveal" data-reveal-delay="100">
                    <span class="icon"><i data-feather="users"></i></span>
                    <h4>Community Leadership</h4>
                    <p>Organized local tech meetups and mentorship programs for aspiring analysts.</p>
                </div>
                <div class="glass-card activity-card reveal" data-reveal-delay="200">
                    <span class="icon"><i data-feather="award"></i></span>
                    <h4>Tech Fest Design Lead</h4>
                    <p>Collaborated with the Design Team as a Graphic Designer for the 2022 Updates Tech Fest.</p>
                </div>
                <div class="glass-card activity-card reveal" data-reveal-delay="300">
                    <span class="icon"><i data-feather="heart"></i></span>
                    <h4>Volunteering (2019-2022)</h4>
                    <p>Happy Club - NGO: Stray Dog Rescue, Community Meals, Emergency Relief, and Clothes Distribution.</p>
                </div>
                <div class="glass-card activity-card reveal" data-reveal-delay="400">
                    <span class="icon"><i data-feather="user-check"></i></span>
                    <h4>Lady Representative (2020-2021)</h4>
                    <p>Demonstrated leadership and effective communication, bridging the gap between students and faculty.</p>
                </div>
                <div class="glass-card activity-card reveal" data-reveal-delay="500">
                    <span class="icon"><i data-feather="edit-3"></i></span>
                    <h4>Marketing & Design Roles</h4>
                    <p>Served on the Marketing Team for the 2021 Exuberance Event.</p>
                </div>
            </div>
        </div>
    `;

    // --- UPDATED: Resume Hero Section HTML ---
    const resumeHeroHTML = `
        <div class="resume-hero">
            <div class="container">
                <div class="resume-content">
                    <div class="resume-text">
                        <h1 class="main-title">Elite Business Intelligence Strategist</h1>
                        <p class="hero-subtitle">
                            Transforming Fortune 500 operations through data-driven insights and cutting-edge automation solutions
                        </p>
                        <div class="expertise-tags">
                            <span class="status-badge">Business Analytics</span>
                            <span class="status-badge">AI Automation</span>
                            <span class="status-badge">Strategic Planning</span>
                        </div>
                        <a href="#contact" class="cta-button">
                            <i class="fas fa-rocket"></i>
                            Let's Collaborate
                        </a>
                    </div>
                    <div class="resume-card">
                        <div class="card-3d">
                            <div class="card-inner">
                                <div class="card-header">
                                    <div class="avatar">MP</div>
                                    <h3 class="card-name">Manali Patel</h3>
                                    <p class="card-title">AI Automation Consultant</p>
                                </div>
                                <div class="stats-grid">
                                    <div class="stat-item">
                                        <div class="stat-number">3+</div>
                                        <div class="stat-label">Years Experience</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">30+</div>
                                        <div class="stat-label">Projects Delivered</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">$2M+</div>
                                        <div class="stat-label">Cost Savings</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">15+</div>
                                        <div class="stat-label">Enterprise Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="stats-grid reveal">
                <div class="stat-item">
                    <div class="stat-number">30+</div>
                    <div class="stat-label">Projects Delivered</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">8+</div>
                    <div class="stat-label">Industries Served</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>
            </div>
        </div>
 

    `;

    // --- UPDATED: Case Study Hero Section HTML ---
    const caseStudyHeroHTML = `
        <div class="casestudy-hero">
            <div class="container">
                <div class="casestudy-content">
                    <div class="casestudy-badge">
                        <i class="fas fa-trophy" style="color: #ffd700;"></i>
                        Award-Winning Solutions
                    </div>
                    <h1 class="main-title">Precision. Innovation. Results.</h1>
                    <p class="casestudy-description">
                        Explore how strategic business intelligence and AI automation have revolutionized operations for industry leaders across the globe.
                    </p>
                    <div class="metrics-showcase">
                        <div class="metric-card">
                            <div class="metric-value">95%</div>
                            <div class="metric-label">Process Efficiency Gain</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">40%</div>
                            <div class="metric-label">Cost Reduction</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">300%</div>
                            <div class="metric-label">ROI Improvement</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">24/7</div>
                            <div class="metric-label">Automated Operations</div>
                        </div>
                    </div>
                    <div class="projects-cta">
                        <a href="#" class="cta-button">
                            <i class="fas fa-eye"></i>
                            View Case Studies
                        </a>
                        <a href="#" class="secondary-btn">
                            <i class="fas fa-calendar"></i>
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>

    `;

    // --- Blog Hero Section HTML ---
    const blogHeroHTML = `
        <div class="casestudy-hero">
            <div class="container">
                <div class="casestudy-content">
                    <div class="casestudy-badge">
                        <i data-feather="edit-3"></i>
                        <span>Blog</span>
                    </div>
                    <h1 class="main-title">Insights & Expertise</h1>
                    <p class="casestudy-description">
                        Discover the latest trends in AI automation, business strategy, and digital transformation through in-depth articles and thought leadership.
                    </p>
                    <div class="metrics-showcase">
                        <div class="metric-card">
                            <div class="metric-value">50+</div>
                            <div class="metric-label">Articles Published</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">10K+</div>
                            <div class="metric-label">Monthly Readers</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">5</div>
                            <div class="metric-label">Categories Covered</div>
                        </div>
                        <div class="metric-card">
                            <div class="metric-value">Weekly</div>
                            <div class="metric-label">New Content</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="floating-element">
            <i data-feather="book-open" style="font-size: 3rem; color: var(--accent-color);"></i>
        </div>
        <div class="floating-element">
            <i data-feather="trending-up" style="font-size: 2.5rem; color: #ffd700;"></i>
        </div>
        <div class="floating-element">
            <i data-feather="lightbulb" style="font-size: 2rem; color: var(--accent-color);"></i>
        </div>
    `;


    // --- Inject Reusable Sections ---
    function injectHTML(elementId, htmlContent) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = htmlContent;
        }
    }

    injectHTML('what-i-do-home', whatIDoSectionHTML);
    injectHTML('what-i-do-resume', whatIDoSectionHTML);
    injectHTML('why-work-with-me', whyWorkWithMeHTML);
    injectHTML('contact-section', contactSectionHTML);
    injectHTML('education-internships', educationInternshipsHTML);
    injectHTML('engagements-activities', engagementsActivitiesHTML);
    injectHTML('resume-hero', resumeHeroHTML);
    injectHTML('casestudy-hero', caseStudyHeroHTML);
    injectHTML('blog-hero', blogHeroHTML);


    // --- Feather Icons Initialization ---
    feather.replace();

    // --- Enhanced Contact Form Implementation ---
    if (window.emailjs === undefined) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
        script.onload = function () {
            emailjs.init('_WmbvM-fLoOwc2DHu');
        };
        document.head.appendChild(script);
    } else {
        emailjs.init('_WmbvM-fLoOwc2DHu');
    }

    // Enhanced contact form validation and submission
    document.addEventListener('submit', function (e) {
        if (e.target && e.target.id === 'contactForm') {
            e.preventDefault();

            const form = e.target;
            const statusDiv = document.getElementById('formStatus');
            const submitBtn = form.querySelector('button[type="submit"]');

            // Get form data
            const formData = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim()
            };

            // Enhanced validation
            const validationErrors = validateContactForm(formData);
            if (validationErrors.length > 0) {
                showContactStatus(statusDiv, validationErrors.join(' '), 'error');
                return;
            }

            // Show loading state
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-feather="loader"></i> Sending...';
            submitBtn.disabled = true;
            showContactStatus(statusDiv, 'Sending your message...', 'loading');

            // Send email
            emailjs.send('service_8fl7fy2', 'template_ndfc28j', {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email
            })
                .then(function (response) {
                    // Success
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    showContactStatus(statusDiv, 'Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
                    form.reset();
                    feather.replace();

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        statusDiv.textContent = '';
                    }, 5000);

                }, function (error) {
                    // Error
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    showContactStatus(statusDiv, 'Sorry, there was an error sending your message. Please try again or email me directly.', 'error');
                    feather.replace();
                });
        }
    });

    // Contact form validation function
    function validateContactForm(data) {
        const errors = [];

        if (!data.name || data.name.length < 2) {
            errors.push('Please enter your full name.');
        }

        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!data.message || data.message.length < 10) {
            errors.push('Please enter a detailed message (at least 10 characters).');
        }

        return errors;
    }

    // Contact form status display
    function showContactStatus(statusDiv, message, type) {
        if (!statusDiv) return;

        statusDiv.textContent = message;
        statusDiv.className = `form-status ${type}`;

        switch (type) {
            case 'error':
                statusDiv.style.color = '#ef4444';
                break;
            case 'success':
                statusDiv.style.color = 'var(--accent-color)';
                break;
            case 'loading':
                statusDiv.style.color = 'var(--text-secondary)';
                break;
        }
    }

    // Email validation helper (reused from newsletter)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add real-time validation feedback
    function initContactFormValidation() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        const inputs = contactForm.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });

            input.addEventListener('input', function () {
                // Clear error state on input
                this.classList.remove('error');
                const errorMsg = this.parentElement.querySelector('.field-error');
                if (errorMsg) errorMsg.remove();
            });
        });
    }

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (field.name) {
            case 'name':
                if (!value || value.length < 2) {
                    isValid = false;
                    errorMessage = 'Please enter your full name';
                }
                break;
            case 'email':
                if (!value || !isValidEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'message':
                if (!value || value.length < 10) {
                    isValid = false;
                    errorMessage = 'Please enter a detailed message (at least 10 characters)';
                }
                break;
        }

        // Remove existing error
        const existingError = field.parentElement.querySelector('.field-error');
        if (existingError) existingError.remove();

        if (!isValid) {
            field.classList.add('error');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.textContent = errorMessage;
            errorDiv.style.color = '#ef4444';
            errorDiv.style.fontSize = '0.8rem';
            errorDiv.style.marginTop = '0.5rem';
            field.parentElement.appendChild(errorDiv);
        } else {
            field.classList.remove('error');
        }

        return isValid;
    }

    // Initialize contact form validation
    setTimeout(initContactFormValidation, 1000);

    // --- ENHANCED: Navbar Scroll Effect with Apple-like smoothness ---
    const nav = document.getElementById('mainNav');
    if (nav) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 50;
                    nav.classList.toggle('scrolled', scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // --- Enhanced Mobile Navigation (Keep Original Design) ---
    function initEnhancedMobileNavigation() {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        // Add smooth scroll behavior to navigation links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // If it's an internal link (starts with #), handle smooth scrolling
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    smoothScrollTo(targetId);
                }
            });
        });

        // Enhanced scroll behavior for mobile
        let lastScrollY = window.scrollY;
        let ticking = false;

        const handleMobileScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrolled = currentScrollY > 50;

                    // Add/remove scrolled class
                    nav.classList.toggle('scrolled', scrolled);

                    // Add subtle hide/show animation on mobile
                    if (window.innerWidth <= 768) {
                        if (currentScrollY > lastScrollY && currentScrollY > 100) {
                            // Scrolling down - slightly hide nav
                            nav.style.transform = 'translateX(-50%) translateY(-10px)';
                            nav.style.opacity = '0.9';
                        } else {
                            // Scrolling up - show nav
                            nav.style.transform = 'translateX(-50%) translateY(0)';
                            nav.style.opacity = '1';
                        }
                    }

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleMobileScroll, { passive: true });

        // Add touch-friendly interactions
        navLinks.forEach(link => {
            link.addEventListener('touchstart', function () {
                this.style.transform = 'scale(0.95)';
            }, { passive: true });

            link.addEventListener('touchend', function () {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        });
    }

    // Initialize enhanced mobile navigation
    initEnhancedMobileNavigation();

    // --- Final Polish and Debugging ---
    function finalPolish() {
        // Ensure all contact sections exist
        const pages = ['index.html', 'resume.html', 'case-studies.html', 'blog.html', 'ai-automation.html'];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Make sure contact section exists
        if (!document.getElementById('contact')) {
            console.warn('Contact section not found on', currentPage);
        }

        // Add visual feedback for contact buttons
        document.querySelectorAll('[data-scroll-to="#contact"]').forEach(btn => {
            btn.style.position = 'relative';
            btn.addEventListener('mouseenter', function () {
                if (window.innerWidth > 768) {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }
            });
            btn.addEventListener('mouseleave', function () {
                if (window.innerWidth > 768) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '';
                }
            });
        });

        // Smooth scroll polyfill for older browsers
        if (!('scrollBehavior' in document.documentElement.style)) {
            const smoothScrollPolyfill = document.createElement('script');
            smoothScrollPolyfill.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
            document.head.appendChild(smoothScrollPolyfill);
        }

        // Add loading complete class
        document.body.classList.add('page-loaded');

        console.log('Mobile responsiveness initialized successfully!');
        console.log('Contact buttons found:', document.querySelectorAll('[data-scroll-to="#contact"]').length);
    }

    // Run final polish after everything is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', finalPolish);
    } else {
        finalPolish();
    }

    // Additional setup after dynamic content loads
    setTimeout(finalPolish, 2000);

    // --- Smooth Scrolling Implementation ---
    function initSmoothScrolling() {
        // Smooth scroll function
        function smoothScrollTo(targetId, offset = 100) {
            const target = document.getElementById(targetId) || document.querySelector(targetId);
            if (!target) return;

            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Enhanced click handler for all buttons and links
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .cta-button, .primary-btn, .secondary-btn');
            if (!target) return;

            const href = target.getAttribute('href');
            const scrollTo = target.getAttribute('data-scroll-to');
            const text = target.textContent.toLowerCase().trim();

            // Check if this should scroll to contact
            const contactTerms = [
                'get started', 'start your journey', 'let\'s collaborate', 'collaborate',
                'contact', 'schedule', 'consultation', 'book a call', 'call',
                'ready to revolutionize', 'revolutionize', 'get in touch', 'reach out'
            ];

            const shouldScrollToContact = scrollTo === '#contact' ||
                href === '#contact' ||
                contactTerms.some(term => text.includes(term));

            if (shouldScrollToContact) {
                e.preventDefault();
                smoothScrollTo('contact');
                return;
            }

            // Handle other internal links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                smoothScrollTo(targetId);
                return;
            }

            if (scrollTo && scrollTo.startsWith('#')) {
                e.preventDefault();
                const targetId = scrollTo.substring(1);
                smoothScrollTo(targetId);
                return;
            }
        });

        // Enhanced contact button detection and setup
        function setupContactButtons() {
            // Comprehensive list of button texts that should scroll to contact
            const contactButtonTexts = [
                'get started',
                'start your journey',
                'let\'s collaborate',
                'collaborate',
                'contact',
                'contact me',
                'schedule consultation',
                'schedule',
                'consultation',
                'book a call',
                'call',
                'ready to revolutionize',
                'revolutionize',
                'get in touch',
                'reach out',
                'hire me',
                'work with me',
                'let\'s work',
                'let\'s talk',
                'discuss',
                'connect'
            ];

            // Find all potential contact buttons
            const allButtons = document.querySelectorAll('a, button, .cta-button, .primary-btn, .secondary-btn');

            allButtons.forEach(btn => {
                const text = btn.textContent.toLowerCase().trim();
                const href = btn.getAttribute('href');

                // Check if button text matches any contact-related terms
                const isContactButton = contactButtonTexts.some(term => text.includes(term)) ||
                    href === '#contact' ||
                    href === '#contact-section' ||
                    btn.hasAttribute('data-scroll-to');

                if (isContactButton) {
                    btn.setAttribute('data-scroll-to', '#contact');
                    btn.style.cursor = 'pointer';

                    // Remove existing href to prevent default navigation
                    if (href && (href.startsWith('#') || href === '')) {
                        btn.removeAttribute('href');
                    }

                    // Add visual indicator that it's clickable
                    btn.style.transition = 'all 0.3s ease';

                    console.log(`Contact button found: "${text}"`);
                }
            });

            // Special handling for specific button classes
            document.querySelectorAll('.workflow-cta a, .projects-cta a').forEach(btn => {
                btn.setAttribute('data-scroll-to', '#contact');
                btn.removeAttribute('href');
            });
        }

        // Initial setup
        setupContactButtons();

        // Re-setup contact buttons after dynamic content loads
        setTimeout(setupContactButtons, 1000);
        setTimeout(setupContactButtons, 3000); // Extra delay for dynamic content
    }

    initSmoothScrolling();

    // --- Enhanced Newsletter Subscription Implementation ---
    function initNewsletterSubscription() {
        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Handle newsletter form submission
        document.addEventListener('submit', function (e) {
            if (e.target && (e.target.classList.contains('newsletter-form') || e.target.id === 'newsletterForm')) {
                e.preventDefault();

                const form = e.target;
                const emailInput = form.querySelector('input[type="email"]');
                const submitBtn = form.querySelector('button[type="submit"], .newsletter-btn');
                const statusDiv = form.querySelector('.form-status') || document.getElementById('newsletterStatus');

                // Validation
                if (!emailInput || !emailInput.value.trim()) {
                    showStatus(statusDiv, 'Please enter your email address.', 'error');
                    return;
                }

                if (!isValidEmail(emailInput.value.trim())) {
                    showStatus(statusDiv, 'Please enter a valid email address.', 'error');
                    return;
                }

                // Show loading state
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i data-feather="loader"></i> Subscribing...';
                submitBtn.disabled = true;

                showStatus(statusDiv, 'Subscribing...', 'loading');

                // Enhanced newsletter subscription with EmailJS integration
                const emailData = {
                    to_email: 'manalik712@gmail.com',
                    from_email: emailInput.value.trim(),
                    subject: 'New Newsletter Subscription',
                    message: `New newsletter subscription from: ${emailInput.value.trim()}`
                };

                // Use EmailJS if available, otherwise simulate
                if (window.emailjs) {
                    emailjs.send('service_8fl7fy2', 'template_ndfc28j', emailData)
                        .then(function (response) {
                            handleSubscriptionSuccess(submitBtn, originalBtnText, statusDiv, emailInput);
                        }, function (error) {
                            handleSubscriptionError(submitBtn, originalBtnText, statusDiv);
                        });
                } else {
                    // Simulate subscription for demo
                    setTimeout(() => {
                        handleSubscriptionSuccess(submitBtn, originalBtnText, statusDiv, emailInput);
                    }, 2000);
                }
            }
        });

        // Handle existing newsletter form in footer
        const newsletterBtn = document.querySelector('.newsletter-btn');
        if (newsletterBtn) {
            newsletterBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const emailInput = document.querySelector('.newsletter-input');
                if (emailInput && emailInput.value.trim()) {
                    // Validate email
                    if (!isValidEmail(emailInput.value.trim())) {
                        alert('Please enter a valid email address.');
                        return;
                    }

                    // Create a temporary form event
                    const form = emailInput.closest('.newsletter-form') || emailInput.parentElement;
                    const event = new Event('submit', { bubbles: true });
                    form.dispatchEvent(event);
                } else {
                    alert('Please enter your email address.');
                }
            });
        }

        // Helper functions
        function showStatus(statusDiv, message, type) {
            if (!statusDiv) return;

            statusDiv.textContent = message;
            statusDiv.className = `form-status ${type}`;

            switch (type) {
                case 'error':
                    statusDiv.style.color = '#ef4444';
                    break;
                case 'success':
                    statusDiv.style.color = 'var(--accent-color)';
                    break;
                case 'loading':
                    statusDiv.style.color = 'var(--text-secondary)';
                    break;
            }
        }

        function handleSubscriptionSuccess(submitBtn, originalBtnText, statusDiv, emailInput) {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            // Show success message
            showStatus(statusDiv, 'Thank you for subscribing! Check your email for confirmation.', 'success');

            // Reset form
            emailInput.value = '';

            // Re-initialize feather icons
            feather.replace();

            // Hide success message after 5 seconds
            setTimeout(() => {
                if (statusDiv) statusDiv.textContent = '';
            }, 5000);
        }

        function handleSubscriptionError(submitBtn, originalBtnText, statusDiv) {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            // Show error message
            showStatus(statusDiv, 'Sorry, there was an error. Please try again later.', 'error');

            // Re-initialize feather icons
            feather.replace();
        }
    }

    initNewsletterSubscription();

    // --- Mobile Touch Interactions Implementation ---
    function initMobileTouchInteractions() {
        const isMobile = window.innerWidth <= 768;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (!isMobile && !isTouchDevice) return;

        // Remove hover effects on touch devices
        const style = document.createElement('style');
        style.textContent = `
            @media (hover: none) and (pointer: coarse) {
                .expertise-card:hover,
                .why-card:hover,
                .blog-card:hover,
                .case-study-card:hover,
                .preview-case-card:hover,
                .cta-button:hover,
                .primary-btn:hover,
                .secondary-btn:hover,
                .tag:hover,
                .nav-link:hover {
                    transform: none !important;
                    box-shadow: none !important;
                    scale: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        // Add touch feedback for interactive elements
        const interactiveElements = document.querySelectorAll(
            '.cta-button, .primary-btn, .secondary-btn, .expertise-card, .why-card, .blog-card, .case-study-card, .nav-link'
        );

        interactiveElements.forEach(element => {
            // Add touch start feedback
            element.addEventListener('touchstart', function (e) {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            }, { passive: true });

            // Remove touch feedback
            element.addEventListener('touchend', function (e) {
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.transition = '';
                }, 100);
            }, { passive: true });

            // Handle touch cancel
            element.addEventListener('touchcancel', function (e) {
                this.style.transform = '';
                this.style.transition = '';
            }, { passive: true });
        });

        // Optimize button sizes for touch
        const buttons = document.querySelectorAll('.cta-button, .primary-btn, .secondary-btn');
        buttons.forEach(button => {
            const currentPadding = window.getComputedStyle(button).padding;
            if (!currentPadding.includes('1rem')) {
                button.style.padding = '1rem 2rem';
                button.style.minHeight = '48px';
            }
        });

        // Add touch-friendly spacing
        const cards = document.querySelectorAll('.expertise-card, .why-card, .blog-card');
        cards.forEach(card => {
            card.style.marginBottom = '1.5rem';
        });

        // Disable complex animations on mobile for performance
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isMobile) {
            const animatedElements = document.querySelectorAll('.floating-orb, .particle, .crystal');
            animatedElements.forEach(element => {
                element.style.animation = 'none';
                element.style.transform = 'none';
            });
        }

        // Add swipe gesture support for mobile navigation
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });

        function handleSwipeGesture() {
            const swipeThreshold = 100;
            const swipeDistance = touchEndX - touchStartX;

            // Only handle swipes when mobile menu is open
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');

            if (navLinks && navLinks.classList.contains('active')) {
                if (swipeDistance < -swipeThreshold) {
                    // Swipe left - close menu
                    mobileToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        }
    }

    // Initialize touch interactions
    initMobileTouchInteractions();

    // Re-initialize on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            initMobileTouchInteractions();
        }
    });

    // --- Mobile Performance Optimization ---
    function initMobilePerformanceOptimizations() {
        const isMobile = window.innerWidth <= 768;
        const isLowEndDevice = navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4;

        if (!isMobile) return;

        // Reduce motion for better performance
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || isLowEndDevice) {
            // Disable complex animations
            const style = document.createElement('style');
            style.textContent = `
                .floating-orb,
                .particle,
                .crystal,
                .hologram-ring,
                .flowing-line,
                .curved-element,
                .glow-orb {
                    animation: none !important;
                    transform: none !important;
                    transition: none !important;
                }

                .reveal {
                    opacity: 1 !important;
                    transform: none !important;
                    transition: opacity 0.3s ease !important;
                }

                .card-3d {
                    transform: none !important;
                }

                .custom-cursor {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
        }

        // Optimize scroll performance
        let scrollTimeout;
        const optimizedScrollHandler = () => {
            if (scrollTimeout) return;

            scrollTimeout = setTimeout(() => {
                // Only run essential scroll handlers on mobile
                const nav = document.getElementById('mainNav');
                if (nav) {
                    const scrolled = window.scrollY > 50;
                    nav.classList.toggle('scrolled', scrolled);
                }
                scrollTimeout = null;
            }, 16); // ~60fps
        };

        // Replace existing scroll handlers with optimized version
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

        // Disable expensive effects on mobile
        const expensiveElements = document.querySelectorAll('.gradient-orb');
        expensiveElements.forEach(element => {
            if (isLowEndDevice) {
                element.style.display = 'none';
            } else {
                element.style.opacity = '0.3'; // Reduce opacity for better performance
            }
        });

        // Optimize images for mobile
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });

        // Debounce resize events
        let resizeTimeout;
        const optimizedResizeHandler = () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Only run essential resize handlers
                if (window.innerWidth <= 768) {
                    initMobileNavigation();
                    initMobileTouchInteractions();
                }
            }, 250);
        };

        window.addEventListener('resize', optimizedResizeHandler, { passive: true });

        // Optimize intersection observers for mobile
        const mobileObserverOptions = {
            threshold: 0.1,
            rootMargin: '50px 0px -50px 0px' // Larger margins for mobile
        };

        // Replace existing reveal observer with mobile-optimized version
        const mobileRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    mobileRevealObserver.unobserve(element);
                }
            });
        }, mobileObserverOptions);

        // Re-observe elements with mobile observer
        document.querySelectorAll('.reveal').forEach(el => {
            mobileRevealObserver.observe(el);
        });

        // Keep particle generation on mobile for same desktop experience
        // const crystalContainer = document.getElementById('crystalContainer');
        // if (crystalContainer) {
        //     crystalContainer.style.display = 'none';
        // }

        // Optimize font loading
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                document.body.classList.add('fonts-loaded');
            });
        }

        // Add mobile-specific CSS optimizations
        const mobileOptimizationStyle = document.createElement('style');
        mobileOptimizationStyle.textContent = `
            @media (max-width: 768px) {
                * {
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }

                .section {
                    will-change: auto;
                }

                .card-3d,
                .expertise-card,
                .why-card {
                    will-change: transform;
                }

                /* Reduce blur effects on mobile */
                .glass-card,
                .nav-content {
                    backdrop-filter: blur(5px) !important;
                }

                /* Optimize shadows */
                .expertise-card,
                .why-card,
                .glass-card {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
                }
            }
        `;
        document.head.appendChild(mobileOptimizationStyle);

        console.log('Mobile performance optimizations applied');
    }

    // Initialize mobile performance optimizations
    if (window.innerWidth <= 768) {
        initMobilePerformanceOptimizations();
    }

    // --- ENHANCED: On-Scroll Reveal Animation with Apple-like physics ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.revealDelay) || 0;
                const element = entry.target;

                // Add spring-like animation
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

                setTimeout(() => {
                    element.classList.add('visible');

                    // Add subtle bounce effect
                    setTimeout(() => {
                        element.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            element.style.transform = 'scale(1)';
                        }, 150);
                    }, 100);
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- ENHANCED: Background & Cursor Effects with Apple-like precision ---
    function setupEffects() {
        const customCursor = document.querySelector('.custom-cursor');
        const body = document.body;

        // Enhanced Custom Cursor Logic with smooth interpolation
        if (customCursor) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            window.addEventListener('mousemove', e => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Smooth cursor following with spring physics
            function updateCursor() {
                const ease = 0.15;
                cursorX += (mouseX - cursorX) * ease;
                cursorY += (mouseY - cursorY) * ease;

                customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
                requestAnimationFrame(updateCursor);
            }
            updateCursor();

            // Enhanced hover effects
            document.querySelectorAll('a, button, .filter-chip, .nav-link-jumper, .tag, .social-icon, .social-link, .card-3d, .metric-card, .preview-case-card').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    customCursor.classList.add('grow');
                    customCursor.style.transform += ' scale(1.5)';
                });
                el.addEventListener('mouseleave', () => {
                    customCursor.classList.remove('grow');
                    customCursor.style.transform = customCursor.style.transform.replace(' scale(1.5)', '');
                });
            });
        }

        // Enhanced Background Theme Logic with smooth transitions
        const backgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const theme = entry.target.dataset.bgTheme;
                    const duration = '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

                    body.style.transition = `--orb-1-color ${duration}, --orb-2-color ${duration}`;

                    switch (theme) {
                        case 'why-work':
                            body.style.setProperty('--orb-1-color', '#8b5cf6');
                            body.style.setProperty('--orb-2-color', '#ec4899');
                            break;
                        case 'resume':
                            body.style.setProperty('--orb-1-color', '#06b6d4');
                            body.style.setProperty('--orb-2-color', '#10b981');
                            break;
                        case 'cases':
                            body.style.setProperty('--orb-1-color', '#f59e0b');
                            body.style.setProperty('--orb-2-color', '#f5576c');
                            break;
                        case 'preview-cases':
                            body.style.setProperty('--orb-1-color', '#6366f1');
                            body.style.setProperty('--orb-2-color', '#8b5cf6');
                            break;
                        case 'blog':
                            body.style.setProperty('--orb-1-color', '#10b981');
                            body.style.setProperty('--orb-2-color', '#06b6d4');
                            break;
                        default:
                            body.style.setProperty('--orb-1-color', '#667eea');
                            body.style.setProperty('--orb-2-color', '#f093fb');
                    }
                }
            });
        }, { threshold: 0.4 });

        document.querySelectorAll('[data-bg-theme]').forEach(section => {
            backgroundObserver.observe(section);
        });

        // Enhanced Particle Creation with Apple-like physics
        const bgEffects = document.querySelector('.bg-effects');
        if (!bgEffects) return;
        if (bgEffects.children.length < 3) {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
                particle.style.animationTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                bgEffects.appendChild(particle);
            }
        }

        // Enhanced Floating Crystals with improved physics
        const crystalContainer = document.getElementById('crystalContainer');
        if (crystalContainer) {
            setInterval(() => {
                if (document.hidden) return;
                const crystal = document.createElement('div');
                crystal.className = 'crystal';
                crystal.style.left = Math.random() * 100 + '%';
                crystal.style.animationDuration = (8 + Math.random() * 4) + 's';
                crystal.style.animationDelay = Math.random() * 2 + 's';
                crystal.style.animationTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

                const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'];
                crystal.style.background = colors[Math.floor(Math.random() * colors.length)];

                crystalContainer.appendChild(crystal);

                setTimeout(() => {
                    if (crystal.parentNode) {
                        crystal.parentNode.removeChild(crystal);
                    }
                }, 12000);
            }, 800);
        }

        // Enhanced 3D Card Interaction with improved physics
        const card3d = document.querySelector('.card-3d');
        if (card3d) {
            let isHovering = false;

            card3d.addEventListener('mouseenter', () => {
                isHovering = true;
                card3d.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });

            card3d.addEventListener('mouseleave', () => {
                isHovering = false;
                card3d.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            });

            card3d.addEventListener('mousemove', (e) => {
                if (!isHovering) return;

                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                const scale = 1.05;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            });
        }

        // NEW: Enhanced Preview Case Study Card Interactions
        document.querySelectorAll('.preview-case-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });

        // NEW: Enhanced Button Hover Effects
        document.querySelectorAll('.cta-button, .primary-btn, .secondary-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.02)';
                btn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
                btn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            });
        });

        // NEW: Enhanced Tag Hover Effects
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'scale(1.1) rotate(2deg)';
                tag.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'scale(1) rotate(0deg)';
                tag.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    setupEffects();
});



const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.workflow-header, .workflow-step, .workflow-cta').forEach(el => {
    observer.observe(el);
});

// Timeline progress animation
const updateTimelineProgress = () => {
    if (window.innerWidth <= 768) return; // Disable on mobile

    const stepsContainer = document.querySelector('.workflow-steps');
    const progress = document.querySelector('.timeline-progress');
    const steps = document.querySelectorAll('.workflow-step');

    if (!stepsContainer || !progress || steps.length === 0) return;

    const containerRect = stepsContainer.getBoundingClientRect();
    const containerTop = containerRect.top + window.scrollY;
    const containerHeight = containerRect.height;

    const scrolled = window.scrollY - containerTop + window.innerHeight * 0.3;
    const progressPercentage = Math.max(0, Math.min(100, (scrolled / containerHeight) * 100));

    progress.style.height = progressPercentage + '%';
};

// Optimized scroll handler
let ticking = false;
const handleScroll = () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateTimelineProgress();
            handleParallax();
            ticking = false;
        });
        ticking = true;
    }
};

// Enhanced parallax for floating orbs
const handleParallax = () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.floating-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.05 + (index * 0.03);
        const yPos = scrolled * speed;
        const rotation = scrolled * 0.02;

        orb.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
    });
};

// Event listeners
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', () => {
    updateTimelineProgress();
    handleParallax();
});
window.addEventListener('resize', updateTimelineProgress);

// Enhanced step hover effects
document.querySelectorAll('.workflow-step').forEach((step, index) => {
    const content = step.querySelector('.step-content');
    const marker = step.querySelector('.step-marker');

    content.addEventListener('mouseenter', () => {
        if (marker) {
            marker.style.transform = 'translateY(-50%) scale(1.3)';
            marker.style.boxShadow = '0 0 30px rgba(255, 106, 193, 0.8), 0 15px 30px rgba(0, 0, 0, 0.4)';
        }
    });

    content.addEventListener('mouseleave', () => {
        if (marker) {
            marker.style.transform = 'translateY(-50%) scale(1)';
            marker.style.boxShadow = '0 0 20px rgba(255, 106, 193, 0.6), 0 10px 20px rgba(0, 0, 0, 0.3)';
        }
    });
});

// Smooth reveal animation for features
document.querySelectorAll('.step-features li').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-20px)';
    feature.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;

    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.2 });

    stepObserver.observe(feature);
});

// Client Success Stories Section JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for testimonials
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const testimonial = entry.target;
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateY(0)';
                testimonialObserver.unobserve(testimonial);
            }
        });
    }, { threshold: 0.1 });

    // Observe all testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        testimonialObserver.observe(card);
    });

    // Parallax effect for floating orbs
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const orbs = document.querySelectorAll('.orb-client-1, .orb-client-2, .orb-client-3');

        orbs.forEach((orb, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = scrolled * speed;
            orb.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Throttle parallax updates
    let parallaxTicking = false;
    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            requestAnimationFrame(() => {
                updateParallax();
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    });

    // Enhanced hover effects for testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 50px rgba(255, 106, 193, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        });
    });

    // Gradient animation for section title
    const title = document.querySelector('.feedback-section .section-title');
    if (title) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            title.style.filter = `hue-rotate(${hue}deg)`;
        }, 50);
    }

    // Mobile optimizations
    if (window.innerWidth <= 768) {
        // Reduce animations on mobile
        document.querySelectorAll('.floating-orb').forEach(orb => {
            orb.style.animation = 'none';
        });

        // Simplify hover effects
        document.querySelectorAll('.testimonial-card').forEach(card => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    }
});


const sectionHeader = document.querySelector('.section-header');
if (sectionHeader) {
  sectionHeader.style.opacity = '1';
}

// --- Technologies Marquee Section JavaScript ---
document.addEventListener('DOMContentLoaded', function () {
    // Pause animations on hover for tools
    document.querySelectorAll('.marquee-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.animationPlayState = 'paused';
        });

        row.addEventListener('mouseleave', () => {
            row.style.animationPlayState = 'running';
        });
    });

    // Enhanced tool icon interactions
    document.querySelectorAll('.tool-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 106, 193, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.marginLeft = '-50px';
            ripple.style.marginTop = '-50px';
            ripple.style.pointerEvents = 'none';

            icon.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

