import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactForm />
    </>
  );
}

export default Contact;
