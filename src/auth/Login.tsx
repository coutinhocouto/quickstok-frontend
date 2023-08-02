"use client"
import { LoginForm } from "./styles";
import { useRouter } from "next/navigation";

const LoginAuth = () => {
  const router = useRouter();

  return (
    <LoginForm>
        <input type="text" placeholder="CNPJ"/>
        <input type="password" placeholder=""/>
        <button type="submit" className="input-btn" onClick={() => router.push('/dashboard')}>
            Entrar
        </button>
    </LoginForm>
  );
};

export default LoginAuth;
