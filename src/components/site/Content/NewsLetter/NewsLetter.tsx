import { NewsForm, NewsHolder } from "./styles";

const NewsLetter = () => {
  return (
    <section>
      <NewsHolder className="grid grid-cols-2 gap-4 container mx-auto items-center">
        <div>
          <h3>Assine nossa NewsLetter</h3>
          <p>Receba nossos comunicados e novidades</p>
        </div>
        <NewsForm>
          <input type="email" placeholder="Seu email" />
          <button type="submit" className="input-btn">Cadastre-se</button>
        </NewsForm>
      </NewsHolder>
    </section>
  );
};

export default NewsLetter;
