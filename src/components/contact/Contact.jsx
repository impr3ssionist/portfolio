import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
// import { BsSlack } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ov4urre",
        "template_vq4fn7g",
        form.current,
        "Pv0AsNOnARuq1VUme"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>caleb.p.ford@gmail.com</h5>
            <a
              href="mailto:cpford13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Caleb Ford</h5>
            <a
              href="https://m.me/caleb.p.ford.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
          {/* <article className="contact__option">
            <BsSlack className='contact__option-icon'/>
            <h4>Slack</h4>
            <h5>Send me a Slack message</h5>
            <a href="mailto:cpford13@gmail.com">Send an Email</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your return email address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message to Caleb"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
