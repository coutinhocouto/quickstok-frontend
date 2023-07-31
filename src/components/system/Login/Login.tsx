import Link from "next/link";
import Image from "next/image";
import { LoginSec } from "./styles";

const Login = () => {
  return (
    <LoginSec>
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
    </LoginSec>
  );
};

export default Login;
