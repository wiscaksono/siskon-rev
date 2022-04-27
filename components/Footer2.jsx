import Link from "next/link";

export default function Footer2() {
  return (
    <footer className="py-[100px] bg-[#230707] bg-footer bg-right-bottom bg-no-repeat ">
      <div className="wrapper flex items-center justify-between">
        <div className="flex flex-col justify-between gap-[78px]">
          <div>
            <div className="flex items-center gap-[20px] mb-[10px]">
              <div className="w-[24px] h-[24px] rounded-full bg-[#F35D5E] flex items-center justify-center">
                <img src="/icon/location-footer.svg" alt="" />
              </div>
              <p className="p-sm text-[#838383] w-[404px]">
                Menara PLN, Jl. Lkr. Luar Barat, RT.01/RW.03, Duri Kosambi,
                Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota
                Jakarta 11750
              </p>
            </div>
            <Link
              href="https://www.instagram.com/labsiskon_fket.itpln/"
              passHref
            >
              <div className="flex items-center gap-[20px] mb-[36px] cursor-pointer">
                <div className="w-[24px] h-[24px] rounded-full bg-[#F35D5E] flex items-center justify-center">
                  <img src="/icon/instagram-footer.svg" alt="" />
                </div>
                <p className="p-sm text-[#838383] w-[404px]">
                  labsiskon_fket.itpln
                </p>
              </div>
            </Link>

            <div className="inline-flex py-[16px] px-[40px] rounded-full items-center gap-[60px] bg-white">
              <img src="itpln-logo.png" alt="" />
              <img src="logo.png" alt="" />
            </div>
          </div>
          <p className="p-sm text-[#DAA2A2]">
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
