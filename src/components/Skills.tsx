import './Skills.css'

const Skills = () => {
    const skills = [
        { img: '/img/html.png', name: 'HTML5', color: '#E34F26' },
        { img: '/img/css (1).png', name: 'CSS3', color: '#1572B6' },
        { img: '/img/database.png', name: 'MySQL', color: '#4479A1' },
        { img: '/img/php.png', name: 'PHP', color: '#777BB4' },
        { img: '/img/laravel.png', name: 'Laravel', color: '#FF2D20' },
        { img: '/img/api.png', name: 'API Design', color: '#FF6C37' },
        { img: '/img/git.png', name: 'Git', color: '#F05032' },
        { img: '/img/github.png', name: 'GitHub', color: '#ffffff' }
    ]

    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">

                    <h2><span className="highlight-text">My</span> Experience</h2>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            className="skill-card"
                            key={index}
                            style={{ '--skill-color': skill.color } as React.CSSProperties}
                        >
                            <div className="icon-box">
                                <img src={skill.img} alt={skill.name} />
                            </div>
                            <h3>{skill.name}</h3>
                            <div className="glow-effect"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
