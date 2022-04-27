import Link from "next/link";

export default function Software() {
  return (
    <div>
      <Article
        title="CX-One Programmer"
        img="cx-programer.png"
        paragraph="Software CX-One. CX-One software suite memungkinkan pengguna untuk membangun, mengkonfigurasi, dan memprogram sejumlah perangkat seperti PLC, HMIs, sistem gerak-kontrol dan jaringan menggunakan paket hanya satu software dengan satu instalasi dan nomor lisensi. Hal ini sangat mengurangi kerumitan perawatan perangkat lunak dan manajemen baik pada End-User dan tingkat OEM. Omron adalah satu-satunya penyedia perangkat lunak otomasi yang menggunakan sistem perbaharui online, yang memungkinkan pengguna untuk dengan mudah men-download dan menginstal pembaruan secara gratis. Selain itu, pada CX One V4.4 ini sudah terdapat beberapa software berupa CX Programmer 9.61, CX Designer, CX Simulator, dan lain-lain yang bisa kalian peroleh secara gratis."
        link="https://drive.google.com/file/d/1g28NeyeiwhJgVf-zApEw6N7FMYVO2icZ/view"
      />
      <Article
        title="NB Designer"
        img="nb-designer.png"
        paragraph="NB-Designer adalah perangkat lunak pemrograman untuk NB HMI Product Series. Ini memungkinkan Anda untuk dengan mudah memprogram semua model NB * -TWxxB."
        link="https://drive.google.com/file/d/1aURY8ydoBykJMegxqYnTBEnwyqDB4Hn-/view"
      />
    </div>
  );
}

const Article = ({ title, paragraph, img, link }) => {
  return (
    <div className="mb-[20px]">
      <p className="lg:subhead2 mb-[26px] subhead-sm font-semibold text-center lg:text-left">
        {title}
      </p>
      <div className="flex items-center justify-center flex-col mb-[26px] mx-[20px] lg:mx-0">
        <img src={`/software/${img}`} alt="" className="mb-[26px]" />
        <p className="text-justify text-[18px] sspro">{paragraph}</p>
        <Link
          href="https://drive.google.com/u/0/uc?id=1GPz427pNl2poN3OgrELitq5HxR-NetwC&export=download"
          passHref
        >
          <button className="mt-[20px]">
            <div className="inline-flex items-center gap-[10px] py-[10px] px-[25px] rounded-[10px] bg-[#F35D5E]">
              <p className="p-lg text-white">Download</p>
              <img src="../icon/download.svg" alt="" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
