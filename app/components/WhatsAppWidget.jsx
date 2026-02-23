"use client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const [hovered, setHovered] = useState(false);

  const phoneNumber = "919999999999"; // change to your number (with country code)
  const message = "Hello, I would like to know more.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-container ${hovered ? "expand" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FaWhatsapp className="wa-icon" />
      <span className="wa-text">Chat with us</span>
    </a>
  );
}