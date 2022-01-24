import React, { useState } from 'react';
import '../scss/main.scss';
import { send } from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHanlder = (e) => {
    e.preventDefault();
    send(
      'service_ymx2gqs',
      'template_sgkxgqd',
      { from_name: name, message: `${email}: ${message}` },
      'user_sxJhE2c9pboNolOxeweT0'
    )
      .then((response) => {
        alert('Message sent successfully');
        setEmail('');
        setName('');
        setMessage('');
      })
      .catch((err) => {
        alert('Some error happened');
      });
  };

  return (
    <div id="contact" className="section__contact">
      <div className="contact__container">
        <h1 style={{ color: '#fff' }} className="section-header">
          Contact Me
        </h1>

        <div className="contact__contents">
          <div>
            <p>
              If you wanna hire me or get in touch with me, please feel free to
              drop me a message.
            </p>
          </div>
          <div className="contact__details__container">
            <div className="contact__details">
              <p>
                <i className="fas fa-phone-square-alt"></i> +9779840174717
              </p>
              <p>
                <i className="far fa-envelope"></i> princesaral2013@gmail.com
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/prince.saral.9"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/saral.krk/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/saral-karki-0572481aa/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </p>
            </div>
            <form onSubmit={submitHanlder} className="contact__form">
              <div className="form__box">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nick Reese"
                  required
                />
              </div>
              <div className="form__box">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nick@example.com"
                  required
                />
              </div>
              <div className="form__box">
                <label>Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message......."
                />
              </div>
              <button type="submit" className="submit_form_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
