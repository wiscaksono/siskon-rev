import Link from "next/link";
import Modal from "./Modal";

export default function Footer() {
  return (
    <footer className="pb-[100px] bg-footer bg-right-bottom bg-no-repeat px-[12px] lg:block hidden">
      <div className="lg:py-[56px] py-[69px] px-[84px] rounded-[20px] bg-[#F35D5E] lg:pl-[85px] lg:pr-[100px] flex items-center lg:gap-[80px] gap-[20px] lg:w-[788px] mx-auto glow-red mt-[50px] mb-[150px] flex-col">
        <div>
          <h1 className="subhead-vsm font-bold text-center lg:text-left text-white">
            Hubungi Kami
          </h1>
          <p className="p-sm text-white text-center lg:text-left">
            jika ada pertanyaan,masukan atau kritik silahkan beritahu kami
          </p>
        </div>
        <Modal />
      </div>

      <div className="wrapper flex items-center justify-between flex-col lg:flex-row">
        <div className="flex flex-col justify-between gap-[78px]">
          <div>
            <div className="flex items-center gap-[20px] mb-[10px] flex-col lg:flex-row">
              <div className="w-[24px] h-[24px] rounded-full bg-[#F35D5E] flex items-center justify-center">
                <img src="/icon/location-footer.svg" alt="" />
              </div>
              <p className="p-sm text-[#838383] lg:w-[404px] px-[12px] lg:px-0">
                Menara PLN, Jl. Lkr. Luar Barat, RT.01/RW.03, Duri Kosambi,
                Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota
                Jakarta 11750
              </p>
            </div>
            <Link
              href="https://www.instagram.com/labsiskon_fket.itpln/"
              passHref
            >
              <div className="flex items-center gap-[20px] mb-[36px]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#F35D5E] flex items-center justify-center">
                  <img src="/icon/instagram-footer.svg" alt="" />
                </div>
                <p className="p-sm text-[#838383] w-[404px]">
                  labsiskon_fket.itpln
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-[60px]">
              <img src="itpln-logo.png" alt="" />
              <img src="logo.png" alt="" />
            </div>
          </div>

          <p className="p-sm text-[#AEAEAE]">
            © 2022 Laboratorium Sistem Kontrol - Institut Teknologi PLN
          </p>
        </div>

        <div className="w-[555px] h-[255px] border-2 border-[#F35D5E] rounded-[20px]">
          <iframe
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=ITPLN&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            className="w-full h-full rounded-[24px]"
          />
        </div>
      </div>
    </footer>
  );
}
