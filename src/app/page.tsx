import FrontHeader from "@/components/site/Header";
import FormCadastro from "@/components/site/FormCadastro";
import Content from "@/components/site/Content";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <FrontHeader />
      <main>
        <FormCadastro />
        <Content />
      </main>
      <Footer />      
    </>
  );
}
