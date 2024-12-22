import React from "react";

const Modal = ({ isVisible, onClose }) => {
  const handleGenerateReport = async () => {
    try {
      const response = await fetch("http://localhost:8080/resgates/report/applicant/excel", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao gerar o relatório");
      }

      const blob = await response.blob();

      // Criar um link para download
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "relatorio_solicitantes.xlsx");
      document.body.appendChild(link);
      link.click();

      // Remover o link depois de usado
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Erro ao gerar o relatório:", error);
      alert("Erro ao gerar o relatório. Tente novamente.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md w-96">
        <button
          onClick={onClose}
          className="text-xl text-red-500 font-bold float-right"
        >
          X
        </button>
        <div className="mt-5 text-center">
          <h1 className="text-xl font-bold mb-4">
            Relatórios
          </h1>
          <button
            onClick={handleGenerateReport}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Gerar Relatório
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
