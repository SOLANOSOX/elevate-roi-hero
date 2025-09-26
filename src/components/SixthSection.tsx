import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";
const SixthSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="bg-hero-bg px-4 md:px-6 lg:px-[418px] font-geist">
        <div className="max-w-[1060px] mx-auto pb-20">
          {/* Main Title */}
          <div className="w-full max-w-[1100px] mx-auto rounded-[30px] md:rounded-[50px] p-6 md:p-12 shadow-lg">
            {/* Título */}

            {/* Caixa interna da lista */}
            <div className="bg-[#1A1F25] rounded-[25px] md:rounded-[40px] p-6 md:p-10 shadow-md w-full max-w-[950px] mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-[26px] md:text-[32px] lg:text-4xl font-bold text-hero-text leading-snug pb-5">
                  A Arquitetura do Seu Lucro: <br className="block sm:hidden" />
                  Bônus e Preço
                </h2>
              </div>

              <ul className="divide-y divide-hero-text/20 list-disc list-inside">
                {[
                  "Estratégia Detalhada de Captação 5X com IA",
                  "Funil de Conversão Otimizado e Validado",
                  "Modelo Estruturado de Gestão de Equipe de Alta Performance",
                  "Ferramentas de Automação Validadas de Nutrição, Aquecimento para Vender 24h",
                  "Estratégia de Expansão Inteligente para Domínio Regional",
                  "Painel de Controle de Métricas Essenciais para Retorno Máximo",
                  "Plano de Ação de 7 Dias Pós-Workshop",
                  "Análise de Projeto Pessoal (Mesa Redonda)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="py-4 text-base md:text-lg lg:text-xl font-medium text-hero-text text-center sm:text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Special Offer */}
          <div className="text-center mb-2 mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              BÔNUS EXCLUSIVOS INCLUÍDOS:
            </h3>
          </div>
          {/* Bonus Section */}
          <div className="bg-hero-bg rounded-[25px] md:rounded-[50px] shadow-sm">
            <div className="space-y-4 text-hero-text">
              <div className="bg-hero-bg rounded-[25px] md:rounded-[40px] p-6 md:p-10 shadow-md w-full max-w-[950px] mx-auto">
                <ul className="space-y-6">
                  <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                    <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                      BÔNUS #1
                    </span>
                    <p className="text-hero-text text-base md:text-lg leading-relaxed">
                      <span className="font-semibold">
                        Scripts Pré-SOX - Pré-atendimento de Alta Conversão:
                      </span>{" "}
                      Roteiros testados para qualificar leads e prepará-los para
                      o fechamento, otimizando o tempo da sua equipe.
                    </p>
                  </li>

                  <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                    <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                      BÔNUS #2
                    </span>
                    <p className="text-hero-text text-base md:text-lg leading-relaxed">
                      <span className="font-semibold">
                        Modelo Efetivo de Contrato de Parceria:
                      </span>{" "}
                      Documento jurídico base referência para firmar novas
                      parcerias de forma segura e estratégica, assegurando e
                      fortalecendo seu time comercial.
                    </p>
                  </li>

                  <li className="flex flex-col sm:flex-row sm:items-start sm:gap-4 text-center sm:text-left items-center sm:items-start">
                    <span className="text-hero-accent font-bold text-lg md:text-xl min-w-[120px]">
                      BÔNUS #3
                    </span>
                    <p className="text-hero-text text-base md:text-lg leading-relaxed">
                      <span className="font-semibold">
                        Direcionamento de Criativos para Tráfego:
                      </span>{" "}
                      As diretrizes e exemplos de anúncios que realmente
                      convertem, para você copiar, colar e adaptar nas suas
                      campanhas de marketing.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="border-t border-hero-text/20 pt-6 mt-8 w-full text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-hero-text mb-4">
                  SEU INVESTIMENTO HOJE POR TUDO ISSO:
                </h3>

                <p className="text-2xl md:text-3xl  mb-8">
                  5x de <span className="text-hero-accent">R$9,40</span> ou{" "}
                  <span className="text-hero-accent">R$47 à vista</span>
                </p>

                <div className="w-full flex justify-center">
                  <Button
                    variant="hero"
                    size="hero"
                    className="
        w-full max-w-[360px]
        px-6 py-4
        text-[16px] font-bold tracking-wide
        flex flex-col items-center justify-center
        rounded-full
        text-black
        bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
        transition-all duration-300 ease-in-out
        hover:from-[#FFD85D] hover:to-[#FFF3C0]
        hover:shadow-[0_0_20px_rgba(255,215,0,0.7)]
      "
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span className="block font-bold text-[18px] leading-none">
                      GARANTIR INGRESSO | LOTE 0
                    </span>
                  </Button>
                </div>
              </div>
            </div>
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
export default SixthSection;
