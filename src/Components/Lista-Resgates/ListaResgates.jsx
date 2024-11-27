import React from "react";

const ListaResgates = () => {
  // Dados estáticos de exemplo
  const rescues = [
    {
      id: 1,
      applicant: "João Silva",
      phoneApplicant: "(79) 99999-1234",
      specie: "Papagaio",
      address: "Rua das Flores, 123",
      neighborhood: "Centro",
      city: "Aracaju",
      data: "2024-11-01",
      animalSituation: "Ferido",
      animalDestination: "Cetas",
    },
    {
      id: 2,
      applicant: "Maria Oliveira",
      phoneApplicant: "(79) 98888-5678",
      specie: "Tartaruga",
      address: "Avenida do Mar, 456",
      neighborhood: "Atalaia",
      city: "Aracaju",
      data: "2024-10-25",
      animalSituation: "Saudável",
      animalDestination: "Reserva Natural",
    },
    {
      id: 3,
      applicant: "Carlos Almeida",
      phoneApplicant: "(79) 97777-9101",
      specie: "Gavião",
      address: "Praça das Árvores, 789",
      neighborhood: "Farolândia",
      city: "Aracaju",
      data: "2024-09-15",
      animalSituation: "Ferido",
      animalDestination: "Cetas",
    },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-xl font-semibold mb-4 text-center">Lista de Resgates</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-3/6/5 mx-auto border border-gray-300 shadow-sm">
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
              <tr key={rescue.id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaResgates;
