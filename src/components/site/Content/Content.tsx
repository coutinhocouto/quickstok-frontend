import Features from "./Features";
import Integrations from "./Integrations/Integrations";
import NewsLetter from "./NewsLetter";
import Pricing from "./Pricing";

const Content = () => {
  return (
    <main data-testid="site-content">
      <Integrations />
      <Pricing />
      <Features />
      <NewsLetter />
    </main>
  );
};

export default Content;
