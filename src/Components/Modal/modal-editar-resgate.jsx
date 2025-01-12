import React, { useState, useEffect } from "react";

const EditModal = ({ show, handleClose, id, handleEdit }) => {
  const [formData, setFormData] = useState({
    applicant: "",
    phoneApplicant: "",
    specie: "",
    address: "",
    neighborhood: "",
    city: "",
    data: "",
    animalSituation: "",
    animalDestination: "",
    animalQuantity: "",
    origin: "",
  });

  // Buscar dados do resgate a partir do id quando o modal for aberto
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/resgates/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData({
            applicant: data.applicant || "", // Garantindo que os campos não sejam undefined
            phoneApplicant: data.phoneApplicant || "",
            specie: data.specie || "",
            address: data.address || "",
            neighborhood: data.neighborhood || "",
            city: data.city || "",
            data: data.data || "",
            animalSituation: data.animalSituation || "",
            animalDestination: data.animalDestination || "",
            animalQuantity: data.animalQuantity || "",
            origin: data.origin || "",
          });
        })
        .catch((err) => console.error("Erro ao buscar dados: ", err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/resgates/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        handleEdit(); // Atualizar a lista de resgates após edição
        handleClose(); // Fechar o modal
      } else {
        console.error("Erro ao editar o resgate");
      }
    } catch (err) {
      console.error("Erro ao editar o resgate: ", err);
    }
  };

  if (!show) return null; // Não renderiza o modal se o show for falso

  return (
    <div className="fixed inset-0  flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Editar Resgate</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Solicitante
              </label>
              <input
                type="text"
                value={formData.applicant}
                onChange={(e) =>
                  setFormData({ ...formData, applicant: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            {/* Adicione os outros campos aqui... */}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="text"
                value={formData.phoneApplicant}
                onChange={(e) =>
                  setFormData({ ...formData, phoneApplicant: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Espécie</label>
              <input
                type="text"
                value={formData.specie}
                onChange={(e) =>
                  setFormData({ ...formData, specie: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Endereço</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Bairro</label>
              <input
                type="text"
                value={formData.neighborhood}
                onChange={(e) =>
                  setFormData({ ...formData, neighborhood: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Cidade</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Data</label>
              <input
                type="date"
                value={formData.data}
                onChange={(e) =>
                  setFormData({ ...formData, data: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quantidade
              </label>
              <input
                type="number"
                value={formData.animalQuantity}
                onChange={(e) =>
                  setFormData({ ...formData, animalQuantity: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Origem</label>
              <select
                type="text"
                name="origin"
                value={formData.origin}
                onChange={(e) =>
                  setFormData({ ...formData, origin: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="" disabled hidden className="text-gray-400">
                  Selecione uma opção
                </option>
                <option value="apreensao" className="text-gray-900">
                  Apreensão
                </option>
                <option value="resgate" className="text-gray-900">
                  Resgate
                </option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Situação do Animal
              </label>
              <input
                type="text"
                value={formData.animalSituation}
                onChange={(e) =>
                  setFormData({ ...formData, animalSituation: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Destino do Animal
              </label>
              <input
                type="text"
                value={formData.animalDestination}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    animalDestination: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
