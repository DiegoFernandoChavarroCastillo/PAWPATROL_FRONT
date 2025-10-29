interface ButtonProps {
  readonly text: string;
  readonly variant?: "primary" | "secondary";
  readonly onClick?: () => void;
}


export default function Button({ text, variant = "primary", onClick }: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-md font-semibold cursor-pointer transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {text}
    </button>
  );
}
