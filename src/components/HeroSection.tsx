import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import logo from "@/assets/logo.png";
import NewLogo from "@/assets/1.svg";
import NewLogo2 from "@/assets/2.svg";
import newHero from "@/assets/newBackgroundHero.png";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="relative bg-hero-bg py-8 md:py-12 lg:py-[60px] px-4 md:px-6 lg:px-[418px] font-raleway">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            // backgroundImage: newHero,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top left",
          }}
        ></div>
        <div className="relative z-10 max-w-[1060px] mx-auto min-h-[500px] md:min-h-[600px] lg:h-[718px] flex flex-col items-start justify-center gap-6 md:gap-8">
          {/* Logo */}
          <div className="w-full max-w-[546px]">
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="flex flex-col items-center justify-center -ml-2 md:-ml-4">
                <img
                  src={NewLogo}
                  alt="Legado Imobiliário Logo"
                  className="
      w-[180px] h-[180px]      /* mobile */
      md:w-[240px] md:h-[240px]  /* tablet */
      lg:w-[300px] lg:h-[300px]  /* desktop */
      object-contain drop-shadow-lg
    "
                />
              </div>

              {/* Main Content */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Main Title */}
                <div className="flex flex-col">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-extrabold leading-[28px] md:leading-[36px] lg:leading-[40px] text-hero-text">
                    🚀 Transforme sua Imobiliária em uma Máquina de Vendas com
                    IA –{" "}
                    <span className="text-hero-accent">
                      +600% de Faturamento em 6 Meses
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <div className="flex flex-col text-hero-text text-sm md:text-base font-medium leading-5 md:leading-6 gap-4 md:gap-6">
                  <h2 className="text-hero-text text-lg md:text-xl lg:text-2xl font-bold">
                    2 dias intensivos. Método testado. Sem mimimi. Sem
                    enrolação.
                  </h2>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm">✅ Selos de pagamento seguro</p>
                    <p className="text-sm">✅ Garantia 100% risco zero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-6 mb-6">
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
              👉 Quero garantir minha vaga
              <span className="text-[0.85em] leading-snug">
                por apenas R$47
              </span>
            </Button>
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
