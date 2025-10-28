import React from "react";

interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg w-full mb-3 transition"
    >
      {text}
    </button>
  );
};
