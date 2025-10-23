import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(28);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOverText = () => setCursorSize(68);
    const handleMouseLeaveText = () => setCursorSize(28);

    const textElements = document.querySelectorAll("a, button, input, textarea, .cursor-enlarge");

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseOverText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseOverText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-50"
      style={{
        width: cursorSize,
        height: cursorSize,
        background: "transparent",
        border: "1.5px solid rgba(99,102,241,0.95)",
        mixBlendMode: "screen",
        transform: "translateZ(0)",
      }}
      animate={{ x: cursorPosition.x - cursorSize / 2, y: cursorPosition.y - cursorSize / 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    />
  );
}
