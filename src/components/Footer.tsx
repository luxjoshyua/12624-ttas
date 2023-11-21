import logo from "../assets/common/logo.svg";
import CustomLink from "./blocks/CustomLink";

const Footer = () => {
  return (
    <footer className="integration-message">
      <h3 className="integration-text">
        Advertising feature{" "}
        <span className="reader-only">sponsored by BRAND</span>
      </h3>
      <CustomLink href="https://google.com" className="integration-logo">
        <img src={logo} alt="Brand logo" />
      </CustomLink>
    </footer>
  );
};

export default Footer;
