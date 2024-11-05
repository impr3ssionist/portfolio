import { useRef } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";
import contactData from "./contactConfig";

const ContactCard = ({ contactMethod }) => {
  const Icon = contactMethod.icon;
  return (
    <article className="contact__option">
      <Icon className="contact__option-icon" />
      <h4>{contactMethod.name}</h4>
      <h5>{contactMethod.subTitle}</h5>
      <a
        href={contactMethod.href}
        target={contactMethod.target}
        rel={contactMethod.rel}
      >
        {contactMethod.linkText}
      </a>
    </article>
  );
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contactData.serviceCredentials.serviceID,
        contactData.serviceCredentials.templateID,
        form.current,
        contactData.serviceCredentials.userID
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
          {contactData.contactMethods.map((contactMethod) => (
            <ContactCard key={contactMethod.id} contactMethod={contactMethod} />
          ))}
        </div>
        <form className="email__form" ref={form} onSubmit={sendEmail}>
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
