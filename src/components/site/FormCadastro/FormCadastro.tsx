"use client";

import { useState } from "react";
import { FormPhase, FormRegister, FormSec, Waves } from "./styles";
import { cnpjMask, phoneMask } from "@/utils/Masks";
import Image from "next/image";
import { AiOutlineUserAdd } from "react-icons/ai";

const FormCadastro = () => {
  const [cnpj, setCNPJ] = useState({ cnpj: "" });
  const [phone, setPhone] = useState({ phone: "" });

  const maskCNPJ = (e: any) => {
    const { name, value } = e.target;
    setCNPJ({
      ...cnpj,
      [name]: value,
    });
  };

  const maskPhone = (e: any) => {
    const { name, value } = e.target;
    setPhone({
      ...phone,
      [name]: value,
    });
    console.log(setPhone);
  };

  return (
    <FormSec className="w-full" id="cadastro" data-testid="site-cadastro">
      <div className="container mx-auto">
        <div className="holder items-center">
          <FormPhase>
            <h1>
              A chave para uma gestão de estoque impecável está aqui! Descubra a
              plataforma que vai elevar seu negócio a novos patamares de
              produtividade e lucratividade.
            </h1>
          </FormPhase>
          <FormRegister>
            <form>
              <Image
                src="/whitebox.webp"
                alt="whitebox"
                width={20}
                height={20}
              />
              <h2>
                Crie sua conta agora e aproveite 30 dias grátis, sem surpresas!
              </h2>
              <label>E-mail</label>
              <input type="email" placeholder="seuemail@empresa.com" />
              <label>Nome</label>
              <input type="text" placeholder="Qual seu nome?" />
              <label>CNPJ</label>
              <input
                type="text"
                placeholder="00.000.000/0000-00"
                name="cnpj"
                value={cnpjMask(cnpj.cnpj)}
                onChange={maskCNPJ}
              />
              <label>Razão social</label>
              <input type="text" placeholder="Qual nome da sua empresa?" />
              <label>Número de celular</label>
              <input
                type="text"
                placeholder="(99) 99999-9999"
                name="cnpj"
                value={phoneMask(phone.phone)}
                onChange={maskPhone}
              />
              <label>Senha</label>
              <input type="password" />
              <label>Confirme sua senha</label>
              <input type="password" />
              <button type="submit" className="input-btn">
                <AiOutlineUserAdd /> Criar minha conta
              </button>
            </form>
          </FormRegister>
        </div>
      </div>
      <div className="w-full">
        <Waves
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            ></use>
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f6f4fe"></use>
          </g>
        </Waves>
      </div>
    </FormSec>
  );
};

export default FormCadastro;
