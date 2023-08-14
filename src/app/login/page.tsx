import Login from "@/components/system/Login";
import { GlobalProvider } from "@/store/Context";

export default function LoginPage() {
  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>
  );
}
