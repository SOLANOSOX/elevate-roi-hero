import { useState } from "react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Number of slides available
  const itemsToShow = 3; // Number of items to show at once
  const maxSlides = totalSlides - itemsToShow + 1; // Maximum slides we can navigate to

  const nextSlide = (slideIndex: number) => {
    if (slideIndex < maxSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <>
      <section className="w-full bg-[#FDF8ED] rounded-t-[100px]">
        <div className="w-full max-w-[1060px] mx-auto px-4 relative" style={{ height: '1479.09px' }}>
          {/* Header Content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[59.19px] w-full max-w-[572px] px-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center pb-[0.58px]">
                <div className="text-center text-[32px] font-bold leading-[38.40px] font-['Raleway']">
                  <span className="text-[#F0CB6D]">Resultados Reais</span>
                  <span className="text-[#010D15]"> de quem aplicou nosso método<br/>e transformou seu negócio imobiliário.</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="text-center text-[#010D15] text-base font-medium leading-6 font-['Raleway']">
                  Corretores e imobiliárias que saíram da zona de conforto e implementaram<br/>os 3A's da Venda Imobiliária em seus negócios.
                </div>
                <div className="text-center text-[#010D15] text-base font-medium leading-6 font-['Raleway']">
                  Os resultados falam por si só...
                </div>
                <div className="text-center text-[#010D15] text-base font-medium leading-6 font-['Raleway']">
                  E você pode ser o próximo!
                </div>
                <div className="text-center text-[#010D15] text-base font-medium leading-6 font-['Raleway']">
                  Veja alguns dos casos de sucesso dos nossos alunos que multiplicaram<br/>suas vendas e faturamento aplicando nosso método comprovado.
                </div>
                <div className="text-center text-[#010D15] text-base font-medium leading-6 font-['Raleway']">
                  Como a...
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section - Moved down */}
          <div className="absolute left-0 top-[580px] w-full overflow-hidden">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-start pb-5">
                <div 
                  className="flex items-start transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 380}px)` }}
                >
                  {/* Repeat the same image 8 times as requested */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="w-[360px] flex-shrink-0 pr-5 flex flex-col justify-center items-start">
                      <div className="w-[340px] flex-1 flex flex-col justify-start items-start">
                        <img 
                          src="/lovable-uploads/6c9fcc59-7910-4026-ae79-29129b30dac0.png" 
                          alt={`Case de sucesso ${index + 1}`}
                          className="w-full h-[764.31px] max-w-[340px] object-cover rounded-lg" 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators - Interactive */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[800px] flex items-start gap-3 py-2 px-4">
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

          {/* CTA Button - Updated to match other buttons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[1365.09px] w-[360px]">
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