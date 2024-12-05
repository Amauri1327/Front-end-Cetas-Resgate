import React, { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import FormularioResgate from "../../Components/Form/FormularioResgate"; // Import do componente
import ListaResgates from "../Lista-Resgates/ListaResgates";
import Modal from "../Modal/modal-relatorio";

export const Menu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [rescues, setRescues] = useState([]);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const handlePressCadastrar = () => {
    setShowForm(true); // Exibe o formulário
  };

  const handleBackToMenu = () => {
    setShowForm(false); // Retorna ao menu inicial
  };

  const handleAddRescue = (newRescue) => {
    setRescues((prevRescue) => [newRescue, ...prevRescue]);
    setShowForm(false);
  };

  return (
    <div className="flex justify-center items-center mt-10">
      {!showForm ? (
        <div className="text-center flex justify-center items-center gap-10 h-16 max-w-2xl">
          <div className="bg-blue-100 rounded-xl">
            <button onClick={handlePressCadastrar}>
              <MdOutlineAddBox size={90} />
              Cadastrar
            </button>
          </div>

          <div className="bg-green-100 rounded-xl">
            <button onClick={openModal}>
              <HiOutlineDocumentReport size={90} /> Relatório
            </button>
            <Modal isVisible={isModalVisible} onClose={closeModal} />
          </div>
        </div>
      ) : (
        <FormularioResgate
          onBack={handleBackToMenu}
          onAddRescue={handleAddRescue} // Passa a funcao para adicionar resgate
        />
      )}
    </div>
  );
};

export default Menu;
