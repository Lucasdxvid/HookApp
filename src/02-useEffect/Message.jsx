import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    //desestructuramos event para acceder directamente a x y
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    //Creamos un listener donde escuchamos el mov del mouse cuando se monta el componente
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      //Eliminamos el evento cuando el componente se desmonte // Esto siempre se manda por referencia a la funcion (onMouseMove)
      window.removeEventListener("mousemove", onMouseMove);
      //Si nosotros no removieramos en el return el listener cuando nuestro useState trate de renderizar / graficar el objeto stringify abajo daria error porque ya no existe
      //Esto se debe a que tratariamos de actualizar el estado de un componente que ya no existe / no esta montado
    };
  }, []);

  return (
    //este ejercisio trabaja junto a SimpleForm.jsx
    <>
      <h3>Usuario ya existe</h3>
      {/* Usamos el JSON STRINGIFY porque es un objeto y para graficarlos hay que pasarlos a un string o extraerlos directamente */}
      {JSON.stringify(coords)}
    </>
  );
};
