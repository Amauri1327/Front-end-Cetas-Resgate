import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

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

      setRescues(data);
      setLoading(false);
    } catch (err) {
      setError("Erro ao carregar os dados."); // Define uma mensagem de erro
      setLoading(false);
    }
  };

  // Função para deletar dado da Api
  const deleteData = async (id) => {
    try {
      const resp = await fetch(`http://localhost:8080/resgates/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("Error ao deletar o resgate.");
      }

      // Atualizar o estado local removendo o resgate excluido
      setRescues(rescues.filter((rescue) => rescue.id !== id));
      alert("Resgate deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar o resgate: ", error);
      alert("Error ao deletar o resgate!");
    }
  };

  const onAddRescue = (newRescue) => {
    setRescues((prevRescues) => [newRescue, ...prevRescues]);
  };

  // useEffect para buscar os dados ao carregar o componente
  useEffect(() => {
    fetchRescues(); // Carrega os dados iniciais
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
              <th className="px-4 py-2 border border-gray-300">Ações</th>
            </tr>
          </thead>
          <tbody>
            {rescues.map((rescue) => (
              <tr key={rescue.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.applicant}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.phoneApplicant}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.specie}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.address}, {rescue.neighborhood}, {rescue.city}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.data}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.animalSituation}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {rescue.animalDestination}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-6">
                    <MdDeleteForever
                      color="#a52a2a"
                      onClick={() => deleteData(rescue.id)}
                      className="pl-2 cursor-pointer"
                      size={46}
                    />
                    <FaEdit
                      onClick={() => console.log("editar")}
                      className="pl-2 cursor-pointer"
                      size={36}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaResgates;
