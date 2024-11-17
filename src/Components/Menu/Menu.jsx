import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";

export const Menu = () => {
  const handlePress = () => {
    console.log("Click");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="text-center flex justify-center items-center gap-10 h-16 max-w-2xl">
        <div className="bg-blue-100">
          <button onClick={handlePress}>
            <MdOutlineAddBox size={90} />
            cadastrar
          </button>
        </div>
        <div className="bg-green-50">
          <button onClick={handlePress}>
            <HiOutlineDocumentReport size={90} /> Relatorio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
