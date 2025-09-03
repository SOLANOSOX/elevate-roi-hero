import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg py-8 md:py-[60px] pb-4 px-6 md:px-[418px] font-raleway">
      <div className="max-w-[1060px] mx-auto flex flex-col items-start gap-5">
        {/* Logo */}
        <div className="w-[546px] max-w-full">
          <div className="flex flex-col gap-7">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-[90px] h-[57px] object-contain"
            />
            
            {/* Main Content */}
            <div className="flex flex-col gap-4">
              {/* Main Title */}
              <div className="flex flex-col">
                <h1 className="text-[36px] font-extrabold leading-[35px] text-hero-text">
                  Dois dias revelando o método que levou uma imobiliária a ter{" "}
                  <span className="text-hero-accent">600% de retorno</span>{" "}
                  <span className="text-hero-accent">em 6 meses!</span>
                </h1>
              </div>
              
              {/* Description */}
              <div className="h-48 flex flex-col text-hero-text text-base font-medium leading-6">
                <p className="mb-6">
                  Descubra o sistema exato que transformou uma imobiliária comum              
                  em uma máquina de vendas – e como você pode replicar esses resultados             
                  na sua operação
                </p>
                
                <p>
                  Para donos de imobiliárias e gestores que querem FECHAR 2025 batendo todas as metas
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="w-[360px] max-w-full">
          <Button 
            variant="hero" 
            size="hero"
            className="w-full"
          >
            Liberar Acesso
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;