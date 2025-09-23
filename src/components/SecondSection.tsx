import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const SecondSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-geist rounded-t-[40px] lg:rounded-t-[80px] 
          -mt-8 md:-mt-10 lg:-mt-12         
          pt-16 md:pt-24 lg:pt-28          
          pb-12 md:pb-16 lg:pb-20         
          relative"
      >
        <div className="max-w-[1060px] mx-auto flex flex-col items-center relative gap-10">
          {/* Título */}
          <h2 className="text-black text-[26px] md:text-[34px] lg:text-[40px] font-extrabold leading-tight text-center">
            O Salto Que Sua Imobiliária Precisa
          </h2>

          {/* Texto explicativo */}
          <div className="flex flex-col gap-5 text-center max-w-3xl">
            <p className="text-[#0E141B] text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Imobiliárias comuns e reais, muitas delas com menos de 10
              corretores, estão{" "}
              <span className="font-extrabold text-hero-accent">
                virando o jogo de forma brutal
              </span>
              .
            </p>

            <p className="text-[#0E141B] text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Estamos vendo retornos de{" "}
              <span className="font-extrabold text-hero-accent">
                +600% em apenas 6 meses
              </span>
              .
            </p>

            <p className="text-[#0E141B] text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Isso não é magia, é <span className="font-extrabold">método</span>
              . Com um sistema completo, testado e validado no campo de batalha,
              você vai{" "}
              <span className="font-extrabold">dominar neste workshop</span>.
            </p>
          </div>

          {/* Espaço para gráficos */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-gray-500 text-sm md:text-base">
                  [Gráfico/Print 1]
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-gray-500 text-sm md:text-base">
                  [Gráfico/Print 2]
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-6 mb-6 px-4">
            <Button
              variant="hero"
              size="hero"
              className="
    w-full max-w-[300px] md:max-w-[340px] lg:max-w-[360px]
    px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3
    text-[12px] md:text-[14px] lg:text-[15px] font-bold tracking-wide
    flex items-center justify-center
  "
              onClick={() => setIsModalOpen(true)}
            >
              QUERO APLICAR O SISTEMA AGORA
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

export default SecondSection;
