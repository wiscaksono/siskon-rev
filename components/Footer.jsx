import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-[100px] bg-footer bg-right-bottom bg-no-repeat">
      <div className="py-[56px] rounded-[20px] bg-[#F35D5E] pl-[85px] pr-[100px] flex items-center gap-[80px] w-[788px] mx-auto glow-red mt-[50px] mb-[150px]">
        <div>
          <h1 className="subhead-vsm font-bold text-white">Hubungi Kami</h1>
          <p className="p-sm text-white">
            jika ada pertanyaan,masukan atau kritik silahkan beritahu kami
          </p>
        </div>
        <Link passHref href="">
          <div className="flex items-center justify-center py-[10px] px-[25px] rounded-[10px] border-2 border-white hover:bg-white transition-colors  text-white hover:text-[#F35D5E]">
            <p className="p-lg font-semibold transition-colors">Klik Disini</p>
            <img src="/icon/arrow-right.svg" alt="" className="ml-[10px]" />
          </div>
        </Link>
      </div>

      <div className="wrapper flex items-center justify-between">
        <div className="">
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
          <div className="flex items-center gap-[20px] mb-[36px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#F35D5E] flex items-center justify-center">
              <img src="/icon/instagram-footer.svg" alt="" />
            </div>
            <p className="p-sm text-[#838383] w-[404px]">
              labsiskon_fket.itpln
            </p>
          </div>

          <div className="flex items-center gap-[60px]">
            <img src="itpln-logo.png" alt="" />
            <img src="logo.png" alt="" />
          </div>
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
