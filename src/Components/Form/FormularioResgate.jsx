import React, { useRef, useState } from "react";

const FormularioResgate = ({ onBack }) => {
  const [formData, setFormData] = useState({
    applicant: "",
    phoneApplicant: "",
    specie: "",
    address: "",
    neighborhood: "",
    city: "",
    date: "",
    animalSituation: "",
    animalDestination: "",
  });

  const formRef = useRef(null); // Para acessar os campos do formulário

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    setLoading(true);
    setErrorMessage("");

    try {
        const response = await fetch("http://localhost:8080/resgates", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
           body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Error ao enviar os dados. Tente novamente.");
        }

        const data = await response.json();
        console.log("Sucess: ", data);
        alert("Resgate cadastrado com sucesso!");
        onBack();
    } catch (error) {
        console.log("Erro: ", error);
        setErrorMessage(error.message || "Error desconhecido.");
    } finally {
        setLoading(false);
    }

  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyDown = (event, currentIndex) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Impede o comportamento padrão do Enter
      const inputs = Array.from(
        formRef.current.querySelectorAll("input, textarea")
      );
      const nextInput = inputs[currentIndex + 1];
      if (nextInput) {
        nextInput.focus(); // Foca no próximo campo
      }
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Cadastrar Resgate</h2>
      <form ref={formRef} onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome do Solicitante
            </label>
            <input
              type="text"
              name="applicant"
              placeholder="Digite o nome do solicitante"
              value={formData.applicant}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 0)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefone do Solicitante
            </label>
            <input
              type="text"
              name="phoneApplicant"
              placeholder="Digite o telefone do solicitante"
              value={formData.phoneApplicant}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 1)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Espécie
            </label>
            <input
              type="text"
              name="specie"
              placeholder="Digite a espécie do animal"
              value={formData.specie}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 2)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Endereço
            </label>
            <input
              type="text"
              name="address"
              placeholder="Digite o endereço"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 3)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bairro
            </label>
            <input
              type="text"
              name="neighborhood"
              placeholder="Digite o bairro"
              value={formData.neighborhood}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 4)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              name="city"
              placeholder="Digite a cidade"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 5)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Data do Resgate
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              onKeyDown={(e) => handleKeyDown(e, 6)}
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Situação do Animal
          </label>
          <textarea
            name="animalSituation"
            placeholder="Descreva a situação do animal"
            value={formData.animalSituation}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            onKeyDown={(e) => handleKeyDown(e, 7)}
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Destino do Animal
          </label>
          <textarea
            name="animalDestination"
            placeholder="Descreva o destino do animal"
            value={formData.animalDestination}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            onKeyDown={(e) => handleKeyDown(e, 8)}
          ></textarea>
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioResgate;
