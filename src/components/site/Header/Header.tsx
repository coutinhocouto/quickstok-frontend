import Image from "next/image";
import { HeaderMain, RegisterButton } from "./styles";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

const FrontHeader = () => {
  return (
    <HeaderMain>
      <section className="w-full container mx-auto">
        <div className="grid grid-cols-2 gap-4 items-center">
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
              <a href="#">
                <FiLogIn /> Login
              </a>
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

export default FrontHeader;
