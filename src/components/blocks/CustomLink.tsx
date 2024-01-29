interface CustomLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  className = "",
  children,
}) => {
  return (
    <>
      {" "}
      <a
        href={href}
        className={className}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {children}
      </a>{" "}
    </>
  );
};

export default CustomLink;
