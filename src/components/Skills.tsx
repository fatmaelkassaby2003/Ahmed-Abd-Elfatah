import './Skills.css'

const Skills = () => {
    const skills = [
        { img: '/img/html.png', name: 'HTML5' },
        { img: '/img/css (1).png', name: 'CSS3' },
        { img: '/img/database.png', name: 'MYSQL' },
        { img: '/img/php.png', name: 'PHP' },
        { img: '/img/laravel.png', name: 'LARAVEL' },
        { img: '/img/api.png', name: 'API(POSTMAN)' },
        { img: '/img/git.png', name: 'GIT' },
        { img: '/img/github.png', name: 'GITHUB' }
    ]

    return (
        <section id="skills">
            <div className="container">
                <h2>
                    <i className="fa-solid fa-laptop-code"></i>
                    Skills & <span className="text-primary">Abilities</span>
                </h2>
                <hr />
                <div className="skills-content">
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="item" key={index}>
                                <img src={skill.img} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
