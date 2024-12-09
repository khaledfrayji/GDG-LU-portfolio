"use client";
import React from "react";

const Chatbot = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "MEe0P3I-DnFu5fSPLmEmj");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/MEe0P3I-DnFu5fSPLmEmj"
      width="100%"
      style={{ height: "100%", minHeight: "700px", display: "none" }}
      frameBorder="0"
    ></iframe>
  );
};

export default Chatbot;
