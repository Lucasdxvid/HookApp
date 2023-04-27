import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  //Ahora que tenemos nuestro context y provider listos podemos usar el hook useContext para utilizar esa informacion, el value(objeto user)
  //Como parametro recibe el contexto al que apuntamos debido a que podemos tener varios hay que especificarlo
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h2>
        LoginPage <small>{user?.name}</small>
      </h2>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-light"
        onClick={() =>
          setUser({
            id: 444,
            name: "Dual Athloner",
            mail: "athl12311@gmail.com",
          })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};

//!Esto era lo que hicimos primero, el consoleLog nos devolvia los value / informacion provista por su padre por lo que lo desestrucutramos
// const algo = useContext(UserContext);
// console.log(algo);

//! Si el user existe imprimimos, sino no
// LoginPage <small>{user?.name}</small>
