import propTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect(); // esto da informacion del tamaño, width, posicion, etc.
    setBoxSize({ height, width });
  }, [quote]); //La dependencia de cuando se dispara el efecto sera cuando se realize cambios en el quote aunque es inutil porque cuando cambiamos de frase ya se destruye y vuelve a construir

  return (
    <>
      <blockquote className="blockquote text-end bBBq">
        <p className="mb-2" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  quote: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};
