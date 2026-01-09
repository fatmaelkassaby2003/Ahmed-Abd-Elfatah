import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            img: '/img/abstracteg.png',
            title: 'Abstracteg',
            description: 'Comprehensive project management platform for planning, tracking projects, and managing partnership posts with collaborative features.',
            tech: ['Laravel', 'MySQL', 'Bootstrap'],
            link: 'https://www.abstracteg.com/'
        },
        {
            img: '/img/mdizon.png',
            title: 'Mdizon E-Commerce',
            description: 'Comprehensive e-commerce platform featuring product management, shopping cart, payment integration, and admin dashboard.',
            tech: ['Laravel', 'MySQL', 'Bootstrap'],
            link: 'https://mdizon.com.eg/'
        },
        {
            img: '/img/khtowat.png',
            title: 'Khtowat',
            description: 'Professional training platform specializing in food safety, quality management, and certification courses with interactive learning modules.',
            tech: ['Laravel', 'MySQL', 'Bootstrap'],
            link: 'https://khtowat.net/en'
        }

    ]

    return (
        <section id="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2><span className="highlight-text">My</span> Projects</h2>
                    <p className="section-subtitle">A showcase of my recent backend and full-stack projects.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.img} alt={project.title} />
                                <div className="overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view">
                                        View Project <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
