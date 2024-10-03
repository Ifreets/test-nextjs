"use client";

import Image from "next/image";
// import MultiTextAnimation from "./Hero/MultiText";
// import { useTranslations } from "next-intl";

function HeroSection() {
  /** Dịch ngôn ngữ */
  //   const t = useTranslations("home");

  return (
    <div className="relative flex flex-col text-center py-3" id="hero-section">
      <h1 className="text-lg md:text-4xl text-txt_bold font-bold">
        {"heading1"}
        <span className="block">
          {/* <MultiTextAnimation /> */}
          <span>{"heading2"}</span>
        </span>
      </h1>
      <h2 className="hidden md:block md:text-lg md:font-medium text-slate-700">
        {"description1"} <br />
        {"description2"}
      </h2>
      <h2 className="text-sm md:hidden md:text-lg md:font-medium text-slate-700">
        {"description1"} <span>{"description2"}</span>
      </h2>

      <div className="my-6 mx-auto">
        {/* <ButtonBorderGradient content="start-for-free" /> */}
      </div>

      {/* Container cho ảnh, sử dụng relative */}
      <div
        className="relative bg-contain sm:block bg-center -top-24 xl:-top-52 lg:-top-44 sm:-top-32  bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-cover.png')" }}
      >
        <Image
          src={"/images/cover.png"}
          alt="cover"
          layout="responsive"
          width={800}
          height={365}
          priority
          className="relative lg:top-32 md:top-24 sm:top-24 top-20"
        />
      </div>

      <div className="relative flex flex-col gap-y-2 md:-top-8">
        <h4 className="uppercase text-xs sm:text-sm font-medium text-slate-600">
          {/* {t.rich('client', {
            span: chunks => <span className="font-bold">{chunks}</span>,
          })} */}
        </h4>
        {/* Thông tin đối tác */}
        {/* <Carousel /> */}
        <div className="flex md:hidden">{/* <LogosCarousel /> */}</div>
      </div>
    </div>
  );
}

export default HeroSection;
