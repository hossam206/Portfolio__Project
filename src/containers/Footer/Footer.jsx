import React, { useState } from "react";
 
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
import "./Footer.scss";
import { useTheme } from "../../hooks/useTheme";
const Footer = () => {
 
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setIsFormSubmited(true);
  //   e.target.reset();
  // };
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwaqeeb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsFormSubmited(true);
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailTo:hossammohamed6401@gmail.com" className="p-text">
            hossammohamed6401@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +237 690 166 974" className="p-text">
            +20 1069137667
          </a>
        </div>
      </div>
      {!isFormSubmited ? (
        <form
          action="https://formspree.io/f/xpwaqeeb"
          method="POST"
          onSubmit={sendEmail}
          className="app__footer-form"
        >
          <div className="app__flex">
            <input
              type="text"
              className={`p-text ${mode}`}
              placeholder="Your Name"
              required
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className={`p-text ${mode}`}
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className={`p-text ${mode}`}
              required
            ></textarea>
          </div>
          <button type="submit" className={`p-text ${mode}`}>
            {loading ? "Sending..." : " Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className={`head-text ${mode}`}>
            Thank you for getting in touch
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
