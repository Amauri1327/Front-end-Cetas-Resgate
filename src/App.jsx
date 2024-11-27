import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu"
import ListaResgates from "./Components/Lista-Resgates/ListaResgates"


export const App = () => {
  return <div>
      <Navbar />
      <Menu />
      <ListaResgates />
    </div>;
};

export default App;
