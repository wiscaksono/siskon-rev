import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import Link from "next/link";
import { useState } from "react";

import TugasRumah from "./tugas-rumah";
// import MateriPendukung from "./materi-pendukung";
import JadwalPraktek from "./JadwalPraktek";
import TemplateJournal from "./template-journal";
import ModulPraktikum from "./modul-praktikum";
import DataPengamatan from "./data-pengamatan";
import MateriPendukung from "./materi-pendukung";

export default function Home() {
  const [active, activeState] = useState("tugas rumah");

  function render(value) {
    switch (value) {
      case "tugas rumah":
        return <TugasRumah />;
      case "materi pendukung":
        return <MateriPendukung />;
      case "jadwal praktikum":
        return <JadwalPraktek />;
      case "template journal":
        return <TemplateJournal />;
      case "modul":
        return <ModulPraktikum />;
      case "data pengamatan":
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
        <div className="wrapper mt-[150px] mb-[100px]">
          <h1 className="header-sm font-bold text-[#230707] mb-[24px]">
            Sistem Kontrol
          </h1>
          <div className="grid grid-cols-12 ">
            <div className="col-span-2">
              <div className="flex items-center flex-col gap-[4px]">
                <SideBtn name="tugas rumah" />
                <SideBtn name="materi pendukung" />
                <SideBtn name="jadwal praktikum" />
                <SideBtn name="template journal" />
                <SideBtn name="Modul" />
                <SideBtn name="Video Materi" />
                <SideBtn name="Data Pengamatan" />
                <SideBtn name="Source Code" />
              </div>
            </div>
            <div />
            <div className="col-span-9">{render(active)}</div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
