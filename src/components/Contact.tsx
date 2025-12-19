import './Contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>
                    <i className="fa-solid fa-headset"></i>
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <div className="row">
                    <img src="/img/con3.jpg" alt="contact" />
                    <form action="https://formsubmit.co/ahmedabdelfatah3121@gmail.com" method="POST">
                        <input type="text" name="name" id="name" placeholder="Name" required />
                        <input type="email" name="email" id="email" placeholder="Email" required />
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" required></textarea>
                        <button type="submit" className="btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
