import { Button } from "@/components/ui/button";

const HowSection = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-6 lg:px-[374px] font-raleway">
      <div className="max-w-[1150px] mx-auto min-h-[600px] relative">
        {/* Header with logo and "O QUE ACONTECEU?" */}
        <div className="w-full mb-12">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <img 
                src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
                alt="Company Logo" 
                className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[520px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-6">
              <div className="w-full text-center lg:text-left">
                <h2 className="text-hero-text text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-bold uppercase leading-relaxed tracking-[6px] sm:tracking-[10px] lg:tracking-[20px]">
                  O QUE ACONTECEU?
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Main content - centered and aligned */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
            <div className="w-full text-center">
              <h3 className="text-hero-text text-2xl sm:text-3xl lg:text-[36px] font-extrabold leading-tight mb-6">
                Como isso foi possível?
              </h3>
              <div className="text-hero-text text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed max-w-[600px] mx-auto">
                <p className="mb-4">
                  Não foi sorte.<br />
                  Não foi mercado aquecido.<br />
                  Não foi alguma mudança política<br />
                  Ou bancos com baixas taxas de juros<br />
                  E muito menos localização privilegiada.
                </p>
                <p className="mb-4">
                  Foi a <span className="font-bold">aplicação de um método específico</span> que quebra completamente a forma tradicional de operar uma imobiliária.
                </p>
                <p>
                  <span className="font-bold">E você pode ter acesso a ele agora!</span><br />
                  Para realmente mudar a rota da sua operação <span className="font-bold">ainda esse ano!</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full max-w-[360px]">
              <Button 
                variant="hero" 
                size="hero"
                className="w-full"
              >
                Liberar Acesso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;