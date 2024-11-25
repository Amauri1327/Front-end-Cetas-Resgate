import React from "react";

const FormularioResgate = ({ onBack }) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Cadastrar Resgate</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nome do Animal
          </label>
          <input
            type="text"
            placeholder="Digite o nome do animal"
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Data do Resgate
          </label>
          <input
            type="date"
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            placeholder="Digite a descrição"
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <div className="flex justify-between">
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
