import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import background from "@/assets/background.jpg";

const MentorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative px-4 md:px-6 lg:px-[100px] font-raleway min-h-[400px] md:min-h-[878px] bg-[#FDF8ED] md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Hide background on mobile with overlay */}
        <div className="absolute inset-0 bg-[#FDF8ED] md:hidden"></div>
        <div className="w-full pt-8 md:pt-[83px] pb-8 md:pb-[96px] relative z-10">
          <div className="w-full pt-[7px] flex flex-col gap-8">
            {/* Section Title (sempre centralizado) */}
            <div className="pb-[0.58px] text-center">
              <h2 className="text-[#010D15] text-[32px] font-extrabold leading-[38.4px]">
                Conheça Seus Guias Nessa Jornada
              </h2>
            </div>

            {/* Mentors (colados mais na direita) */}
            <div className="flex flex-col items-center text-center md:items-end md:text-right md:ml-auto md:pr-4 lg:pr-8 gap-8">
              {/* Adel Gabrielle */}
              <div className="flex flex-col gap-5 items-center text-center md:items-end md:text-right">
                <div className="pb-[0.58px]">
                  <h3 className="text-[#010D15] text-[24px] font-extrabold leading-[28.8px]">
                    Adel Gabrielle – A Estrategista que Sente o Mercado
                  </h3>
                </div>

                <div className="text-[#010D15] text-base font-medium leading-[24px] max-w-[480px]">
                  Anos de experiência em comportamento humano e vendas de alto
                  impacto. Vai te mostrar como ler o mercado e criar estratégias
                  que convertem.
                </div>
              </div>

              {/* CTA Button (também à direita) */}
              <div className="w-full max-w-[360px] md:ml-auto">
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

export default MentorsSection;
