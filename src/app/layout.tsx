import "./globals.css";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: "QuickStock ERP - Gerencie sua empresa com velocidade e facilidade",
  description: "Gerencie sua empresa com velocidade e facilidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
