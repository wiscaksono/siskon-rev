import { useState } from "react";
import rootLocus from "./root-locus";

export default function MateriPendukung() {
  const [active, activeState] = useState("root locus");

  function render(value) {
    switch (value) {
      case "Root Locus":
        return <rootLocus />;
      case "Bode Plot":
        return <bodePlot />;
      case "PID Controller":
        return <pidController />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  const topButton = ({ name }) => {
    <button
      className={
        name === active
          ? "h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] rounded-[5px] capitalize w-full hover:bg-[#CA3B3C] hover:text-white"
          : "h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] rounded-[5px] capitalize w-full"
      }
    >
      {name}
    </button>;
  };

  return (
    <div>
      <div className="flex gap-[15px] mb-[30px]">
        <topButton name="Root Locus" />
        <topButton name="Bode Plot" />
        <topButton name="PID Controller" />
      </div>
      <div>
        <rootLocus />
      </div>

      {/* <div>{render(value)}</div> */}
    </div>
  );
}
