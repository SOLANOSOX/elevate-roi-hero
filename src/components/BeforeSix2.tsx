// BeforeSix2.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";


const IconClock = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);


export default function BeforeSix2({
  date = "Evento acessível",
  hoursLabel = "16h de conteúdo",
  expLabel = "Experiência imersiva",
  priceTitle = "5x de",
  bigPrice = "R$ 9,40",
  cashText = "ou R$ 47 à vista",
  ctaText = "GARANTIR INGRESSO | LOTE 0",
  onCTAClick = () => {},
}: {
  date?: string;
  hoursLabel?: string;
  expLabel?: string;
  priceTitle?: string;
  bigPrice?: string;
  cashText?: string;
  ctaText?: string;
  onCTAClick?: () => void;
}
) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-hero-bg px-4 md:px-6 lg:px-[418px] font-geist">
      <div className="max-w-[1060px] mx-auto py-10 md:py-14">
        {/* Badge */}
        <div className="w-full flex justify-center">
          <span className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[12px] md:text-sm font-semibold bg-hero-accent/10 text-hero-text ring-1 ring-hero-accent/30">
            {date}
          </span>
        </div>

        {/* Título */}
        <div className="text-center mt-5 md:mt-6">
          <h2 className="text-hero-text text-[26px] md:text-[34px] lg:text-[38px] font-bold leading-tight">
            Qual é o <span className="font-extrabold">investimento</span>
            <br className="hidden sm:block" /> para aprender tudo isso?
          </h2>
        </div>

        {/* CARD AMARELO (invertendo cores) */}
        <div
          className="
    mt-6 md:mt-8
    rounded-2xl md:rounded-3xl
    bg-[#FCF6E8] ring-1 ring-hero-accent/40 shadow-lg
    px-5 py-6 md:px-10 md:py-10
    max-w-[760px] mx-auto
    text-[#0E141B]
  "
        >
          {/* Features */}
          <div className="grid grid-cols-1 gap-3 md:gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <IconClock className="w-5 h-5" />
              <span className="font-medium text-[15px] md:text-[16px]">
                {hoursLabel}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <IconUsers className="w-5 h-5" />
              <span className="font-medium text-[15px] md:text-[16px]">
                {expLabel}
              </span>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-5 md:my-6 border-[#0E141B]/15" />

          {/* Preço */}
          <div className="text-center">
            <p className="text-[16px] md:text-[18px] font-semibold">
              {priceTitle}
            </p>
            <p className="font-black text-[40px] md:text-[56px] leading-tight">
              {bigPrice}
            </p>
            <p className="mt-1 text-[16px] md:text-[18px] font-semibold">
              {cashText}
            </p>
          </div>

          {/* CTA */}
          <div className="w-full flex justify-center mt-6 md:mt-8">
            <Button
              variant="hero"
              size="hero"
              className="
                w-full max-w-[380px]
                px-5 md:px-6 py-3 md:py-4
                rounded-full
                text-black font-bold
                bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
                hover:from-[#FFD85D] hover:to-[#FFF3C0]
                transition-all duration-300 ease-in-out
                shadow-[0_6px_24px_rgba(0,0,0,0.12)]
              "
              onClick={() => setIsModalOpen(true)}
            >
              <span
                className="block text-center whitespace-normal break-words leading-tight font-bold
                           text-[clamp(13px,3.6vw,18px)]"
                style={{ textWrap: "balance" }}
              >
                {ctaText}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
