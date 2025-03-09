type Props = {
  type?: "primary" | "secondary" | "success" | "cancel";
  text: string;
  handlerClick: () => void;
  className?: React.HTMLProps<HTMLElement>["className"];
};

const Button: React.FC<Props> = ({
  type = "primary",
  text,
  handlerClick,
  className,
}) => {
  const baseStyle =
    "rounded-lg border border-transparent px-6 py-2 text-base font-medium cursor-pointer";

  const typeStyle = {
    primary:
      "bg-[#1a1a1a]  transition-[border-color] duration-[250ms] hover:border-[#646cff] focus:outline-4 focus:outline-webkit-focus-ring-color",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    success: "bg-green-500 text-white hover:bg-green-700",
    cancel: "",
  };

  return (
    <button
      className={`${baseStyle} ${typeStyle[type]} ${className}`}
      onClick={handlerClick}
    >
      {text}
    </button>
  );
};

export default Button;
