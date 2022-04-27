import Link from "next/link";

export default function ModulPraktikum() {
  return (
    <div>
      <Link
        href="https://drive.google.com/u/0/uc?id=1GPz427pNl2poN3OgrELitq5HxR-NetwC&export=download"
        passHref
      >
        <button className="mb-[40px]">
          <div className="inline-flex items-center gap-[10px] py-[10px] px-[25px] rounded-[10px] bg-[#F35D5E]">
            <p className="p-lg text-white">Download</p>
            <img src="../icon/download.svg" alt="" />
          </div>
        </button>
      </Link>

      <iframe
        className="w-full h-[800px]"
        src="https://drive.google.com/file/d/1llxllHQaW_fmzP7ePgxTKZ16QlCmXJzW/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
