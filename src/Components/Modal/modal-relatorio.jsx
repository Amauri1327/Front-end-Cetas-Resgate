import React, { useState } from "react";
import { PiKeyReturnThin } from "react-icons/pi";

const Modal = ({ isVisible, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleGenerateReport = async (reportType) => {

    if (!startDate || !endDate) {
      alert("Por favor, preencher as datas inicial e final.");
      return;
    }
    if (reportType === "rescueBySpecie" && !searchTerm) {
      alert("Por favor preencher o nome da espécie.");
      return;
    }

    let endPoint;

    switch (reportType) {
      case "applicant":
        endPoint = "/report/applicant/excel";
        break;

      case "rescueBySpecie":
        endPoint = `/list-animalsName-between-dates/export?especie=${searchTerm}&dataInicio=${startDate}&dataFim=${endDate}`;
        break;

      case "rescueByDateRange":
        endPoint = `/list-rescue-between-dates/export?startDate=${startDate}&endDate=${endDate}`;
        break;

      default:
        break;
    }

    try {
      const response = await fetch(`http://localhost:8080/resgates${endPoint}`, {
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
      link.setAttribute(
        "download",
        `relatorio_${reportType}_${searchTerm || "geral"}.xlsx`
      );
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center -mt-80">
      <div className="bg-white p-5 rounded-md shadow-md w-7/12 ">
        <button
          onClick={onClose}
          className="text-xl text-red-500 font-bold float-right"
        >
          X
        </button>
        <div className="mt-5 text-center">
          <h1 className="text-xl font-bold mb-4">Relatórios</h1>

          {/* Botão para gerar relatório de solicitantes */}
          <button
            id="applicant"
            onClick={() => handleGenerateReport("applicant")}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Gerar Relatório de solicitantes
          </button>

          <hr className="my-4" />

          <h2 className="text-lg font-bold mb-2 text-left">Relatório por Espécie</h2>





        {/* ================================================================================ */}
          <div className="flex items-center gap-3">
          {/* Campo para o nome da espécie */}
          <input
            type="text"
            placeholder="Nome da espécie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md"
          />

          {/* Campo para a data inicial */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md"
          />

          {/* Campo para a data final */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md"
          />

          {/* Botão para gerar relatório de espécie */}
          <button
            id="rescueBySpecie"
            onClick={() => handleGenerateReport("rescueBySpecie")}
            className="px-4 w-56 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 -mt-3"
          >
            Gerar
          </button>
          </div>
        {/* ================================================================================ */}

        <hr className="my-1"/>

        <h2 className="text-lg font-bold mb-2 text-left">Relatório  Resgates</h2>



        <div className="flex items-center gap-3">
      
          {/* Campo para a data inicial */}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md"
          />

          {/* Campo para a data final */}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full mb-3 p-2 border rounded-md"
          />

          {/* Botão para gerar relatório de espécie */}
          <button
            id="rescueByDateRange"
            onClick={() => handleGenerateReport("rescueByDateRange")}
            className="px-4 w-56 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 -mt-3"
          >
            Gerar
          </button>
          </div>
        {/* ================================================================================ */}


          





        </div>
      </div>
    </div>
  );
};

export default Modal;
