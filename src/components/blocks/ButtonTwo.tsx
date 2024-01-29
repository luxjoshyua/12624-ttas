interface ButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

const ButtonTwo: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = "black",
  textColor = "white",
}) => {
  return (
    <a
      href={href}
      className="cursor-pointer mb:w-[240px] max-w-[219px] py-4 px-4 group relative overflow-hidden bg-white text-lg shadow block sm:ml-0 mx-auto"
      role="button"
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <div
        className={`absolute inset-0 w-3 ${bgColor} transition-all duration-[250ms] ease-out ${textColor} group-hover:w-full`}
      ></div>
      <span className="font-bold text-center relative text-forest group-hover:text-white mx-auto block">
        <h3 className="inline text-24 uppercase text-center">{text}</h3>
      </span>
    </a>
  );
};

export default ButtonTwo;
