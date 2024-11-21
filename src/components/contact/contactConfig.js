import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const contactData = {
  contactDetails: [
    {
      email: "caleb.p.ford@gmail.com",
      firstName: "Caleb",
      lastName: "Ford",
    },
  ],

  serviceCredentials: [
    {
      serviceID: process.env.SERVICE_ID,
      templateID: process.env.TEMPLATE_ID,
      userID: process.env.USER_ID,
    },
  ],

  contactMethods: [
    {
      id: 1,
      icon: AiOutlineMail,
      name: "Email",
      subTitle: "caleb.p.ford@gmail.com",
      linkText: "Send an Email",
      href: "mailto:caleb.p.ford@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 2,
      icon: RiMessengerLine,
      name: "Messenger",
      subTitle: "Find me on Facebook!",
      linkText: "Send a message",
      href: "https://www.facebook.com/caleb.p.ford.1",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};

export default contactData;
