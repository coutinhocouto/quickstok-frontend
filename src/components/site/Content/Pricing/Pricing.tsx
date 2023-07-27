import { Price, PriceIconHolder, PricesH2, PricesHolder, PricesSec } from "./styles";
import { FaShippingFast } from "react-icons/fa";
import { PiFastForwardThin } from "react-icons/pi";
import { TbStairsUp } from "react-icons/tb";
import { BsCheckAll } from "react-icons/bs";
import CTA from "../CTA";

const Pricing = () => {
  return (
    <PricesSec>
      <div className="container mx-auto">
        <PricesH2>Nossos Planos</PricesH2>
      </div>
      <div className="grid grid-cols-3 gap-10 container mx-auto ">
        <PricesHolder>
          <PriceIconHolder>
            <FaShippingFast />
          </PriceIconHolder>
          <h3>Fast</h3>
          <span>Para quem está começando</span>
          <Price>R$ 25</Price>
          <CTA link="#cadastro" text="COMECE GRÁTIS" classes="mb-8" />
          <ul>
            <li>
              <BsCheckAll /> Gestão de Frente de Caixa (PDV)
            </li>
            <li>
              <BsCheckAll /> Emissão de NF-e, NFC-e e NFS-e
            </li>
            <li>
              <BsCheckAll /> Gestão de produtos e estoque
            </li>
            <li>
              <BsCheckAll /> Controle de contas a pagar e a receber
            </li>
          </ul>
        </PricesHolder>
        <PricesHolder>
          <PriceIconHolder>
            <PiFastForwardThin />
          </PriceIconHolder>
          <h3>Speedy</h3>
          <span>Para quem quer mais vantagens</span>
          <Price>R$ 90</Price>
          <CTA link="#cadastro" text="COMECE GRÁTIS" classes="mb-8" />
          <ul>
            <li>
              <BsCheckAll /> Gestão de caixa para loja física
            </li>
            <li>
              <BsCheckAll /> Separação e embalagem de pedidos
            </li>
            <li>
              <BsCheckAll /> Controle de múltiplos CNPJs
            </li>
            <li>
              <BsCheckAll /> Fluxo de caixa
            </li>
          </ul>
        </PricesHolder>
        <PricesHolder>
          <PriceIconHolder>
            <TbStairsUp />
          </PriceIconHolder>
          <h3>Express</h3>
          <span>Para empresas já consolidadas</span>
          <Price>R$ 200</Price>
          <CTA link="#cadastro" text="COMECE GRÁTIS" classes="mb-8" />
          <ul>
            <li>
              <BsCheckAll /> Separação e embalagem de produtos
            </li>
            <li>
              <BsCheckAll /> Controle de múltiplos CNPJs
            </li>
            <li>
              <BsCheckAll /> Fluxo de caixa
            </li>
            <li>
              <BsCheckAll /> Importação e atualização automática de pedidos
            </li>
            <li>
              <BsCheckAll /> Impressão automática de DANFE e etiqueta de envio
            </li>
            <li>
              <BsCheckAll /> Separação e embalagem em lote
            </li>
            <li>
              <BsCheckAll /> Planejamento de compras
            </li>
            <li>
              <BsCheckAll /> DRE
            </li>
          </ul>
        </PricesHolder>
      </div>
    </PricesSec>
  );
};

export default Pricing;
