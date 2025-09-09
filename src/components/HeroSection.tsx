import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-hero-bg py-8 md:py-12 lg:py-[60px] px-4 md:px-6 lg:px-[418px] font-raleway">
   <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 hidden md:block"
  style={{
    backgroundImage:
      "url(/lovable-uploads/d67d640d-22c2-4163-8203-fec7a1e87b95.png)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "top left" /* Isso move o ponto de origem da imagem para o canto superior esquerdo */
  }}
></div>
        <div className="relative z-10 max-w-[1060px] mx-auto min-h-[500px] md:min-h-[600px] lg:h-[718px] flex flex-col items-start justify-center gap-6 md:gap-8">
          {/* Logo */}
          <div className="w-full max-w-[546px]">
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="flex items-center gap-3 md:gap-4 -ml-2 md:-ml-4">
                <img
                  src="/lovable-uploads/72560b92-d983-4b8b-9b48-3b2178120bc6.png"
                  alt="Legado Imobiliário Logo"
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] object-contain"
                />
                <span className="text-hero-text font-bold text-lg md:text-xl lg:text-2xl">
                  Workshop Legado Imobiliário
                </span>
              </div>

              {/* Main Content */}
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Main Title */}
                <div className="flex flex-col">
                  <h1 className="text-[24px] md:text-[32px] lg:text-[36px] font-extrabold leading-[28px] md:leading-[36px] lg:leading-[40px] text-hero-text">
                    Dois dias revelando o método que levou uma imobiliária a ter{" "}
                    <span className="text-hero-accent">600% de retorno</span>{" "}
                    <span className="text-hero-accent">em 6 meses!</span>
                  </h1>
                </div>

                {/* Description */}
                <div className="flex flex-col text-hero-text text-sm md:text-base font-medium leading-5 md:leading-6 gap-4 md:gap-6">
                  <p>
                    Descubra o sistema exato que transformou uma imobiliária
                    comum em uma máquina de vendas – e como você pode replicar
                    esses resultados na sua operação
                  </p>

                  <p>
                    Para donos de imobiliárias e gestores que querem FECHAR 2025
                    batendo todas as metas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center md:justify-start mt-6">
            <Button
              variant="hero"
              size="hero"
              className="w-full max-w-[360px] md:w-auto"
            >
              LIBERAR ACESSO
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
