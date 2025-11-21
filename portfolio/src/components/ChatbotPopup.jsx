import React, { useState } from "react";

export default function ChatbotPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Chatbot 💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-white shadow-xl rounded-lg w-72 h-96 p-4 border">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-semibold text-lg">Chatbot</h3>
            <button onClick={() => setOpen(false)}>❌</button>
          </div>

          <div className="h-full mt-2 overflow-y-auto text-sm text-gray-700">
            <p>Chatbot UI here...</p>
          </div>
        </div>
      )}
    </>
  );
}
