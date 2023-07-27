import IntegrationItem from "./Item";
import { IntegrationLink, IntegrationSec, IntegrationUl } from "./styles";
import CTA from "../CTA";

const Integrations = () => {
  return (
    <IntegrationSec className="w-full">
      <div className="container mx-auto">
        <h2 className="text-center">
          Tenha uma presença <span>completa</span> na internet
        </h2>
        <p className="text-center">
          Tenha acesso ao maior número de integrações para auxiliar seu negócio
          a vender cada vez mais
        </p>
        <IntegrationUl className="flex">
          <IntegrationItem
            src="/integrations/amazon.webp"
            alt="Amazon"
            width={95}
            height={20}
          />
          <IntegrationItem
            src="/integrations/americanas.webp"
            alt="Americanas"
            width={100}
            height={20}
          />
          <IntegrationItem
            src="/integrations/carrefour.webp"
            alt="Carrefour"
            width={108}
            height={20}
          />
          <IntegrationItem
            src="/integrations/casas-bahia.webp"
            alt="Casas Bahia"
            width={100}
            height={11}
          />
          <IntegrationItem
            src="/integrations/centauro.webp"
            alt="Centauro"
            width={118}
            height={20}
          />
          <IntegrationItem
            src="/integrations/extra.webp"
            alt="Extra"
            width={95}
            height={20}
          />
          <IntegrationItem
            src="/integrations/ifood.webp"
            alt="Ifood"
            width={76}
            height={40}
          />
          <IntegrationItem
            src="/integrations/madeiramadeira.webp"
            alt="Madeira Madeira"
            width={100}
            height={45}
          />
          <IntegrationItem
            src="/integrations/magazine-luiza.webp"
            alt="Magazine Luiza"
            width={154}
            height={20}
          />
          <IntegrationItem
            src="/integrations/mercado-livre.webp"
            alt="Mercado Livre"
            width={100}
            height={26}
          />
          <IntegrationItem
            src="/integrations/netshoes.webp"
            alt="Netshoes"
            width={160}
            height={20}
          />
          <IntegrationItem
            src="/integrations/ponto.webp"
            alt="Ponto Frio"
            width={100}
            height={26}
          />
          <IntegrationItem
            src="/integrations/shopee.webp"
            alt="Shopee"
            width={100}
            height={32}
          />
          <IntegrationItem
            src="/integrations/woocommerce.webp"
            alt="Woocommerce"
            width={100}
            height={20}
          />
          <IntegrationItem
            src="/integrations/zattini.webp"
            alt="Zattini"
            width={95}
            height={20}
          />
        </IntegrationUl>
        <IntegrationLink href="/">ver todas</IntegrationLink>
        <CTA link="#cadastro" text="COMECE GRÁTIS" classes="mx-auto" />
      </div>
    </IntegrationSec>
  );
};

export default Integrations;
