import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const AuthoritySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-raleway py-12 md:py-16 lg:py-20">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12">
          {/* Title */}
          <div className="w-full text-center">
            <h2 className="text-hero-bg text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-tight">
              A Fórmula Que Funciona
            </h2>
          </div>

          {/* Content */}
          <div className="w-full max-w-[800px] text-hero-bg text-lg md:text-xl leading-relaxed text-center">
            <p>
              Assim como a Imersão Copy Experience New Edition (12 a 14 de setembro, R$97), que entrega copywriting com IA para aumentar comparecimento e reduzir custos, este workshop entrega IA aplicada ao mercado imobiliário para multiplicar seu faturamento.
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[400px] mx-auto">
            <Button 
              variant="hero" 
              size="hero" 
              className="w-full"
              onClick={() => setIsModalOpen(true)}
            >
              Liberar minha vaga agora
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

export default AuthoritySection;