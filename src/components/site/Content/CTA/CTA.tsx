import { AiOutlineThunderbolt } from "react-icons/ai";
import { CTAButton } from "./styles";

const CTA = ({ link, text, classes }: { link: string; text: string; classes?: string;  }) => {
  return (
    <CTAButton type="button" className={`input-btn ${classes}`}>
      <a href={link}>
        <AiOutlineThunderbolt /> {text}
      </a>
    </CTAButton>
  );
};

export default CTA;
