import { Button } from "@/components/ui/button";

const HowSection = () => {
  return (
    <section className="bg-black py-12 px-4 md:px-6 lg:px-[374px] font-raleway">
      <div className="max-w-[1150px] mx-auto h-[1585px] relative">
        {/* Header with logo and "O QUE ACONTECEU?" */}
        <div className="absolute left-[35px] top-[50px] w-[1070px] max-w-full">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
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

        {/* Main content */}
        <div className="absolute left-0 lg:left-[447px] top-[200px] lg:top-[344px] w-full lg:min-w-[1150px] pt-0 lg:pt-[250px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 lg:pr-[70px]">
            {/* Left side - placeholder for image */}
            <div className="w-full lg:w-[185px] lg:max-w-[1150px] flex flex-col">
              <div className="w-full h-[192px] bg-gray-800 rounded-lg"></div>
            </div>

            {/* Right side - content */}
            <div className="w-full lg:w-[424px] flex flex-col gap-5">
              <div className="w-full h-auto flex flex-col gap-[14px]">
                <div className="w-full flex flex-col">
                  <div className="w-full text-center lg:text-left">
                    <h3 className="text-hero-text text-2xl sm:text-3xl lg:text-[36px] font-extrabold leading-6 lg:leading-[24px] mb-4">
                      Como isso foi possível?
                    </h3>
                    <div className="text-hero-text text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px]">
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
      </div>
    </section>
  );
};

export default HowSection;