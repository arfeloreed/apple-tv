import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Button = ({ children, size = "medium", className }: Props) => {
  const sizeClassNames = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-5 py-3",
    large: "text-base px-8 py-4",
  };

  return (
    <button
      className={twMerge(
        "rounded-full bg-white text-textDark",
        sizeClassNames[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
