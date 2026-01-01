import './Services.css'

const Services = () => {
    const services = [
        {
            img: '/img/api-dev.avif',
            title: 'API Development & Integration',
            description: 'Develop RESTful & GraphQL APIs for web and mobile applications. Document APIs using Swagger / Postman for better usability.',
            icon: 'fa-solid fa-cloud-arrow-up'
        },
        {
            img: '/img/pngtree-database-manage.png',
            title: 'Database Design & Management',
            description: 'Design and manage SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase, Redis) databases. Implement Database Migrations & Backups.',
            icon: 'fa-solid fa-database'
        },
        {
            img: '/img/security.png',
            title: 'Authentication & Security',
            description: 'Implement secure authentication systems using JWT, OAuth. Protect applications from XSS, CSRF, SQL Injection to ensure robust security.',
            icon: 'fa-solid fa-shield-halved'
        },
        {
            img: '/img/server.png',
            title: 'Server Management',
            description: 'Optimize server performance using NGINX & Apache configurations. Manage deployments and CI/CD pipelines efficiently.',
            icon: 'fa-solid fa-server'
        },
        {
            img: '/img/performance.png',
            title: 'Performance & Scalability',
            description: 'Build scalable applications using Microservices Architecture. Implement Load Balancing & Server Optimization for high traffic.',
            icon: 'fa-solid fa-gauge-high'
        },
        {
            img: '/img/realtime.png',
            title: 'Real-time Features',
            description: 'Develop WebSockets & Real-time Communication using Socket.io. Implement Push Notifications for instant updates across devices.',
            icon: 'fa-solid fa-bolt'
        }
    ]

    return (
        <section id="services">
            <div className="container">
                <div className="section-header">
                    <h2><span className="highlight-text">My</span> Services</h2>
                    <p className="section-subtitle">Delivering high-quality backend solutions tailored to your needs.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="card-content">
                                <div className="icon-wrapper">
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
