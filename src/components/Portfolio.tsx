import './Portfolio.css'

const Portfolio = () => {
    const projects = [
        {
            img: '/img/Screenshot (98).png',
            title: 'Clothes Store',
            link: 'https://github.com/fatmaelkassaby2003/Task9/tree/main/Task9/mytask'
        },
        {
            img: '/img/Screenshot (99).png',
            title: 'Al-Zahraa Store',
            link: 'https://github.com/fatmaelkassaby2003/Task9/tree/main/Task9/mytask'
        },
        {
            img: '/img/Screenshot (100).png',
            title: 'Wassel',
            link: '#'
        }
    ]

    return (
        <section id="portfolio">
            <div className="container">
                <h2>
                    <i className="fa-solid fa-laptop-code"></i>
                    My <span className="text-primary">Portfolio</span>
                </h2>
                <hr />
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="item" key={index}>
                            <img src={project.img} alt={project.title} />
                            <div className="item-content">
                                <h3>{project.title}</h3>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
