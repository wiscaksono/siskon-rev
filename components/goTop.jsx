import Link from "next/link";

export default function goTop() {
  return (
    <Link href="#" passHref>
      <div className="w-[60px] h-[60px] rounded-full bg-[#F35D5E] flex items-center justify-center fixed bottom-[50px] right-[50px] glow-red cursor-pointer -rotate-90">
        <img src="/icon/arrow-right.svg" alt="" />
      </div>
    </Link>
  );
}
