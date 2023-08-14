import Link from "next/link";
import Image from "next/image";
import { LoginAction, LoginSec } from "./styles";
import LoginAuth from "@/auth/Login";

const Login = () => {
  return (
    <LoginSec className="w-full h-full" data-testid="login-system">
      <div>
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Quick Stock Logo"
            className="mx-auto"
            width={333}
            height={40}
            priority
          />
        </Link>
        <LoginAuth />
        <LoginAction className="text-center">
          <Link href="/lost-password">Perdeu sua senha?</Link> •{" "}
          <Link href="/register">Cadastre-se</Link>
        </LoginAction>
      </div>
    </LoginSec>
  );
};

export default Login;
