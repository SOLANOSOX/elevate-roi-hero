import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const UrgencySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-raleway py-12 md:py-16 lg:py-20">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12 text-center">
          {/* Title */}
          <div className="w-full">
            <h2 className="text-[#010D15] text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-tight">
              A Hora É Agora
            </h2>
          </div>

          {/* Content */}
          <div className="w-full max-w-[600px] text-[#010D15] text-lg md:text-xl leading-relaxed space-y-4">
            <p className="font-bold">As vagas são limitadíssimas.</p>
            <p className="font-bold">Não haverá reprise.</p>
            <p className="font-bold">
              Enquanto você pensa, sua concorrência já garante o futuro dela.
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[400px] mx-auto">
            <Button 
              variant="hero" 
              size="hero" 
              className="w-full bg-white text-[#010D15] hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              Quero garantir minha vaga agora
            </Button>
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

export default UrgencySection;