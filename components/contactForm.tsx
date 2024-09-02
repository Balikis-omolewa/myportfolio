import React from 'react'

const contactForm = () => (
    // <!---contact-->
    <section id="contact">
        <h2>Contact <span className="me">Me</span></h2>
        <form target="_blank" action="https://formsubmit.co/32f4563a23bccf7263213e6f0b5456f4" method="POST">
            <input type="hidden" name="_subject" value="New submission! From Portfolio" />
            <input type="hidden" name="_template" value="table" />
            <div className="input-box">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-box">
                <input type="number" name="phone" placeholder="Phone" />
                <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea cols="30" rows="18" name="message" placeholder="Message"></textarea>
            <button type="submit" name="submit"><a>Send Message</a></button>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
        </form>

    </section>
)

export default contactForm