import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples/index";

export const Layout = () => {
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