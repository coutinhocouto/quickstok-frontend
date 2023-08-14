"use client";
import { FormEvent, useContext, useEffect } from "react";
import { LoginForm } from "./styles";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/store/Context";

const LoginAuth = () => {
  const router = useRouter();

  const { user, setUser } = useContext(GlobalContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser([
      {
        user_id: 1,
        level: 0,
        name: "Lara",
        profile_picture: ""
      },
    ]); 
  };

  useEffect(() => {
    if(user.length > 0) {
      router.push("/dashboard");
    }
  }, [router, user]);

  return (
    <LoginForm data-testid="site-auth" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="CNPJ" />
      <input type="password" placeholder="" />
      <button type="submit" className="input-btn">
        Entrar
      </button>
    </LoginForm>
  );
};

export default LoginAuth;
