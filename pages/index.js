import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="bg-[#230707] relative py-[150px]">
        <div className="wrapper flex items-center mx-auto justify-between">
          <div className=" w-[533px] flex flex-col gap-[35px]">
            <h1 className="header-sm font-bold text-[#F35D5E]">
              Selamat Datang! <br />
              <span className="text-white">Di Website Lab</span> <br /> Sistem
              Kontrol <span className="text-white">IT-PLN</span>
            </h1>
            <p className="p-md text-[#DAA2A2]">
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
              <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#F35D5E] gap-[10px] hover:bg-white transition-colors text-white hover:text-[#F35D5E] glow-red hover:glow-white">
                <button className="p-lg ">Pilih Praktikum</button>
                <img src="/icon/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="hero.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-[150px] bg-sejarah bg-bottom bg-no-repeat">
        <div className=" items-center justify-center flex flex-col gap-[30px]">
          <div className="flex items-center justify-center w-[94px] h-[94px] bg-[#F35D5E] glow-red rounded-full">
            <img src="/icon/sejarah.svg" alt="" />
          </div>
          <h2 className="subhead-sm text-[#230707] font-bold w-[251px] text-center">
            Sekilas Sejarah Tentang Kami
          </h2>
          <p
            className="p-lg text-[#838383] w-[738px] text-center"
            id="praktikum"
          >
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
          <h2 className="text-center subhead-sm font-bold text-black mb-[30px]">
            Pilih <br /> Praktikum
          </h2>
          <div className="flex items-center justify-center gap-[40px]">
            <div className="py-[50px] px-[60px] bg-[#F35D5E] glow-red rounded-[20px]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[70px] h-[70px] rounded-full bg-[#680808] flex items-center justify-center ">
                  <img src="/icon/matlab.svg" alt="" />
                </div>
                <h3 className="subhead-vsm font-bold text-white">
                  Sistem Kontrol
                </h3>
                <p className="p-md text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <Link href="/siskon" passHref>
                    <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#680808] gap-[10px] hover:bg-white text-white hover:text-[#F35D5E] glow-red hover:glow-white transition-colors">
                      <button className="p-lg">Pilih Praktikum Ini</button>
                      <img src="/icon/arrow-right.svg" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-[50px] px-[60px] bg-[#F35D5E] glow-red rounded-[20px]">
              <div className="flex flex-col gap-[20px]">
                <div className="w-[70px] h-[70px] rounded-full bg-[#680808] flex items-center justify-center ">
                  <img src="/icon/gear.svg" alt="" />
                </div>
                <h3 className="subhead-vsm font-bold text-white">
                  Sistem Kontrol Industri
                </h3>
                <p className="p-md text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <Link href="/ski" passHref>
                    <div className="inline-flex py-[10px] px-[25px] rounded-[10px] bg-[#680808] gap-[10px] hover:bg-white text-white hover:text-[#F35D5E] glow-red hover:glow-white transition-colors">
                      <button className="p-lg">Pilih Praktikum Ini</button>
                      <img src="/icon/arrow-right.svg" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[50px] bg-[#680808] bg-rektor bg-right bg-no-repeat">
        <div className="wrapper flex items-center justify-between">
          <div>
            <p className="subhead-vsm font-bold text-[#F35D5E] mb-[14px]">
              Sambutan Rektor
            </p>
            <h3 className="subhead-sm font-bold text-white mb-[20px]">
              Prof.Dr.GG. Wisnu Caksono MG.
            </h3>
            <p className="subhead-vsm italic text-white w-[550px]">
              &quot; Mari Jadikan IT-PLN Kampus yang maju dalam Ilmu
              Ketenagalistrikan dan Berwawasan Teknologi &quot;
            </p>
          </div>
          <div>
            <img src="elon.png" alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#230707] pb-[150px] bg-team bg-no-repeat bg-bottom">
        <div className="wrapper">
          <div className="pt-[150px] flex items-center justify-center flex-col">
            <div className="w-[94px] h-[94px] rounded-full bg-[#F35D5E] items-center justify-center flex glow-red mb-[30px]">
              <img src="/icon/team.svg" alt="" />
            </div>
            <h3 className="text-white subhead-lg font-bold mb-[35px]">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-4 gap-[40px]">
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <div />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
                email="wwicaksono96@gmail.com"
                instagram="amachoker"
                line="wiscaksono"
                whatsapp="087885002327"
              />
              <Team
                photo="wisnu"
                namaNim="Wisnu Wicaksono (201811184)"
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
    <div className="py-[42px] px-[58px] bg-white rounded-[20px] flex flex-col gap-[28px] items-center justify-center">
      <div>
        <img src={`/team/${photo}.png`} alt="" />
      </div>
      <h4 className="w-[184px] subhead-vsm font-medium text-center">
        {namaNim}
      </h4>
      <div className="flex items-center gap-[15px]">
        <Link href={`mailto:${email}`} passHref>
          <a target="_blank">
            <img src="/icon/email.svg" alt="" />
          </a>
        </Link>
        <Link href={`https://www.instagram.com/${instagram}/`} passHref>
          <a target="_blank">
            <img src="/icon/instagram.svg" alt="" />
          </a>
        </Link>
        <Link href={`http://line.me/ti/p/~${line}`} passHref>
          <a target="_blank">
            <img src="/icon/line.svg" alt="" />
          </a>
        </Link>
        <Link href={`http://wa.me/${whatsapp}`} passHref>
          <a target="_blank">
            <img src="/icon/whatsapp.svg" alt="" />
          </a>
        </Link>
      </div>
    </div>
  );
};
