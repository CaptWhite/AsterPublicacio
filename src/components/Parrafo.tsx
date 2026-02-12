interface Props {
  text: string;
}

export const Parrafo = ({ text }: Props) => {
  let lista: string[] = [];
  const desglosar = (text: string) => {
    const expresionRegular = /(.*?)<i>(.*?)<\/i>(.*)/gms;
    const resultados = expresionRegular.exec(text);
    if (resultados !== null) {
      lista = [...lista, ...resultados.splice(1, 2)];
      desglosar(resultados[1]);
    } else {
      lista = [...lista, text];
    }
  };

  desglosar(text);
  lista = lista.flat();

  return (
    <>
      <p className="mn-paragraph-article-p">
        {lista.map((text, idx) => {
          return idx % 2 == 0 
            ? (<span key={idx} style={{ whiteSpace: "pre-line" }}> {""} {text}{""} </span>) 
            : (<i key={idx} style={{ whiteSpace: "normal" }}> {""} {text}{""} </i>);
        })}
      </p>
    </>
  );
};
