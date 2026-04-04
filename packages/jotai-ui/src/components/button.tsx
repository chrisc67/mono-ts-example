import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  disabled: boolean;
}

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   type: "primary" | "secondary",
//   size: "sm" | "md" | "lg",
//   className?: string,
//   disabled: boolean,
// };

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm",
  disabled = false,
  className = "",
  ...rest
}) => {
  const baseClasses = `rounded px-4 py-2 font-semibold 
    focus:outline-none transition`;
  const typeClasses = {
    primary: `bg-blue-500 text-white hover:bg-blue-600`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600`,
    disabled: `bg-gray-300 text-gray-700 cursor-not-allowed`,
  };
  const sizeClasses = {
    sm: `text-xs py-1 px-2`,
    md: `text-base py-2 px-4`,
    lg: `text-lg py-3 px-6`,
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]}
    ${disabled ? typeClasses.disabled : typeClasses[variant]}`;

  return <button className={twMerge(buttonClasses, className)} {...rest} />;
};

export default Button;
