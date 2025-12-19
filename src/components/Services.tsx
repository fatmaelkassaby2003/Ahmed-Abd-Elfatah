import './Services.css'

const Services = () => {
    const services = [
        {
            img: '/img/api-dev.avif',
            title: 'API Development & Integration',
            description: 'Develop RESTful & GraphQL APIs for web and mobile applications. Document APIs using Swagger / Postman for better usability.'
        },
        {
            img: '/img/pngtree-database-manage.png',
            title: 'Database Design & Management',
            description: 'Design and manage SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Firebase, Redis) databases. Implement Database Migrations & Backups to ensure data integrity and recovery.'
        },
        {
            img: '/img/security.png',
            title: 'Authentication & Security',
            description: 'Implement secure authentication systems using JWT, OAuth, and Session-based Authentication. Protect applications from XSS, CSRF, SQL Injection, and other security threats.'
        },
        {
            img: '/img/server.png',
            title: 'Server Management & Deployment',
            description: 'Optimize server performance using NGINX & Apache configurations.'
        },
        {
            img: '/img/performance.png',
            title: 'Performance Optimization & Scalability',
            description: 'Build scalable applications using Microservices Architecture. Implement Load Balancing & Server Optimization to handle high traffic efficiently.'
        },
        {
            img: '/img/realtime.png',
            title: 'Real-time Features & Messaging',
            description: 'Develop WebSockets & Real-time Communication using Socket.io. Implement Push Notifications for web and mobile apps.'
        }
    ]

    return (
        <section id="services">
            <div className="container">
                <div className="heading">
                    <img src="/img/service-logo.png" alt="services" />
                    <h2>My <span className="text-primary">Services</span></h2>
                </div>
                <hr />
                <div className="row">
                    {services.map((service, index) => (
                        <div className="item" key={index}>
                            <img src={service.img} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
