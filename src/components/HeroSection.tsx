import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import logo from "@/assets/logo.png";
import NewLogo from "@/assets/1.svg";
import NewLogo2 from "@/assets/new_logo3.svg";
import newHero from "@/assets/12.png";
import newHero3 from "@/assets/32.png";
import hero from "@/assets/2new.png";
import hero2 from "@/assets/2new2.png";
import garantia from "@/assets/garantia (1).png";
import garantia2 from "@/assets/garantia (2).png";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative bg-hero-bg py-8 md:py-12 lg:py-[60px] px-4 md:px-6 lg:px-[418px] font-geist">
        {/* md até xl-1 (768px até 1279px) */}
        <div
          className="absolute inset-0 hidden md:block xl:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        ></div>

        {/* xl até 2xl-1 (1280px até 1535px) */}
        <div
          className="absolute inset-0 hidden md:block 2xl:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${hero2})` }}
        ></div>

        {/* 2xl pra cima (>=1536px) */}
        <div
          className="absolute inset-0 hidden 2xl:block bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        <div className="relative z-10 max-w-[1060px] mx-auto min-h-[500px] md:min-h-[600px] lg:h-[718px] flex flex-col items-start justify-center gap-6 md:gap-8">
          {/* Logo */}
          <div className="w-full max-w-[546px]">
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="flex flex-col items-center justify-center -ml-2 md:-ml-4 overflow-hidden">
                <img
                  src={NewLogo2}
                  alt="Legado Imobiliário Logo"
                  className="
      w-[1800px] h-[auto]      /* mobile */
      md:w-[2400px] md:h-auto  /* tablet */
      lg:w-[3000px] lg:h-auto  /* desktop */
      object-contain drop-shadow-lg
    "
                />{" "}
                <div
                  className="
    text-hero-accent
    text-[18px] md:text-[22px] lg:text-[26px]
    font-bold text-center
    leading-tight -mt-2
  "
                >
                  25 e 26 de Outubro | Ao Vivo | Online
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Main Title */}
                <div className="flex flex-col">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold leading-[28px] md:leading-[36px] lg:leading-[40px] text-hero-text">
                    Transforme sua Imobiliária em uma Máquina de Vendas com IA –{" "}
                    <span className="text-hero-accent">
                      +600% de Faturamento em 6 Meses
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <div className="flex flex-col text-hero-text text-sm md:text-base font-medium leading-5 md:leading-6 gap-4 md:gap-6">
                  <h2 className="text-hero-text text-lg md:text-xl lg:text-2xl font-bold">
                    2 dias intensivos. VENDAS RECORRENTES COM INTELIGÊNCIA
                    ARTIFICIAL DE R$ 997 POR R$ 47
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-start mt-6 mb-6">
            <Button
              variant="hero"
              size="hero"
              className="
      w-full max-w-[360px] 
      whitespace-normal break-words text-center 
      px-3 py-0 text-xs   /* mobile */
      sm:px-4 sm:py-3 sm:text-xs   /* tablet */
      md:px-6 md:py-3 md:text-xs  /* desktop médio */
      lg:px-8 lg:py-4 lg:text-xs   /* desktop grande */
    flex flex-col items-center justify-center
  "
              onClick={() => setIsModalOpen(true)}
            >
              <span className="block font-bold text-[18px] leading-none">
                GARANTIR INGRESSO | LOTE 0
              </span>

              <span className="text-[0.85em] font-semibold leading-none -mt-2">
                por apenas R$47
              </span>
            </Button>
          </div>

          <div className="flex flex-row flex-wrap gap-6 justify-center">
            {/* Selo Garantia PNG 2 */}
            <img
              src={garantia2}
              alt="Garantia selo 2"
              className="w-20 h-20 object-contain"
            />
            {/* Selo Garantia PNG 1 */}
            <img
              src={garantia}
              alt="Garantia selo 1"
              className="w-15 h-20 object-contain"
            />
          </div>
        </div>
      </section>

      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
