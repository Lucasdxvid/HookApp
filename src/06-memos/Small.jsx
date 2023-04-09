import { memo } from "react";

//El memo es un método de react que dice “memoriza este componente”
//luego de colocar el componente colocamos el método MEMO que mediante paréntesis engloba a todo el componente como su argumento
//Solo cuando las properties cambien se volvera a ejecutar
//Es recomendado para componentes pesados o muy complejos para optimizar sino no es necesario
//Si trabajamos con cra podriamos poner Small.memo porque existe la referencia al contexto o tambien funciona en VITE si importamos React

export const Small = memo(({ value }) => {
  console.log("Me volví a dibujar :(");

  return <small>{value}</small>;
});
