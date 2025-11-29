
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SubmissionPopup from "./SubmissionPopup";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setShowPopup(false);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(), 
      };

      await emailjs.send(
        "service_iyrkdrl",  
        "template_uxreij8",  
        templateParams,
        "efwNbWHKL6hoOpYWP"   
      );

      setIsSuccess(true);
      setShowPopup(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSuccess(false);
      setShowPopup(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 transform transition-transform duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
      <div className="p-6 bg-[#071826] border border-gray-800 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
         
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-700">Name</label>
            <input
              type="text" id="name" name="name" required
              value={formData.name} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Your Name"
            />
          </div>

         
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-blue-700">Email</label>
            <input
              type="email" id="email" name="email" required
              value={formData.email} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="you@example.com"
            />
          </div>

         
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-blue-700">Subject</label>
            <input
              type="text" id="subject" name="subject"
              value={formData.subject} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Subject of your message"
            />
          </div>

          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-blue-700">Message</label>
            <textarea
              id="message" name="message" rows="4" required
              value={formData.message} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Your message here..."
            ></textarea>
          </div>

          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSending}
              className={`w-full px-6 py-3 text-lg font-semibold rounded-md transition duration-300 ease-in-out hover:bg-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-700 hover:scale-105 hover:shadow-lg text-white"
                }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

    
      {showPopup && (
        <SubmissionPopup
          isSuccess={isSuccess}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
