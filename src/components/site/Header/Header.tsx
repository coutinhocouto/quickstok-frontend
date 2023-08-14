import Image from "next/image";
import { HeaderMain, RegisterButton } from "./styles";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderMain data-testid="site-header">
      <section className="w-full container mx-auto">
        <div className="holder items-center">
          <div>
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Quick Stock Logo"
                className=""
                width={333}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="text-right">
            <RegisterButton type="button" className="input-btn">
              <Link href="/login">
                <FiLogIn /> Login
              </Link>
            </RegisterButton>
            <RegisterButton type="button" className="input-btn">
              <a href="#cadastro">
                <AiOutlineThunderbolt /> TESTE GRÁTIS
              </a>
            </RegisterButton>
          </div>
        </div>
      </section>
    </HeaderMain>
  );
};

export default Header;
