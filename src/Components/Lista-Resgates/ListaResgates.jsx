import React, { useState, useEffect } from "react";

const ListaResgates = () => {
  const [rescues, setRescues] = useState([]); // Estado para armazenar os dados
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para controlar erros

  // Função para buscar os dados da API
  const fetchRescues = async () => {
    try {
      const response = await fetch("http://localhost:8080/resgates");
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados");
      }
      const data = await response.json();
      setRescues(data); // Atualiza o estado com os dados da API
      setLoading(false); // Finaliza o carregamento
    } catch (err) {
      setError("Erro ao carregar os dados."); // Define uma mensagem de erro
      setLoading(false);
    }
  };

  // useEffect para buscar os dados ao carregar o componente
  useEffect(() => {
    fetchRescues();
  }, []);

  // Renderização condicional
  if (loading) {
    return <p className="text-center mt-6">Carregando...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Lista de Resgates</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-2/3 mx-auto border border-gray-300 shadow-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Solicitante</th>
              <th className="px-4 py-2 border border-gray-300">Telefone</th>
              <th className="px-4 py-2 border border-gray-300">Espécie</th>
              <th className="px-4 py-2 border border-gray-300">Endereço</th>
              <th className="px-4 py-2 border border-gray-300">Data</th>
              <th className="px-4 py-2 border border-gray-300">Situação</th>
              <th className="px-4 py-2 border border-gray-300">Destino</th>
            </tr>
          </thead>
          <tbody>
            {rescues.map((rescue) => (
              <tr key={rescue.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{rescue.applicant}</td>
                <td className="px-4 py-2 border border-gray-300">{rescue.phoneApplicant}</td>
                <td className="px-4 py-2 border border-gray-300">{rescue.specie}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.address}, {rescue.neighborhood}, {rescue.city}
                </td>
                <td className="px-4 py-2 border border-gray-300">{rescue.data}</td>
                <td className="px-4 py-2 border border-gray-300">{rescue.animalSituation}</td>
                <td className="px-4 py-2 border border-gray-300">{rescue.animalDestination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaResgates;
