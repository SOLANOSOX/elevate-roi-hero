import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <>
      <section className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-raleway rounded-t-[50px] lg:rounded-t-[100px] py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-16 relative">
        
        {/* Problem Card - "Você está cansado de..." */}
        <div className="w-full bg-hero-text rounded-[25px] lg:rounded-[50px] shadow-lg p-6 md:p-8 lg:p-12 relative -mt-[70%] z-10">
          {/* Benefits icon positioned at top left */}
          <img 
            src="/lovable-uploads/f9ba186f-ea08-491d-b8cc-0e8a8c9a51dd.png" 
            alt="Benefits Icon" 
            className="absolute -top-[27px] left-[40px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] z-20"
          />
          
          <div className="flex flex-col items-start gap-6 md:gap-8">
            
            <div className="flex flex-col gap-4 md:gap-6 text-left w-full">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight text-left">
                <span className="text-black">Você está </span>
                <span className="text-accent">cansado</span>
                <span className="text-black"> de...</span>
              </h2>
              
              <div className="text-black text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 space-y-3 max-w-[600px]">
                <p>
                  <span className="text-accent font-bold">❌ Mês após mês </span>
                  <span className="font-medium">vendo o mesmo faturamento baixo, enquanto vê concorrentes menores disparando na frente?</span>
                </p>
                <p>
                  <span className="text-accent font-bold">❌ Trabalhar 12+ horas por dia </span>
                  <span className="font-medium">mas o dinheiro não acompanha o esforço que você coloca no negócio?</span>
                </p>
                <p>
                  <span className="text-accent font-bold">❌ Ter uma equipe desmotivada </span>
                  <span className="font-medium">que mal bate as metas básicas, quanto mais sonhar com crescimento?</span>
                </p>
                <p>
                  <span className="text-accent font-bold">❌ Gastar fortunas em marketing </span>
                  <span className="font-medium">que não traz clientes qualificados nem vendas consistentes?</span>
                </p>
                <p>
                  <span className="text-accent font-bold">❌ Ver seu negócio estagnado </span>
                  <span className="font-medium">enquanto grandes redes dominam sua região?</span>
                </p>
              </div>
              
              <div className="mt-4 mb-6 md:mb-8">
                <p className="text-black text-sm md:text-base lg:text-[16px] leading-5 md:leading-6">
                  <span className="font-bold">E não quer chegar ao final de 2025 </span>
                  <span className="font-medium">com as mesmas frustrações de 2024?</span>
                </p>
              </div>
            </div>
            
            {/* Button inside card */}
            <div className="w-full max-w-[360px] mx-auto mt-2">
              <Button variant="hero" size="hero" className="w-full">
                Liberar Acesso
              </Button>
            </div>
          </div>
        </div>

        {/* Method Explanation Section */}
        <div className="w-full max-w-[800px] mx-auto text-center space-y-6">
          <div className="space-y-4">
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7">
              • Não foi sorte
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7">
              • Não foi mercado aquecido
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7">
              • Não foi alguma mudança política
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7">
              • Ou bancos com baixas taxas de juros
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7">
              • E muito menos localização privilegiada
            </p>
          </div>
          
          <div className="space-y-4 pt-4">
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 font-medium">
              Foi a aplicação de um método específico que quebra completamente a forma tradicional de operar uma imobiliária.
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 font-bold">
              E você pode ter acesso a ele agora!
            </p>
            <p className="text-black text-sm md:text-base lg:text-[16px] leading-6 md:leading-7 font-medium">
              Para realmente mudar a rota da sua operação ainda esse ano!
            </p>
          </div>
        </div>

        {/* Solutions Section - "Você QUER finalmente..." */}
        <div className="w-full">
          <h2 className="text-black text-[24px] md:text-[28px] lg:text-[32px] font-extrabold leading-tight text-center mb-8 md:mb-12">
            Você QUER finalmente...
          </h2>
          
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
            {/* Benefit items */}
            <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
              <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">✅</span>
              <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                <span className="font-extrabold">Multiplicar seu faturamento</span>
                <span className="font-normal"> de forma consistente e previsível</span>
              </div>
            </div>
            
            <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
              <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">✅</span>
              <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                <span className="font-extrabold">Ter uma equipe engajada</span>
                <span className="font-normal"> que vende muito mais sem pressão</span>
              </div>
            </div>
            
            <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
              <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">✅</span>
              <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                <span className="font-extrabold">Dominar sua região</span>
                <span className="font-normal"> sendo a imobiliária referência</span>
              </div>
            </div>
            
            <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
              <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">✅</span>
              <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                <span className="font-extrabold">Trabalhar menos</span>
                <span className="font-normal"> e ganhar muito mais</span>
              </div>
            </div>
            
            <div className="w-full bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-4 md:p-6 lg:p-[30px] gap-4">
              <span className="text-accent text-[24px] md:text-[28px] lg:text-[31px] flex-shrink-0 font-bold">✅</span>
              <div className="text-hero-text text-sm md:text-lg lg:text-[20px] leading-5 md:leading-6 text-left flex-1">
                <span className="font-extrabold">FECHAR 2025</span>
                <span className="font-normal"> como o melhor ano da sua carreira</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="w-full max-w-[360px] mx-auto">
          <Button variant="hero" size="hero" className="w-full">
            Liberar Acesso
          </Button>
        </div>

      </div>
    </section>
    </>
  );
};

export default BenefitsSection;