import Footer2 from "../../components/Footer2";
import Navbar from "../../components/Navbar";
import { useState } from "react";

import MateriPendukung from "./materi-pendukung";
import DataPengamatan from "./data-pengamatan";
import File from "./file";

export default function Home() {
  const [active, activeState] = useState("File");

  function render(value) {
    switch (value) {
      case "File":
        return <File />;
      case "materi pendukung":
        return <MateriPendukung />;
      case "Data Pengamatan":
        return <DataPengamatan />;
      default:
        return "Halaman Tidak Ditemukan";
    }
  }

  const SideBtn = ({ name }) => (
    <button
      className={
        name === active
          ? "h-[28px] p-md text-[#CA3B3C] font-semibold bg-[#FFBCBD] rounded-[5px] capitalize w-full"
          : "h-[28px] p-md text-[#CA3B3C] font-semibold bg-white rounded-[5px] capitalize w-full"
      }
      onClick={() => activeState(name)}
    >
      {name}
    </button>
  );

  return (
    <section className="relative">
      <Navbar />
      <div className="bg-sejarah bg-bottom bg-no-repeat pb-[100px]">
        <div className="wrapper mt-[100px] mb-[100px]">
          <h1 className="header-sm font-bold text-[#230707] mb-[24px]">
            Sistem Kontrol
          </h1>
          <div className="grid grid-cols-12 ">
            <div className="col-span-2">
              <div className="flex items-center flex-col gap-[4px]">
                <SideBtn name="File" />
                <SideBtn name="Source Code" />
                <SideBtn name="Data Pengamatan" />
                <SideBtn name="materi pendukung" />
              </div>
            </div>
            <div />
            <div className="col-span-9">{render(active)}</div>
          </div>
        </div>
      </div>

      <Footer2 />
    </section>
  );
}
