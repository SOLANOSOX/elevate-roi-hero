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

      <div
        className="w-full bg-[#FDF8ED] text-center px-4 md:px-6 lg:px-[100px] 
                pt-12 md:pt-20 lg:pt-24 
                pb-12 md:pb-20 lg:pb-24 
                border-y-4 border-[#FDF8ED]"
      >
        <h2 className="text-[#010D15] text-[30px] md:text-[45px] leading-snug font-bold">
          <span className="text-hero-accent">
            Conheça Seus Guias
            <br className="block md:hidden" /> {/* só quebra em mobile */}
            <span className="hidden md:inline"> </span>{" "}
            {/* espaço normal em desktop */}
            Nessa Jornada
          </span>
        </h2>
        {/* <img
          src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png"
          alt="Company Logo"
          className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
        /> */}
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
    pr-10
  "
          >
            <h2
              className="
    text-[16px] xs:text-[18px] sm:text-[20px] md:text-[28px] lg:text-[30px] 
    font-bold 
    leading-snug
    text-hero-accent
    max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[420px] lg:max-w-[500px]
    ml-0 xs:ml-0 sm:ml-0 md:ml-0
  "
            >
              Estrategista e Visionária que sente os movimentos do mercado
            </h2>

            <p
              className="
      text-sm xs:text-[15px] sm:text-base lg:text-lg
      leading-relaxed 
      font-medium
      w-full
      max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[400px] lg:max-w-[500px]
    "
            >
              Anos de trincheira e um olhar único para o comportamento humano e
              as tendências de mercado, Adel é a mente criativa que desenha as
              estratégias que realmente convertem.
            </p>

            <p
              className="
      text-sm xs:text-[15px] sm:text-base lg:text-lg
      leading-relaxed 
      font-medium
      w-full
      max-w-[160px] xs:max-w-[200px] sm:max-w-[260px] md:max-w-[400px] lg:max-w-[500px]
    "
            >
              <span className="font-semibold text-hero-accent">
                Sua experiência prova:{" "}
              </span>
              não é só sobre vender, é sobre construir relacionamentos que duram
              e faturam. Ela vai te ensinar a ler o mercado como ninguém, usando
              sua percepção aguçada para antecipar movimentos.
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
