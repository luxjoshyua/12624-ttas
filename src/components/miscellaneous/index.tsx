import { useMediaQuery } from "react-responsive";
import { ImageProps } from "../../types";
// import rightArrow from '../../assets/images/right-arrow.svg'

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export const SmallHeading = ({
  heading,
  capitalize,
}: {
  heading: string;
  capitalize?: boolean;
}) => (
  <h6
    className={`text-[1.4rem] text-light-blue font-regular ${
      !capitalize ? "uppercase" : null
    } mb-[1rem] font-normal`}
  >
    {heading}
  </h6>
);
