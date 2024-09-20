import Header from "@/components/Header";
import UnlockYourDream from "@/components/UnlockYourDream";

import image from "../../assets/header.jpg";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Navbar />
      <img src={image.src} alt="logo" className="header-img" />
      <div className="contact-container">
        <div className="contact-form">
          <p className="contact-form-title">Let’s Connect with us!</p>
          <p className="contact-form-description">
            We believe in collaboration and value your input throughout the
            design process. We encourage clients to actively participate in
            discussions, share their ideas, preferences, and feedback.
          </p>
          <p className="contact-input-title">Full Name</p>
          <input type="text" className="contact-input" placeholder="John Doe" />
          <p className="contact-input-title">Email Address</p>
          <input
            type="text"
            className="contact-input"
            placeholder="5hLpC@example.com"
          />
          <p className="contact-input-title">Inquire Subject</p>
          <input
            type="text"
            className="contact-input"
            placeholder="Project"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <p className="contact-input-title">Message</p>
          <textarea className="contact-input" placeholder="Your Message" />
          <button className="contact-input-submit">Send a message</button>
        </div>
        <div className="contact-divider">
          <p className="contact-divider-title">
            Interested in working with us!
          </p>
          <p className="contact-divider-description">
            We encourage our team to fearlessly challenge conventions and
            pioneer new paths.
          </p>
          <div className="contact-divider-details">
            <div className="contact-divider-details-left">
              <p className="contact-divider-details-left-title">Working Mail</p>
              <p className="contact-divider-details-left-subtitle">
                5hLpC@example.com
              </p>
            </div>
            <div className="contact-divider-details-right">
              <p className="contact-divider-details-left-title">Phone Number</p>
              <p className="contact-divider-details-left-subtitle">
                +1 123 456 7890
              </p>
            </div>
          </div>
        </div>
      </div>
      <UnlockYourDream />
    </main>
  );
}
