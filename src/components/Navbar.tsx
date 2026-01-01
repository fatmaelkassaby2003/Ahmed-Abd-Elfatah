import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-float">
            <div className="container nav-inner">
                <a href="#" className="brand">
                    A<span className="brand-dot">.</span>
                </a>

                <div className="nav-menu">
                    <a href="#home" className="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Work</a>
                    <a href="#contact">Contact</a>
                </div>

                <a href="#contact" className="btn-chat">
                    Let's Talk <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
