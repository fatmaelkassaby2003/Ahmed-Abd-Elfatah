import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <hr />
                <div className="about-content">
                    <div className="col-1">
                        <h3>I'm <span className="text-primary">Ahmed Abd ElFattah,</span> a Backend Developer</h3>
                        <p>
                            I'm a Backend Developer, I have experience in PHP, LARAVEL, MYSQL, GITHUB, POSTMAN, GIT.
                        </p>
                        <p>
                            I was able to do a lot of projects using these skills.
                        </p>
                    </div>
                    <div className="col-2">
                        <p><b>Age :</b> 22</p>
                        <p><b>Email :</b> ahmedabdelfattah3121@gmail.com</p>
                        <p><b>Place :</b> Mansoura Stadium Street</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
