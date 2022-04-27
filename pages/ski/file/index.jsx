import { useState } from "react";

import ModulPraktikum from "./modul-praktikum";
import TugasRumah from "./tugas-rumah";

export default function File() {
  const [active, activeState] = useState("Tugas Rumah");

  function render(value) {
    switch (value) {
      case "Modul":
        return <ModulPraktikum />;
      case "Tugas Rumah":
        return <TugasRumah />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  const SideBtn = ({ name }) => (
    <button
      className={
        name === active
          ? "h-[28px] p-md text-white font-semibold border-2 border-[#CA3B3C] rounded-[5px] capitalize w-full bg-[#CA3B3C] hover:text-white glow-red transition-colors hover:glow-white"
          : "h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] hover:border-[#CA3B3C] rounded-[5px] capitalize w-full hover:bg-[#CA3B3C] hover:text-white  transition-colors"
      }
      onClick={() => activeState(name)}
    >
      {name}
    </button>
  );

  return (
    <div>
      <div className="flex gap-[15px] mb-[30px]">
        <SideBtn name="Tugas Rumah" />
        <SideBtn name="Modul" />
      </div>
      <div></div>
      <div>{render(active)}</div>
    </div>
  );
}
