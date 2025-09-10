import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <>
      <section
        className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-raleway rounded-t-[50px] lg:rounded-t-[100px] 
  -mt-8 md:-mt-10 lg:-mt-12         
  pt-20 md:pt-24 lg:pt-28          
  pb-12 md:pb-16 lg:pb-20         
  relative"
      >
        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-16 relative">
          {/* Problem Card - "Você está cansado de..." */}

          {/* Solutions Section - "Você QUER finalmente..." */}
          <div className="w-full">
            <h2 className="text-black text-[24px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight text-center mb-8 md:mb-12">
              Você QUER finalmente...
            </h2>

            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
              {/* Benefit items */}
              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ✅
                </span>
                <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">
                    Multiplicar seu faturamento
                  </span>
                  <span className="font-normal">
                    {" "}
                    de forma consistente e previsível
                  </span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ✅
                </span>
                <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">
                    Ter uma equipe engajada
                  </span>
                  <span className="font-normal">
                    {" "}
                    que vende muito mais sem pressão
                  </span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ✅
                </span>
                <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">Dominar sua região</span>
                  <span className="font-normal">
                    {" "}
                    sendo a imobiliária referência
                  </span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ✅
                </span>
                <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">Trabalhar menos</span>
                  <span className="font-normal"> e ganhar muito mais</span>
                </div>
              </div>

              <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
                <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">
                  ✅
                </span>
                <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                  <span className="font-extrabold">FECHAR 2025</span>
                  <span className="font-normal">
                    {" "}
                    como o melhor ano da sua carreira
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="w-full max-w-[360px] mx-auto">
            <Button variant="hero" size="hero" className="w-full">
              Liberar Acesso
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
