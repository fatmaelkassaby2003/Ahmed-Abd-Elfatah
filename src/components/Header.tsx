import './Header.css'

const Header = () => {
    return (
        <header id="home">
            <div className="header-content">
                <div className="content-text">
                    <p><span className="text-primary">HI There, I'm</span></p>
                    <h1>Ahmed Abd ElFattah</h1>
                    <p className="title">Backend Developer</p>

                    <div className="social">
                        <a href="https://www.facebook.com/ahmed.abdelfattah.7" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/ahmed_abdelfattah/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://github.com/ahmedabdelfattah" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-abdelfattah/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://t.me/ahmedabdelfattah" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    <a href="#about" className="btn-primary">
                        About Me <i className="fa-solid fa-circle-arrow-down"></i>
                    </a>
                </div>

                <img src="/img/1.png" alt="Ahmed Abd ElFattah" />
            </div>
        </header>
    )
}

export default Header
