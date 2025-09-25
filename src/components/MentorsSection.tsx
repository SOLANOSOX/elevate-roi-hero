import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
import background from "@/assets/backgroundAdel.png";
import backgroundMobile from "@/assets/backgroundMobile/72.png";

const MentorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Section Title - global */}
      <div className="w-full bg-[#FDF8ED] text-center px-4 md:px-6 lg:px-[100px] pt-10 md:pt-16 lg:pt-20">
        <h2 className="text-[#010D15] text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight">
          Conheça Seus Guias Nessa Jornada
        </h2>
      </div>

      <section
        className="relative px-4 md:px-6 lg:px-[100px] font-geist 
        min-h-[700px] md:min-h-[878px] bg-cover bg-center bg-no-repeat"
      >
        {/* Background Mobile */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundMobile})` }}
        ></div>

        {/* Background Desktop */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        {/* Conteúdo */}
        <div className="relative z-10 w-full pt-8 md:pt-[83px] pb-8 md:pb-[96px]">
          <div
            className="
    flex flex-col gap-5 text-[#010D15]
    text-center md:text-center
    items-start md:items-start
    w-full md:max-w-[540px]
    ml-0 md:ml-auto
    px-2 md:px-0
    mt-[120px] md:mt-0
    pr-10              /* afasta do lado direito no mobile */
  "
          >
            <h2
              className="
    text-[16px] sm:text-[20px] md:text-[28px] lg:text-[30px] 
    font-bold 
    leading-snug md:leading-snug lg:leading-snug
    text-hero-accent
    max-w-[240px] sm:max-w-[300px] md:max-w-[420px] lg:max-w-[500px]
    ml-[-10px] sm:ml-[-15px] md:ml-0
  "
            >
              Estrategista e Visionária que sente os movimentos do mercado
            </h2>

            <p
              className="
    text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]
    leading-relaxed 
    font-medium
    w-full
    max-w-[200px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[500px]
  "
            >
              Anos de trincheira e um olhar único para o comportamento humano e
              as tendências de mercado, Adel é a mente criativa que desenha as
              estratégias que realmente convertem.
            </p>

            <p
              className="
    text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]
    leading-relaxed 
    font-medium
    w-full
    max-w-[200px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[500px]
  "
            >
              <span className="font-semibold text-hero-accent">
                Sua experiência prova: não é só sobre vender
              </span>
              , é sobre construir relacionamentos que duram e faturam. Ela vai
              te ensinar a ler o mercado como ninguém, usando sua percepção
              aguçada para antecipar movimentos.
            </p>
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
