import React from 'react'

export const Contact = () => {
    return (
        <section className="clearfix" id="contact">
            <div>
                <h2>Contact me</h2>
            </div>
            <div id="contact-container">
                <div>
                    <p>Feel free to reach out to me by email or connect with me via socials</p>
                </div>
                <div id="email-contact">
                    <h4>Email:</h4>
                    <a href="mailto:j.dodgson@live.co.uk">j.dodgson@live.co.uk</a>
                </div>
                <div id="socials-contact">
                    <h4>Socials:</h4>
                    <div id="contact-icons-container">
                        <a href="https://www.linkedin.com/in/joe-dodgson/" target="_blank" className="fab fa-linkedin"></a>
                        <a href="https://github.com/JoeDodgson/" target="_blank" className="fab fa-github-square"></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
