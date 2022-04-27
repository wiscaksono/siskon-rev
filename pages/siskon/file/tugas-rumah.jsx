import Link from "next/link";
export default function TugasRumah() {
  return (
    <div className="flex flex-col-reverse lg:flex-col items-start ">
      <Link
        href="https://drive.google.com/u/0/uc?id=1NFz9h6mJtvzzTAvnsQsl_Hf2ghkv5sVQ&export=download"
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
        className="w-full h-[440px] lg:h-[800px] px-[20px] lg:px-0"
        src="https://drive.google.com/file/d/1NFz9h6mJtvzzTAvnsQsl_Hf2ghkv5sVQ/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
