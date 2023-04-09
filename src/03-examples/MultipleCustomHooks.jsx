import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./index";

export const MultipleCustomHooks = () => {
  //Traemos otro customHook de contador donde le mandamos como valor inicial 1
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  console.log({ data, isLoading, hasError });

  // Si DATA devuelve un booleano true entonces dame la posicion 0 del mismo
  const { author, quote } = !!data && data[0];

  return (
    <>
      <section className="BbQuotesSection">
        <h2>Breaking Bad Quotes</h2>
        <hr />

        {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

        <button
          className="btn btn-light"
          disabled={isLoading}
          onClick={() => increment(1)}
        >
          Next quote
        </button>
      </section>
    </>
  );
};

//! Esto es una forma de realizar la consulta pero se ve feo, es mejor desestructurandola
{
  /* <blockquote className="blockquote text-end">
<p className="mb-2">{data[0].quote}</p>
<footer className="blockquote-footer">{data[0].author}</footer>
</blockquote> */
}

//! Este condicional lo metiamos en nuestro jsx pero para hacerlo mas limpio lo haremos en otro componente
// {isLoading ? (
//   <div className="alert alert-info text-center" role="status">
//     <div
//       className="spinner-border alert alert-info text-center"
//       role="status"
//     >
//       <span className="sr-only"></span>
//     </div>
//   </div>
// ) : (
//   <blockquote className="blockquote text-end">
//     <p className="mb-2">{quote}</p>
//     <footer className="blockquote-footer">{author}</footer>
//   </blockquote>
// )}
