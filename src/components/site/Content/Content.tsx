import Features from "./Features";
import Integrations from "./Integrations/Integrations";
import NewsLetter from "./NewsLetter";
import Pricing from "./Pricing";

const Content = () => {
  return (
    <>
      <Integrations />
      <Pricing />
      <Features />
      <NewsLetter />
    </>
  );
};

export default Content;