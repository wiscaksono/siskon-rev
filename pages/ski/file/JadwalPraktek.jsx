import Link from "next/link";

export default function JadwalPraktek() {
  return (
    <div className="">
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
    </div>
  );
}
