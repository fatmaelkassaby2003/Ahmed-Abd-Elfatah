import './Header.css'

const Header = () => {
    return (
        <header id="home" className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-text">
                        <div className="status-badge">
                            <span className="pulsing-dot"></span>
                            <span className="badge-value">Available for New Projects</span>
                        </div>

                        <h1 className="hero-title">
                            Backend Visionary <br />
                            <span className="highlight">Ahmed Abd ElFattah</span>
                        </h1>

                        <p className="hero-subtitle">
                            Structuring the digital world with robust <span className="text-white">PHP & Laravel</span> architectures.
                            I build secure, scalable, and high-performance APIs.
                        </p>

                        <div className="cta-group">
                            <a href="#portfolio" className="btn-glow">Explore Work</a>
                            <div className="social-links">
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>

                        <div className="tech-ribbon">
                            <div className="tech-item"><i className="fa-brands fa-laravel"></i> Laravel</div>
                            <div className="tech-item"><i className="fa-brands fa-php"></i> PHP</div>
                            <div className="tech-item"><i className="fa-solid fa-database"></i> MySQL</div>
                            <div className="tech-item"><i className="fa-solid fa-server"></i> API</div>
                        </div>
                    </div>

                    <div className="hero-image-area">
                        <div className="gradient-blur"></div>
                        <img src="/img/1.png" alt="Ahmed" className="hero-person" />

                        <div className="floating-stat">
                            <div className="stat-icon"><i className="fa-solid fa-code"></i></div>
                            <div>
                                <strong>3+ Years</strong>
                                <span>Professional Exp.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
