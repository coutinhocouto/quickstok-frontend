import Image from "next/image";
import { FeaturesH2, FeaturesSec, FeaturesUl } from "./styles";
import { BsCheckAll } from "react-icons/bs";
import CTA from "../CTA";

const Features = () => {
  return (
    <FeaturesSec className="w-full" data-testid="site-features">
      <div className="holder container mx-auto">
        <div>
          <FeaturesH2>
            Ferramentas que <span>seu negócio</span> precisa para crescer
          </FeaturesH2>
          <FeaturesUl>
            <li>
              <BsCheckAll /> ERP
            </li>
            <li>
              <BsCheckAll /> Cadastro de produtos
            </li>
            <li>
              <BsCheckAll /> Emissão de nota fiscal
            </li>
            <li>
              <BsCheckAll /> PDV
            </li>
            <li>
              <BsCheckAll /> Google Shopping
            </li>
            <li>
              <BsCheckAll /> Multi Empresas
            </li>
          </FeaturesUl>
          <CTA link="#cadastro" text="COMECE GRÁTIS" classes="mt-10" />
        </div>
        <div>
          <Image
            src="/showcase.gif"
            alt="Quick Stock Logo"
            className=""
            width={700}
            height={459}
            priority
          />
        </div>
      </div>
    </FeaturesSec>
  );
};

export default Features;
