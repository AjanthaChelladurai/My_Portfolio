import React from 'react';

// This component receives the success status and a function to close it
export default function SubmissionPopup({ isSuccess, onClose }) {
  
  const title = isSuccess ? "Message Sent! 🎉" : "Submission Failed 😔";
  const message = isSuccess ? 
    "Thank you for you for reaching out to me !" : 
    "There was an error sending your message. Please try again later or contact me directly.";
  const bgColor = isSuccess ? "bg-green-600" : "bg-red-600";
  const textColor = isSuccess ? "text-green-200" : "text-red-200";

  return (
    // Backdrop overlay
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      
      {/* Modal Box */}
      <div className={`w-full max-w-sm rounded-lg shadow-2xl p-6 ${bgColor} text-white`}>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className={`mb-4 ${textColor}`}>{message}</p>
        
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
        
      </div>
    </div>
  );
}