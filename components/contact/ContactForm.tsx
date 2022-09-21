import { FormEvent, useState } from "react";
import classes from "./contact-form.module.css";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <section className={classes.contact}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows={5}
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
