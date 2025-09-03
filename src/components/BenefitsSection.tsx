import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <>
      <section className="bg-hero-text px-4 md:px-6 lg:px-[418px] font-raleway rounded-t-[100px]">
      <div className="max-w-[1060px] mx-auto h-[864px] relative">
        
        {/* Left side card - "Você está cansado de..." */}
        <div className="absolute left-[180px] top-[-570px] w-[700px] h-[687px] bg-hero-text rounded-[50px]" style={{ boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)' }}>
          <div className="absolute left-[80px] top-[-54px] w-[520px] flex flex-col gap-7">
            <img 
              src="/lovable-uploads/f9ba186f-ea08-491d-b8cc-0e8a8c9a51dd.png" 
              alt="Benefits Icon" 
              className="w-[110px] h-[110px]"
            />
            
            <div className="flex flex-col gap-4">
              <h2 className="text-[32px] font-extrabold leading-[38px]">
                <span className="text-accent">❌ </span>
                <span className="text-black">Você está </span>
                <span className="text-accent">cansado</span>
                <span className="text-black"> de...</span>
              </h2>
              
              <div className="text-black text-[16px] leading-5 space-y-3">
                <p>
                  <span className="font-bold">Mês após mês </span>
                  <span className="font-medium">vendo o mesmo faturamento baixo, enquanto vê concorrentes menores disparando na frente?</span>
                </p>
                <p>
                  <span className="font-bold">Trabalhar 12+ horas por dia </span>
                  <span className="font-medium">mas o dinheiro não acompanha o esforço que você coloca no negócio?</span>
                </p>
                <p>
                  <span className="font-bold">Ter uma equipe desmotivada </span>
                  <span className="font-medium">que mal bate as metas básicas, quanto mais sonhar com crescimento?</span>
                </p>
                <p>
                  <span className="font-bold">Gastar fortunas em marketing q</span>
                  <span className="font-medium">ue não traz clientes qualificados nem vendas consistentes?</span>
                </p>
                <p>
                  <span className="font-bold">Ver seu negócio estagnado </span>
                  <span className="font-medium">enquanto grandes redes dominam sua região?</span>
                </p>
              </div>
              
              <div className="text-center mt-4 mb-8">
                <p className="text-black text-[16px] leading-5">
                  <span className="font-bold">E não quer chegar ao final de 2025 </span>
                  <span className="font-medium">com as mesmas frustrações de 2024?</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Button inside card */}
          <div className="absolute left-[170px] top-[522px] w-[360px]">
            <Button variant="hero" size="hero" className="w-full">
              Liberar Acesso
            </Button>
          </div>
        </div>

        {/* Right side content - "Você QUER finalmente..." */}
        <div className="absolute left-[149px] top-[229px] w-[762px]">
          <h2 className="text-black text-[32px] font-extrabold leading-[38px] text-center mb-[122px]">
            ✅ Você QUER finalmente...
          </h2>
          
          <div className="absolute left-[-51px] top-[122px] flex flex-col gap-5">
            {/* Benefit items */}
            <div className="w-[864px] h-[52px] bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-[30px]">
              <img src="/lovable-uploads/38101c22-9b26-419a-be30-66d520496d39.png" alt="Check icon" className="w-[31px] h-[30px] mr-4 flex-shrink-0" />
              <div className="text-hero-text text-[20px] leading-6 text-center flex-1">
                <span className="font-extrabold">Multiplicar seu faturamento</span>
                <span className="font-normal"> de forma consistente e previsível</span>
              </div>
            </div>
            
            <div className="w-[864px] h-[52px] bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-[30px]">
              <img src="/lovable-uploads/38101c22-9b26-419a-be30-66d520496d39.png" alt="Check icon" className="w-[31px] h-[30px] mr-4 flex-shrink-0" />
              <div className="text-hero-text text-[20px] leading-6 text-center flex-1">
                <span className="font-extrabold">Ter uma equipe engajada</span>
                <span className="font-normal"> que vende muito mais sem pressão</span>
              </div>
            </div>
            
            <div className="w-[864px] h-[52px] bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-[30px]">
              <img src="/lovable-uploads/38101c22-9b26-419a-be30-66d520496d39.png" alt="Check icon" className="w-[31px] h-[30px] mr-4 flex-shrink-0" />
              <div className="text-hero-text text-[20px] leading-6 text-center flex-1">
                <span className="font-extrabold">Dominar sua região</span>
                <span className="font-normal"> sendo a imobiliária referência</span>
              </div>
            </div>
            
            <div className="w-[864px] h-[52px] bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-[30px]">
              <img src="/lovable-uploads/38101c22-9b26-419a-be30-66d520496d39.png" alt="Check icon" className="w-[31px] h-[30px] mr-4 flex-shrink-0" />
              <div className="text-hero-text text-[20px] leading-6 text-center flex-1">
                <span className="font-extrabold">Trabalhar menos</span>
                <span className="font-normal"> e ganhar muito mais</span>
              </div>
            </div>
            
            <div className="w-[864px] h-[52px] bg-gradient-to-r from-hero-bg/85 to-[rgba(0,26,43,0.85)] rounded-[10px] flex items-center p-[30px]">
              <img src="/lovable-uploads/38101c22-9b26-419a-be30-66d520496d39.png" alt="Check icon" className="w-[31px] h-[30px] mr-4 flex-shrink-0" />
              <div className="text-hero-text text-[20px] leading-6 text-center flex-1">
                <span className="font-extrabold">FECHAR 2025</span>
                <span className="font-normal"> como o melhor ano da sua carreira</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="absolute left-[350px] top-[780px] w-[360px]">
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