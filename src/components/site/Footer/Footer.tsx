import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FooterAnimation, FooterHolder, FooterSec } from "./style";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterSec className="w-full" data-testid="site-footer">
      <FooterAnimation>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
        <span>
          <Image
            src="/anim_line.webp"
            alt="anim_line"
            className=""
            width={1}
            height={100}
          />
        </span>
      </FooterAnimation>
      <div className="container mx-auto">
        <FooterHolder>
          <Link href="https://wa.me/5521999999999" target="_blank">
            <AiOutlineWhatsApp /> (99) 99999-9999
          </Link>
          <Link href="mailto:contato@exemplo.com.br" target="_blank">
            <MdEmail /> contato@exemplo.com.br
          </Link>
          <Link href="https://instagram.com.br/quickstock">
            <FaInstagram /> @quickstock
          </Link>
          <h4>Links Úteis</h4>
          <ul>
            <li>
              <Link href="/">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/">Termos de Uso</Link>
            </li>
            <li>
              <Link href="/">Contato</Link>
            </li>
          </ul>
          <p>2023 QutickStock - Todos os direitos reservados</p>
        </FooterHolder>
      </div>
    </FooterSec>
  );
};

export default Footer;
