import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Number of slides available
  const itemsToShow = 3; // Number of items to show at once on desktop
  const maxSlides = totalSlides - itemsToShow + 1; // Maximum slides we can navigate to

  const nextSlide = (slideIndex: number) => {
    if (slideIndex < maxSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <>
      <section className="w-full bg-[#FDF8ED] rounded-t-[50px] md:rounded-t-[100px] py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1060px] mx-auto px-4 md:px-6 relative">
          {/* Header Content */}
          <div className="w-full flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
            <div className="w-full max-w-[572px] text-center">
              <h2 className="text-[20px] md:text-[28px] lg:text-[32px] font-bold leading-tight md:leading-[38.40px] font-['Raleway'] mb-4 md:mb-6">
                <span className="text-[#F0CB6D]">Resultados Reais</span>
                <span className="text-[#010D15]"> de quem aplicou nosso método<br/>e transformou seu negócio imobiliário.</span>
              </h2>
              
              <div className="flex flex-col items-center gap-4 md:gap-6 text-[#010D15] text-sm md:text-base font-medium leading-5 md:leading-6 font-['Raleway']">
                <p className="text-center">
                  Corretores e imobiliárias que saíram da zona de conforto e implementaram<br className="hidden md:block"/>os 3A's da Venda Imobiliária em seus negócios.
                </p>
                <p className="text-center">Os resultados falam por si só...</p>
                <p className="text-center">E você pode ser o próximo!</p>
                <p className="text-center">
                  Veja alguns dos casos de sucesso dos nossos alunos que multiplicaram<br className="hidden md:block"/>suas vendas e faturamento aplicando nosso método comprovado.
                </p>
                <p className="text-center">Como a...</p>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full overflow-hidden mb-8 md:mb-12">
            <div className="flex flex-col items-center">
              <div className="w-full overflow-hidden">
                <div 
                  className="flex items-start transition-transform duration-300 ease-in-out gap-4 md:gap-5"
                  style={{ 
                    transform: `translateX(-${currentSlide * (window.innerWidth < 768 ? 100 : 380)}px)`,
                    width: 'fit-content'
                  }}
                >
                  {/* Repeat the same image 8 times as requested */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="w-[280px] md:w-[340px] lg:w-[360px] flex-shrink-0 flex flex-col justify-center items-start">
                      <div className="w-full flex flex-col justify-start items-start">
                        <img 
                          src="/lovable-uploads/6c9fcc59-7910-4026-ae79-29129b30dac0.png" 
                          alt={`Case de sucesso ${index + 1}`}
                          className="w-full h-[400px] md:h-[600px] lg:h-[764.31px] object-cover rounded-lg" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators - Interactive */}
            <div className="flex justify-center items-center gap-3 py-4 mt-8 md:mt-12">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => nextSlide(index)}
                  className={`w-[12px] h-[12px] rounded-full transition-colors duration-200 hover:scale-110 ${
                    currentSlide === index ? 'bg-[#F3CE71]' : 'bg-black/46 hover:bg-black/60'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[360px] mx-auto">
            <Button variant="hero" size="hero" className="w-full">
              Quero ser um case
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;