import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16mxfqs", // from EmailJS dashboard
        "template_19nc429", // from EmailJS dashboard
        form.current,
        "3GACXnHtFaXjSCDrp"   // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
    <Navbar/>
      <div
        className="relative w-full h-100 bg-cover bg-center flex items-center justify-center"
        // style={{
        //   backgroundImage: `url(${Img})`,
        // }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold">LET&apos;S TALK</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            We&apos;re here to help and answer any questions you might have.
            <br />
            Feel free to reach out — we&apos;d love to hear from you!
          </p>
        </div>
      </div>

      <div className="bg-white min-h-screen flex items-center justify-center py-10 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name*"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Enter your phone number*"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email*"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">CONTACT INFORMATION</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-lg">📞</span>
                  <span>773-305-1420</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-lg">📍</span>
                  <span>1425 N McLean Blvd, Elgin, IL</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-600 text-lg">📧</span>
                  <span>office@skiptontrans.com</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">BUSINESS HOURS</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 am - 8:00 pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 am - 6:00 pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 am - 5:00 pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
