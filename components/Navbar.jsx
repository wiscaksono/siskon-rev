import Link from "next/link";

export default function Navbar() {
  return (
    <div className="shadow-md">
      <section className="wrapper">
        <nav className="flex items-center justify-between">
          <Link href="/" passHref>
            <img src="logo.png" alt="" className="cursor-pointer" />
          </Link>
          <div className="flex items-center gap-[32px] py-[20px]">
            <Link href="/" passHref>
              <button className="p-md text-[#230707] border-b-2 hover:border-b-[#f35d5e] transition-colors">
                Home
              </button>
            </Link>
            <Link href="/#praktikum" passHref>
              <button className="p-md text-[#230707]">Pilih Praktikum</button>
            </Link>
            <Link href="/" passHref>
              <button className="p-md text-[#230707]">Gallery</button>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}
