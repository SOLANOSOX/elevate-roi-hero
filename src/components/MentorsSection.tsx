import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import background from "@/assets/background.jpg";

const MentorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative px-4 md:px-6 lg:px-[418px] font-raleway min-h-[400px] md:min-h-[878px] bg-[#FDF8ED] md:bg-cover md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Hide background on mobile with overlay */}
        <div className="absolute inset-0 bg-[#FDF8ED] md:hidden"></div>
        <div className="max-w-[1060px] mx-auto pt-8 md:pt-[83px] pb-8 md:pb-[96px] flex justify-center md:justify-end relative z-10">
          <div className="w-full max-w-[800px] pt-[7px]">
            <div className="flex flex-col gap-8">
              {/* Section Title */}
              <div className="pb-[0.58px] text-center">
                <h2 className="text-[#010D15] text-[32px] font-extrabold leading-[38.4px]">
                  Conheça Seus Guias Nessa Jornada
                </h2>
              </div>

              {/* Mentors */}
              <div className="flex flex-col md:flex-row gap-8">
                {/* Adel Gabrielle */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="pb-[0.58px]">
                    <h3 className="text-[#010D15] text-[24px] font-extrabold leading-[28.8px] text-center">
                      Adel Gabrielle – A Estrategista que Sente o Mercado
                    </h3>
                  </div>

                  <div className="text-[#010D15] text-base font-medium leading-[24px]">
                    Anos de experiência em comportamento humano e vendas de alto impacto. Vai te mostrar como ler o mercado e criar estratégias que convertem.
                  </div>
                </div>

                {/* Solano Massochin */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="pb-[0.58px]">
                    <h3 className="text-[#010D15] text-[24px] font-extrabold leading-[28.8px] text-center">
                      Solano Massochin – O Arquiteto da Tecnologia
                    </h3>
                  </div>

                  <div className="text-[#010D15] text-base font-medium leading-[24px]">
                    Especialista em Inteligência Artificial aplicada. Simplifica tecnologia para resultados práticos.
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full max-w-[360px] mx-auto mt-8">
                <Button 
                  variant="hero" 
                  size="hero" 
                  className="w-full"
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