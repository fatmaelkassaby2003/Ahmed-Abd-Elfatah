import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="section-header">
                    <h2><span className="highlight-text">Contact</span> Me</h2>
                    <p className="section-subtitle">Let's work together! Feel free to drop me a message.</p>
                </div>

                <div className="contact-wrapper">
                    {/* Contact Info Side */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="info-desc">
                            Ready to start your next project? Call or send me an email and I will get back to you as soon as possible!
                        </p>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>01xxxxxxxxx</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>ahmedabdelfattah3121@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Mansoura, Egypt</p>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-form-box">
                        <form action="https://formsubmit.co/ahmedabdelfatah3121@gmail.com" method="POST">
                            <div className="input-group">
                                <input type="text" name="name" id="name" required placeholder=" " />
                                <label htmlFor="name">Your Name</label>
                            </div>

                            <div className="input-group">
                                <input type="email" name="email" id="email" required placeholder=" " />
                                <label htmlFor="email">Email Address</label>
                            </div>

                            <div className="input-group">
                                <textarea name="message" id="message" cols={30} rows={5} required placeholder=" "></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>

                            <button type="submit" className="btn-submit">
                                Send Message <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
