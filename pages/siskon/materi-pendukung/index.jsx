import { useState } from "react";
import RootLocus from "./root-locus";
import BodePlot from "./bode-plot";
import PidController from "./pidController";

export default function MateriPendukung() {
  const [active, activeState] = useState("Root Locus");

  function render(value) {
    switch (value) {
      case "Root Locus":
        return <RootLocus />;
      case "Bode Plot":
        return <BodePlot />;
      case "PID Controller":
        return <PidController />;
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
        <SideBtn name="Root Locus" />
        <SideBtn name="Bode Plot" />
        <SideBtn name="PID Controller" />
      </div>
      <div></div>
      <div>{render(active)}</div>
    </div>
  );
}
