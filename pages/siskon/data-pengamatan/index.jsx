import { useState } from "react";

import Modul4 from "./modul4";
import Modul5 from "./modul5";
import Modul6 from "./modul6";

export default function DataPengamatan() {
  const [active, activeState] = useState("Modul 4");

  function render(value) {
    switch (value) {
      case "Modul 4":
        return <Modul4 />;
      case "Modul 5":
        return <Modul5 />;
      case "Modul 6":
        return <Modul6 />;
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
        <SideBtn name="Modul 4" />
        <SideBtn name="Modul 5" />
        <SideBtn name="Modul 6" />
      </div>
      <div></div>
      <div>{render(active)}</div>
    </div>
  );
}
