interface ButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = "black",
  textColor = "white",
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`w-full max-w-[22rem] sm:max-w-[30vw] lg:max-w-[33.5rem] rounded-[4.4rem] py-[1.5rem] lg:py-[3rem] ${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block mx-auto ${className}`}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <p className="pb-0 text-[1.7rem] lg:text-[2.7rem]">{text}</p>
    </a>
  );
};

export default Button;
