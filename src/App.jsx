import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Menu from "./Components/Menu/Menu"
import ListaResgates from "./Components/Lista-Resgates/ListaResgates"
import Footer from "./Components/Footer/Footer"

export const App = () => {
  return <div>
      <Navbar />
      <Menu />
      <ListaResgates />
      <Footer />
    </div>;
}

export default App;
