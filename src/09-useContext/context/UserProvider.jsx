import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 444,
//   name: "Dual Athloner",
//   email: "athl12311@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//! Nuestro proveedor necesita recibir los hijos (UserPage, AboutPage, etc. ), los renderizamos dentro del espacio UserContext
//! El value que regresa un objeto {hola: mundo} sera la informacion que vamos a proveer a nuestros hijos en este caso
// return (
//   <UserContext.Provider value={{ hola: "mundo", user: user }}></UserContext.Provider>
