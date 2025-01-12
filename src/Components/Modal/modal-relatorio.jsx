import React, { useState } from "react";
import { PiKeyReturnThin } from "react-icons/pi";

const Modal = ({ isVisible, onClose }) => {

  const [startDateApplicant, setStartDateApplicant] = useState("");
  const [endDateApplicant, setEndDateApplicant] = useState("");

  const [specieName, setSpecieName] = useState("");
  const [startDateSpecie, setStartDateSpecie] = useState("");
  const [endDateSpecie, setEndDateSpecie] = useState("");

  const [startDateRescue, setStartDateRescue] = useState("");
  const [endDateRescue, setEndDateRescue] = useState("");

  const [city, setCity] = useState("");
  const [startDateCity, setStartDateCity] = useState("");
  const [endDateCity, setEndDateCity] = useState("");

  const [animalOrigin, setAnimalOrigin] = useState("");
  const [startDateOrigin, setStartDateOrigin] = useState("");
  const [endDateOrigin, setEndDateOrigin] = useState("");



  const handleGenerateReport = async (reportType) => {

    let endPoint;

    switch (reportType) {
      case "solicitantes":
        if(!startDateApplicant || !endDateApplicant){
          alert('Por favor, preencher as datas inicial e final.');
          return;
        }
        endPoint = `/report/applicant-between-dates/export?startDate=${startDateApplicant}&endDate=${endDateApplicant}`;
        break;

      case "rescueBySpecie":
        if(!startDateSpecie || !endDateSpecie){
          alert("Por favor, preencher as datas inicial e final.");
          return;
        } else if (!specieName) {
          alert("Por favor informar o nome da espécie.");
          return;
        }
        endPoint = `/list-animalsName-between-dates/export?especie=${specieName}&dataInicio=${startDateSpecie}&dataFim=${endDateSpecie}`;
        // /list-animalsName-between-dates/export?especie=papagaio&dataInicio=2023-05-01&dataFim=2023-05-30
        break;

      case "rescueByDateRange":
        if(!startDateRescue || !endDateRescue) {
          alert("Por favor, preencher as datas inicial e final.");
          return;
        }
        endPoint = `/list-rescue-between-dates/export?startDate=${startDateRescue}&endDate=${endDateRescue}`;
        break;

      case "rescueByCityDateRange":
        if(!city) {
          alert("Por favor digitar Cidade!");
          return;
        } else if (!startDateCity || !endDateCity) {
          alert("Por favor, preencher as datas inicial e final.");
          return;
        }
        endPoint = `/list-rescue-city-between-dates/export?city=${city}&startDate=${startDateCity}&endDate=${endDateCity}`;
        break;

      case "rescueByOriginDateRange":
        if (!animalOrigin) {
          alert("Digite a origem!");
          return;
        } else if(!startDateOrigin || !endDateOrigin){
          alert("Por favor, preencher as datas inicial e final.");
          return;
        }
        endPoint = `/list-rescue-origin-between-dates/export?origin=${animalOrigin}&startDate=${startDateOrigin}&endDate=${endDateOrigin}`;
        break;

      default:
        break;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/resgates${endPoint}`,
        {
          method: "GET",
        }
      );

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
        `relatorio:_Resgates_${
         reportType || "geral"
        },.xlsx`
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center -mt-10">
      <div className="bg-white p-5 rounded-md shadow-md w-7/12 ">
        <button
          onClick={onClose}
          className="text-xl text-red-500 font-bold float-right"
        >
          X
        </button>
        <div className="mt-5 text-center">
          <h1 className="text-2xl font-bold italic mb-4">Relatórios</h1>

          <hr className="my-4" />

          <h2 className="text-lg font-bold mb-2 text-left">
            Relatório de Solicitantes
          </h2>

          <div className="flex items-center gap-3">
            {/* Campo para a data inicial */}
            <input
              type="date"
              value={startDateApplicant}
              onChange={(e) => setStartDateApplicant(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data final */}
            <input
              type="date"
              value={endDateApplicant}
              onChange={(e) => setEndDateApplicant(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Botão para gerar relatório de espécie */}
            <button
              id="solicitantes"
              onClick={() => handleGenerateReport("solicitantes")}
              className="px-4 w-56 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 -mt-3"
            >
              Gerar
            </button>
          </div>


          {/* ================================================================================ */}

          <hr className="my-2" />

          <h2 className="text-lg font-bold mb-2 text-left">
            Relatório por Espécie
          </h2>

          <div className="flex items-center gap-3">
            {/* Campo para o nome da espécie */}
            <input
              type="text"
              placeholder="Nome da espécie"
              value={specieName}
              onChange={(e) => setSpecieName(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data inicial */}
            <input
              type="date"
              value={startDateSpecie}
              onChange={(e) => setStartDateSpecie(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data final */}
            <input
              type="date"
              value={endDateSpecie}
              onChange={(e) => setEndDateSpecie(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
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

          <hr className="my-1" />

          <h2 className="text-lg font-bold mb-2 text-left">
            Relatório Resgates
          </h2>

          <div className="flex items-center gap-3">
            {/* Campo para a data inicial */}
            <input
              type="date"
              value={startDateRescue}
              onChange={(e) => setStartDateRescue(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data final */}
            <input
              type="date"
              value={endDateRescue}
              onChange={(e) => setEndDateRescue(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
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

          <hr className="my-1" />

          <h2 className="text-lg font-bold mb-2 text-left">
            Relatório Resgates por Cidade
          </h2>

          <div className="flex items-center gap-3">
            {/* Campo para termo de busca */}
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Ex: Aracaju"
              required
            />

            {/* Campo para a data inicial */}
            <input
              type="date"
              value={startDateCity}
              onChange={(e) => setStartDateCity(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data final */}
            <input
              type="date"
              value={endDateCity}
              onChange={(e) => setEndDateCity(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Botão para gerar relatório de espécie */}
            <button
              id="rescueByCityDateRange"
              onClick={() => handleGenerateReport("rescueByCityDateRange")}
              className="px-4 w-56 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 -mt-3"
            >
              Gerar
            </button>
          </div>

          {/* ================================================================================ */}

          <hr className="my-1" />

          <h2 className="text-lg font-bold mb-2 text-left">
            Relatório Resgates por Origem do Animal
          </h2>

          <div className="flex items-center gap-3">
            {/* Campo para termo de busca */}
            <input
              type="text"
              value={animalOrigin}
              onChange={(e) => setAnimalOrigin(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              placeholder="Ex: Apreensão/Resgate"
              required
            />

            {/* Campo para a data inicial */}
            <input
              type="date"
              value={startDateOrigin}
              onChange={(e) => setStartDateOrigin(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Campo para a data final */}
            <input
              type="date"
              value={endDateOrigin}
              onChange={(e) => setEndDateOrigin(e.target.value)}
              className="w-full mb-3 p-2 border rounded-md"
              required
            />

            {/* Botão para gerar relatório de espécie */}
            <button
              id="rescueByOriginDateRange"
              onClick={() => handleGenerateReport("rescueByOriginDateRange")}
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
