import './About.css'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Left Side */}
                    <div className="about-left">
                        <h2>About Me</h2>
                        <p className="tagline">Backend Developer & Tech Enthusiast</p>

                        <div className="about-actions">
                            <a href="#" className="btn-download">
                                <i className="fa-solid fa-download"></i> DOWNLOAD CV
                            </a>
                            <div className="social-row">
                                <a href="https://www.facebook.com/ahmed.abdelfattah.7" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/ahmed_abdelfattah/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://github.com/ahmedabdelfattah" target="_blank"><i className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/ahmed-abdelfattah/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="info-pills">
                            <div className="pill"><span>Age:</span><span>22</span></div>
                            <div className="pill"><span>Residence:</span><span>Egypt</span></div>
                            <div className="pill"><span>Address:</span><span>Mansoura Stadium Street</span></div>
                            <div className="pill"><span>E-mail:</span><span className="email-text">ahmedabdelfattah3121@gmail.com</span></div>
                            <div className="pill"><span>Phone:</span><span>01xxxxxxxxx</span></div>
                            <div className="pill"><span>Availability:</span><span className="text-green">Open for Projects</span></div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="about-right">
                        <p className="bio-text">
                            I'm a Backend Developer with experience in PHP, Laravel, MySQL, GitHub, Postman, and Git.
                            I've completed many projects using these skills to build efficient and scalable solutions.
                        </p>
                        <div className="signature">Ahmed Abd ElFattah</div>

                        <div className="stats-box">
                            <div className="stat-card">
                                <h3>90%</h3>
                                <p>BACKEND</p>
                            </div>
                            <div className="stat-card">
                                <h3>85%</h3>
                                <p>DATABASE</p>
                            </div>
                            <div className="stat-card">
                                <h3>80%</h3>
                                <p>API DEV</p>
                            </div>
                            <div className="stat-card">
                                <h3>75%</h3>
                                <p>PROBLEM SOLVING</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
