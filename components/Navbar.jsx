import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="shadow-md fixed w-full h-[64px] bg-white z-[51] top-0">
      <Head>
        <title>Laboratorium Sistem Kontrol</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="wrapper">
        <nav className="flex items-center justify-between">
          <Link href="/" passHref>
            <img src="logo.png" alt="" className="cursor-pointer" />
          </Link>

          <div className="flex items-center gap-[32px] py-[20px]">
            <Link key={"Home"} href={"/"}>
              <a
                className={`p-md cursor-pointer text-[#230707] ${
                  router.pathname === "/"
                    ? " font-semibold"
                    : "font-normal text-gray-500"
                }`}
              >
                Home
              </a>
            </Link>
            <Link key={"Gallery"} href={"/gallery"}>
              <a
                className={`p-md cursor-pointer text-[#230707] ${
                  router.pathname === "/gallery"
                    ? " font-semibold"
                    : "font-normal text-gray-500"
                }`}
              >
                Gallery
              </a>
            </Link>
            <div className="dropdown  relative">
              <button className=" inline-flex items-center">
                <Link key={"Praktikum"} href={"/#praktikum"}>
                  <a
                    className={`p-md cursor-pointer text-[#230707] ${
                      router.pathname === ("/siskon" || "/ski")
                        ? "font-semibold"
                        : "font-normal text-gray-500"
                    }`}
                  >
                    <span className="mr-1 p-md">Praktikum</span>
                  </a>
                </Link>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden right-0 pt-5 w-[200px] p-md z-50 left-1/2 -translate-x-1/2">
                <li className="">
                  <Link href="/siskon" passHref>
                    <a className=" bg-gray-50 hover:bg-[#FFBCBD] py-2 px-4 block whitespace-no-wrap">
                      Sistem Kontrol
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/ski" passHref>
                    <a
                      className="rounded-b-lg bg-gray-50 hover:bg-[#FFBCBD] py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Sistem Kontrol Industri
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
