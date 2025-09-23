import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const BenefitsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-geist rounded-t-[50px] lg:rounded-t-[100px] 
  -mt-8 md:-mt-10 lg:-mt-12         
  pt-20 md:pt-24 lg:pt-28          
  pb-12 md:pb-16 lg:pb-20         
  relative"
      >
        <div className="max-w-[1060px] mx-auto flex flex-col items-center relative">
          {/* Identification Section - "Você vive essa realidade?" */}
          <div className="w-full">
            <h2 className="text-black text-[30px] md:text-[35px] lg:text-[40px] font-extrabold leading-tight text-center mb-10 md:mb-16">
              Você vive essa realidade?
            </h2>

            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mb-8">
              {/* Problem items */}
              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-white text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ❌
                </span>
                <div className="text-white text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">
                    Leads caros e desqualificados
                  </span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-white text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ❌
                </span>
                <div className="text-white text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">Equipe desmotivada</span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-white text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ❌
                </span>
                <div className="text-white text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">
                    Processos que travam sua imobiliária
                  </span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-white text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ❌
                </span>
                <div className="text-white text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">
                    Concorrência disparando enquanto você fica para trás
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <p className="text-black text-lg md:text-xl font-bold">
                Se você se reconhece aqui, está deixando dinheiro e clientes
                na mesa.
              </p>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="w-full flex justify-center mt-6 mb-6 px-4">
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
    "
              onClick={() => setIsModalOpen(true)}
            >
              Quero aplicar o sistema agora
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

export default BenefitsSection;
