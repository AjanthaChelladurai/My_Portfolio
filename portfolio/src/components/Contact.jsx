import React, { useState } from 'react';
import SubmissionPopup from './SubmissionPopup';
// You don't strictly need axios for Formspree, but it's good practice for general APIs.
// For Formspree, a standard fetch is sufficient.

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', email: '', subject: '', message: '' 
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // <--- State for the popup

  const FORM_ENDPOINT = "https://formspree.io/f/xblbjjre"; 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);
    setShowPopup(false); // Reset before new submission

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // SUCCESS: Show the popup and reset the form
        setIsSuccess(true);
        setShowPopup(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // ERROR: Show the error popup
        setIsError(true);
        setShowPopup(true);
      }
    } catch (error) {
      // NETWORK/FETCH ERROR: Show the error popup
      setIsError(true);
      setShowPopup(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
      <div className="p-6 bg-[#071826] border border-gray-800 rounded-lg shadow-xl">
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 text-blue-700">Name</label>
            <input
              type="text" id="name" name="name" required
              value={formData.name} onChange={handleChange} // Controlled input
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Your Name"
            />
          </div>
          {/* 2. Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 text-blue-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="you@example.com"
            />
          </div>

          {/* 3. Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 text-blue-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Specify the subject..."
            />
          </div>

          {/* 4. Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 text-blue-700">Message</label>
            <textarea
              id="message" name="message" rows="4" required
              value={formData.message} onChange={handleChange} // Controlled input
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              placeholder="Your detailed message here..."
            ></textarea>
          </div>

          {/* 5. Send Message Button with Hover Effect */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSending} // Disable button while sending
              className={`w-full px-6 py-3 text-lg font-semibold rounded-md transition duration-300 ease-in-out 
                ${isSending ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-800 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 text-white'}`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
        </form>
        
      </div>

      {/* 2. The Popup/Modal Component */}
      {showPopup && (
        <SubmissionPopup 
          isSuccess={isSuccess} 
          onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
}

