import Link from "next/link";
export default function TemplateJournal() {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-start">
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
        className="h-[440px] w-full px-[20px] lg:h-[800px] lg:px-0"
        src="https://drive.google.com/file/d/1GPz427pNl2poN3OgrELitq5HxR-NetwC/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
