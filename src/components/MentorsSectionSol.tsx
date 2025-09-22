import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import background2 from "@/assets/background2.png";

const MentorsSectionSol = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative px-4 md:px-6 lg:px-[100px] font-raleway min-h-[400px] md:min-h-[878px] bg-[#FDF8ED] md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${background2})`,
        }}
      >
        {/* Hide background on mobile with overlay */}
        <div className="absolute inset-0 bg-[#FFF] md:hidden"></div>
        <div className="w-full pt-8 md:pt-[83px] pb-8 md:pb-[96px] relative z-10">
          <div className="w-full pt-[7px] flex flex-col gap-8">
            {/* Section Title (sempre centralizado) */}
            <div className="pb-[0.58px] text-center">
              <h2 className="text-[#FFF] text-[32px] font-extrabold leading-[38.4px]">
                Conheça Seus Guias Nessa Jornada
              </h2>
            </div>

            {/* Mentor Solano (colado mais à esquerda) */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:mr-auto md:pl-4 lg:pl-8 gap-8">
              {/* Solano Massochin */}
              <div className="flex flex-col gap-5 items-center text-center md:items-start md:text-left">
                <div className="pb-[0.58px]">
                  <h3 className="text-[#FFF] text-[24px] font-extrabold leading-[28.8px]">
                    O Arquiteto da Tecnologia
                  </h3>
                </div>

                <div className="text-[#FFF] text-base font-medium leading-[24px] max-w-[480px]">
                  Especialista em Inteligência Artificial aplicada. Simplifica
                  tecnologia para resultados práticos.
                </div>
              </div>

              {/* CTA Button (também à esquerda) */}
              <div className="w-full max-w-[360px] md:mr-auto">
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
                  Quero aprender com Adel e Solano
                </Button>
              </div>
            </div>
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

export default MentorsSectionSol;
