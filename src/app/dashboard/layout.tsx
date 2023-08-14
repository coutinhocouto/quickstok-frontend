import React from "react";
import Menu from "@/components/system/Menu";
import "../../styles/globals.scss";
import { Ubuntu } from "next/font/google";
import { DashboardDiv } from "./styles";
import { GlobalProvider } from "@/store/Context";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body className={inter.className}>
        <GlobalProvider>
          <Menu />
          <DashboardDiv>{children}</DashboardDiv>
        </GlobalProvider>
      </body>
    </html>
  );
}
