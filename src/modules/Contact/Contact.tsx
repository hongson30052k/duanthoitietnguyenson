import { Fragment } from "react/jsx-runtime";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import "./Contact.css";
import ContactMain from "./components/ContactMain/ContactMain";
import ContactFooter from "./components/ContactFooter/ContactFooter";
const Contact = () => {
  return (
    <Fragment>
      <ContactHeader />
      <ContactMain />
      <ContactFooter />
    </Fragment>
  );
};

export default Contact;
