interface ButtonProps {
  href: string;
  text: string;
  bgColor?: string; // new prop for background color
}

const Button: React.FC<ButtonProps> = ({ href, text, bgColor = "black" }) => {
  return (
    <a
      href={href}
      className={`w-[18rem] py-8 px-4 ${bgColor} hover:opacity-90 text-white graphikwide-reg font-bold text-center`}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <h3 className="inline text-14 uppercase">{text}</h3>
    </a>
  );
};

export default Button;
