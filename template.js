// Resume Template Engine
class ResumeTemplate {
    constructor() {
        this.config = null;
    }

    async loadConfig() {
        try {
            const response = await fetch('./config.json');
            this.config = await response.json();
            return this.config;
        } catch (error) {
            console.error('Error loading config:', error);
            throw error;
        }
    }

    generateHTML() {
        if (!this.config) {
            throw new Error('Config not loaded');
        }

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${this.config.meta.description}">
    <meta name="author" content="${this.config.meta.author}">
    <meta property="og:title" content="${this.config.personal.name} - Resume">
    <meta property="og:description" content="${this.config.meta.description}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary">
    <title>${this.config.personal.name} - Resume</title>
    <link rel="stylesheet" href="resume.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Sacramento&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: ${this.config.styling.primary_color};
            --secondary-color: ${this.config.styling.secondary_color};
            --accent-color: ${this.config.styling.accent_color};
            --text-color: ${this.config.styling.text_color};
            --background-color: ${this.config.styling.background_color};
            --header-gradient: ${this.config.styling.header_gradient};
        }
    </style>
</head>
<body>
    <header id="header">
        <div class="header-content">
            <h1 id="name">${this.config.personal.name}</h1>
            <p class="tagline">${this.config.personal.title}</p>
        </div>
    </header>

    <main class="container">
        <aside class="sidebar">
            <section class="contact-info">
                <h3>Contact</h3>
                <div class="contact-item">
                    <span class="label">Email:</span>
                    <a href="mailto:${this.config.personal.email}">${this.config.personal.email}</a>
                </div>
                <div class="contact-item">
                    <span class="label">Phone:</span>
                    <a href="tel:${this.config.personal.phone}">${this.config.personal.phone}</a>
                </div>
                <div class="contact-item">
                    <span class="label">Location:</span>
                    <span>${this.config.personal.location}</span>
                </div>
                <div class="contact-item">
                    <span class="label">LinkedIn:</span>
                    <a href="${this.config.personal.linkedin}" target="_blank" rel="noopener">LinkedIn Profile</a>
                </div>
                <div class="contact-item">
                    <span class="label">GitHub:</span>
                    <a href="${this.config.personal.github}" target="_blank" rel="noopener">GitHub Profile</a>
                </div>
                ${this.config.personal.website ? `
                <div class="contact-item">
                    <span class="label">Website:</span>
                    <a href="${this.config.personal.website}" target="_blank" rel="noopener">Personal Website</a>
                </div>
                ` : ''}
            </section>

            <section class="skills-section">
                <h3>Technical Skills</h3>
                <div class="skill-category">
                    <h4>Programming Languages</h4>
                    <ul class="skills-list">
                        ${this.config.skills.programming_languages.map(lang => `<li>${lang}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h4>Frameworks & Tools</h4>
                    <ul class="skills-list">
                        ${this.config.skills.frameworks_tools.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                </div>
                ${this.config.skills.soft_skills ? `
                <div class="skill-category">
                    <h4>Soft Skills</h4>
                    <ul class="skills-list">
                        ${this.config.skills.soft_skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </section>
        </aside>

        <div class="main-content">
            <section class="summary">
                <h2>Professional Summary</h2>
                <p>${this.config.summary}</p>
            </section>

            <section class="experience">
                <h2>Professional Experience</h2>
                ${this.config.experience.map(job => `
                <div class="job">
                    <div class="job-header">
                        <h3>${job.title}</h3>
                        <span class="company">${job.company}</span>
                        <span class="date-range">${job.start_date} - ${job.end_date}</span>
                    </div>
                    <ul class="achievements">
                        ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                `).join('')}
            </section>

            <section class="education">
                <h2>Education</h2>
                ${this.config.education.map(edu => `
                <div class="education-item">
                    <h3>${edu.degree}</h3>
                    <span class="institution">${edu.institution}</span>
                    <span class="date-range">${edu.graduation_year}</span>
                </div>
                `).join('')}
            </section>

            <section class="projects">
                <h2>Notable Projects</h2>
                ${this.config.projects.map(project => `
                <div class="project">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    ${project.technologies ? `
                    <div class="project-technologies">
                        <strong>Technologies:</strong> ${project.technologies.join(', ')}
                    </div>
                    ` : ''}
                    <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
                </div>
                `).join('')}
            </section>
        </div>
    </main>

    <footer id="footer">
        <p>&copy; ${new Date().getFullYear()} ${this.config.personal.name}. All rights reserved.</p>
    </footer>

    <script>
        // Apply dynamic styling
        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            if (header) {
                header.style.background = getComputedStyle(document.documentElement)
                    .getPropertyValue('--header-gradient');
            }
        });
    </script>
</body>
</html>`;
    }

    async generate() {
        await this.loadConfig();
        return this.generateHTML();
    }
}

// Export for use in build script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResumeTemplate;
} 