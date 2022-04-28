import Link from "next/link";
import gsap from "gsap";
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Home() {
  useEffect(() => {
    // gsap.from(".atasan", {
    //   duration: 1,
    //   delay: 0.5,
    //   y: 100,
    //   opacity: 1,
    //   ease: "power4",
    // });
    // gsap.to("animated", {
    //   duration: 2,
    //   delay: 1.5,
    //   text: "An electrical student who likes to code.",
    // });
  });

  return (
    <div className="relative scrollbar-hide">
      <div className="hidden lg:block">
        <Link href="#" passHref>
          <div className="w-[60px] h-[60px] rounded-full bg-[#F35D5E] flex items-center justify-center fixed bottom-[50px] right-[50px]  cursor-pointer -rotate-90 z-50 drop-shadow-2xl ">
            <img src="/icon/arrow-right.svg" alt="" />
          </div>
        </Link>
      </div>

      <div className="hidden lg:block">
        <Navbar />
      </div>
      <section className="bg-[#230707] relative lg:mt-[64px] py-[150px] ">
        <div className="wrapper flex items-center mx-auto justify-between">
          <div className=" lg:w-[533px] flex flex-col lg:gap-[35px] gap-[24px] items-center lg:items-start pb-[220px] lg:pb-0">
            <h1 className="lg:header-sm subhead-vsm font-bold text-[#F35D5E] text-center lg:text-left">
              Selamat Datang! <br />
              <span className="text-white">Di Website Lab</span> <br /> Sistem
              Kontrol <span className="text-white">IT-PLN</span>
            </h1>
            <p className="lg:p-md text-center lg:text-left p-sm text-[#DAA2A2] px-[12px] lg:px-0">
              Halo Praktikan! Selamat datang di situs web Laboratorium Sistem
              Kontrol Institut Teknologi-Perusahaan Listrik Negara (IT-PLN).
              Situs web ini didedikasikan untuk memudahkan praktikan-praktikan
              dalam mempersiapkan materi, bahan ajar, dan prosedur dalam
              melakukan praktikum. Laboratorium ini mengembangkan bidang
              keilmuan sistem kontrol, dimana secara reguler melayani praktikum
              mahasiswa untuk program studi Teknik Elektro (S1), dan Teknik
              Elektro (D3).
            </p>
            <div>
              <Link href="#praktikum" passHref>
                <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#F35D5E] gap-[10px] hover:bg-white transition-colors text-white hover:text-[#F35D5E] glow-red hover:glow-white">
                  <button className="p-lg font-semibold">
                    Pilih Praktikum
                  </button>
                  <img src="/icon/arrow-right.svg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 lg:-bottom-[1px] pl-[40px] lg:pl-0">
            <img src="hero.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="lg:pt-[150px] lg:pb-[150px] pt-[50px] pb-[50px]  bg-sejarah bg-bottom bg-no-repeat">
        <div className=" items-center justify-center flex flex-col lg:gap-[30px] gap-[24px]">
          <div className="flex items-center justify-center w-[94px] h-[94px] bg-[#F35D5E] glow-red rounded-full">
            <img src="/icon/sejarah.svg" alt="" />
          </div>
          <h2 className="lg:subhead-sm subhead-vsm text-[#230707] font-bold w-[251px] text-center">
            Sekilas Sejarah <span id="praktikum"> Tentang Kami</span>
          </h2>
          <p className="lg:p-lg p-sm text-[#838383] px-[12px] lg:px-0 lg:w-[738px] text-center">
            Halo Praktikan! Selamat datang di situs web Laboratorium Sistem
            Kontrol Institut Teknologi-Perusahaan Listrik Negara (IT-PLN). Situs
            web ini didedikasikan untuk memudahkan praktikan-praktikan dalam
            mempersiapkan materi, bahan ajar, dan prosedur dalam melakukan
            praktikum. Laboratorium ini mengembangkan bidang keilmuan sistem
            kontrol, dimana secara reguler melayani praktikum mahasiswa untuk
            program studi Teknik Elektro (S1), dan Teknik Elektro (D3).
          </p>
        </div>

        <div className="wrapper mt-[53px] ">
          <h2 className="text-center lg:subhead-sm subhead-vsm font-bold text-black mb-[30px]">
            Pilih Praktikum
          </h2>
          <div className="flex items-center justify-center lg:gap-[40px] gap-[20px] flex-col lg:flex-row px-[12px] lg:px-0">
            <div className="lg:py-[50px] py-[30px] lg:px-[60px] px-[36px] bg-[#F35D5E] glow-red rounded-[20px]">
              <div className="flex flex-col gap-[20px] items-center lg:items-start">
                <div className="w-[70px] h-[70px] rounded-full bg-[#680808] flex items-center justify-center ">
                  <img src="/icon/matlab.svg" alt="" className="animate-spin" />
                </div>
                <h3 className="subhead-vsm font-bold text-white">
                  Sistem Kontrol
                </h3>
                <p className="p-md text-white text-center lg:text-left">
                  Sistem kendali atau sistem kontrol (Control system) adalah
                  suatu alat (kumpulan alat) untuk mengendalikan, memerintah dan
                  mengatur keadaan dari suatu sistem.
                </p>
                <div>
                  <Link href="/siskon" passHref>
                    <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#680808] gap-[10px] hover:bg-white text-white hover:text-[#F35D5E] glow-red hover:glow-white transition-colors">
                      <button className="p-lg font-semibold">
                        Pilih Praktikum Ini
                      </button>
                      <img src="/icon/arrow-right.svg" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:py-[50px] py-[30px] lg:px-[60px] px-[36px] bg-[#F35D5E] glow-red rounded-[20px]">
              <div className="flex flex-col gap-[20px] items-center lg:items-start">
                <div className="w-[70px] h-[70px] rounded-full bg-[#680808] flex items-center justify-center ">
                  <img src="/icon/gear.svg" alt="" className="animate-spin" />
                </div>
                <h3 className="subhead-vsm font-bold text-white text-center lg:text-left">
                  Sistem Kontrol Industri
                </h3>
                <p className="p-md text-white text-center lg:text-left">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <Link href="/ski" passHref>
                    <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#680808] gap-[10px] hover:bg-white text-white hover:text-[#F35D5E] glow-red hover:glow-white transition-colors">
                      <button className="p-lg font-semibold">
                        Pilih Praktikum Ini
                      </button>
                      <img src="/icon/arrow-right.svg" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[50px] bg-[#680808] bg-rektor lg:bg-right bg-no-repeat bg-bottom">
        <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
          <div>
            <p className="lg:subhead-vsm p-md font-semibold lg:font-bold text-[#F35D5E] lg:mb-[14px] mb-[4px] text-center lg:text-left">
              Sambutan Rektor
            </p>
            <h3 className="lg:subhead-sm p-lg font-semibold lg:font-bold text-white lg:mb-[20px] mb-[24px] text-center lg:text-left">
              Prof.Dr.GG. Wisnu Caksono MG.
            </h3>
            <p className="subhead-vsm italic text-white lg:w-[550px] px-[12px] lg:px-0 text-center lg:text-left mb-[24px]">
              &quot; Mari Jadikan IT-PLN Kampus yang maju dalam Ilmu
              Ketenagalistrikan dan Berwawasan Teknologi &quot;
            </p>
          </div>
          <div className="px-[107px] lg:px-0">
            <img src="elon.png" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#230707] pb-[150px] bg-team bg-no-repeat bg-bottom">
        <div className="wrapper">
          <div className="pt-[150px] flex items-center justify-center flex-col">
            <div className="w-[94px] h-[94px] rounded-full bg-[#F35D5E] items-center justify-center flex glow-red lg:mb-[30px] mb-[24px]">
              <img src="/icon/team.svg" alt="" />
            </div>
            <h3 className="text-white subhead-lg font-bold lg:mb-[35px] mb-[24px]">
              Meet Our Team
            </h3>
            <div className="grid lg:grid-cols-4 gap-[40px]">
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="cepin"
                namaNim="Syelvine Marsyaregina (201811188)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="anisa"
                namaNim="Anisah Meiliza Harahap (201811190)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="rizki"
                namaNim="Rizki Arfian Suwardi (201811123)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="nurul"
                namaNim="Nurul Fadillah Putri (201911021)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="indah"
                namaNim="Indah Khoirunisa (201911032)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="puspita"
                namaNim="Puspita Damayanti (201911038)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="nanda"
                namaNim="Inggiarta Mulya Nandany (201911158)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <div />
              <Team
                photo="ivan"
                namaNim="Ivan Maulana (201911151)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="rebeca"
                namaNim="Rebeca Carliana (201911255)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <div />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const Team = ({ photo, namaNim, email, instagram, line, whatsapp }) => {
  return (
    <div className="py-[42px] px-[58px] bg-white rounded-[20px] flex flex-col gap-[28px] items-center justify-center hover:scale-105 transition-all duration-500">
      <div>
        <img src={`/team/${photo}.png`} alt="" />
      </div>
      <h4 className="w-[184px] subhead-vsm font-medium text-center">
        {namaNim}
      </h4>
      <div className="flex items-center gap-[15px]">
        <Link href={`mailto:${email}`} passHref>
          <a target="_blank">
            <img
              src="/icon/email.svg"
              alt=""
              className="hover:scale-110 transition-transform"
            />
          </a>
        </Link>
        <Link href={`https://www.instagram.com/${instagram}/`} passHref>
          <a target="_blank">
            <img
              src="/icon/instagram.svg"
              alt=""
              className="hover:scale-110 transition-transform"
            />
          </a>
        </Link>
        <Link href={`http://line.me/ti/p/~${line}`} passHref>
          <a target="_blank">
            <img
              src="/icon/line.svg"
              alt=""
              className="hover:scale-110 transition-transform"
            />
          </a>
        </Link>
        <Link href={`http://wa.me/${whatsapp}`} passHref>
          <a target="_blank">
            <img
              src="/icon/whatsapp.svg"
              alt=""
              className="hover:scale-110 transition-transform"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
