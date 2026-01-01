import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            img: '/img/Screenshot (98).png',
            title: 'Clothes Store',
            description: 'A modern e-commerce platform for fashion, featuring product filtering, cart management, and secure checkout integration.',
            tech: ['Laravel', 'MySQL', 'Bootstrap'],
            link: 'https://github.com/fatmaelkassaby2003/Task9/tree/main/Task9/mytask'
        },
        {
            img: '/img/Screenshot (99).png',
            title: 'Al-Zahraa Store',
            description: 'Full-stack online store application with admin dashboard for inventory management and user order tracking.',
            tech: ['PHP', 'JavaScript', 'CSS3'],
            link: 'https://github.com/fatmaelkassaby2003/Task9/tree/main/Task9/mytask'
        },
        {
            img: '/img/Screenshot (100).png',
            title: 'Wassel Delivery',
            description: 'Delivery service landing page designed for speed and conversion, optimized for mobile responsiveness.',
            tech: ['HTML5', 'SASS', 'jQuery'],
            link: '#'
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
