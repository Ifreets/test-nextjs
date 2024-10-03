"use client";

import Image from "next/image";
import Link from "next/link";
import { Roboto_Serif } from "next/font/google";
import { useRef } from "react";

/** Khai báo font Roboto */
const ROBOTO = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export default function Header() {
  /** Khai báo các nav links */
  const NAV_LINKS = [
    { name: "home", href: "/" },
    { name: "pricing", href: "/pricing" },
    { name: "news", href: "/news" },
    { name: "about", href: "/about" },
  ];
  /** Dịch ngôn ngữ */

  const HEADER_REF = useRef<HTMLDivElement | null>(null); // Tham chiếu đến header

  return (
    <div
      className={`fixed flex w-full top-0 md:px-5 px-2 pt-2 md:bg-transparent z-50`}
      ref={HEADER_REF}
    >
      <div className="hidden md:flex justify-between flex-grow max-w-[1000px] mx-auto h-14 bg-white bg-opacity-85 backdrop-blur-md text-black rounded-full shadow-sm border border-slate-200">
        <div className="flex w-full h-full justify-between items-center px-5">
          <Link href={"#"} className="flex justify-between items-center gap-2">
            <Image
              src={"/logo/Logo_Retion.png"}
              alt="App_logo"
              width={28}
              height={28}
            />
            <div className={ROBOTO.className + " text-lg font-bold"}>
              Retion
            </div>
          </Link>

          <div className="flex">
            {NAV_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={` p-4 ${"font-bold text-sm"}`}
                prefetch={true}
              >
                <div
                  onClick={() => {
                    console.log("checkkk");
                  }}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link className="text-sm font-medium" href={"#"}>
              {"login"}
            </Link>

            <div className="flex">
              {/* <ButtonBorderGradient content="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
