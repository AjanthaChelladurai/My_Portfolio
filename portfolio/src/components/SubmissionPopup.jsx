/* import React from 'react';


export default function SubmissionPopup({ isSuccess, onClose }) {
  
  const title = isSuccess ? "Message Sent! 🎉" : "Submission Failed 😔";
  const message = isSuccess ? 
    "Thank you for you for reaching out to me !" : 
    "There was an error sending your message. Please try again later or contact me directly.";
  const bgColor = isSuccess ? "bg-green-600" : "bg-red-600";
  const textColor = isSuccess ? "text-green-200" : "text-red-200";

  return (
   
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      
    
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
} */
import React from 'react';

export default function SubmissionPopup({ isSuccess, onClose }) {
  const title = isSuccess ? "Message Sent! 🎉" : "Submission Failed 😔";
  const message = isSuccess
    ? "Thank you for reaching out to me!"
    : "Something went wrong. Try again later.";

  const gradientBorder = isSuccess
    ? "from-green-400 to-blue-400"
    : "from-red-400 to-pink-500";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
   
      <div className={`relative w-full max-w-xs p-[2px] rounded-2xl bg-gradient-to-br ${gradientBorder} shadow-xl`}>
        
     
        <div className="bg-[#0a1a2f]/90 backdrop-blur-xl rounded-2xl p-5 text-center">
          
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {message}
          </p>

          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 w-full text-sm font-semibold rounded-lg
              bg-gradient-to-r from-blue-500 to-purple-500 text-white
              hover:scale-105 active:scale-95 transition-all"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}
