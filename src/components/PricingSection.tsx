import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const PricingSection = () => {
  return <>
      <Separator className="bg-white h-[2px]" />
      <section className="bg-hero-bg px-4 md:px-6 lg:px-[418px] font-raleway">
        <div className="max-w-[1060px] mx-auto py-20">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-hero-text mb-4 md:text-4xl">💰 O Valor Real do Workshop LEGADO Imobiliário</h2>
          </div>

          {/* Value Breakdown */}
          <div className="bg-hero-bg rounded-[25px] md:rounded-[50px] p-8 mb-8 shadow-sm">
            <div className="space-y-4 text-hero-text">
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">📚 Consultoria Individual:</span>
                <span className="text-xl font-bold text-accent">R$ 2.500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">📈 Sistema de Captação:</span>
                <span className="text-xl font-bold text-accent">R$ 1.200</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">👥 Método de Gestão de Equipe:</span>
                <span className="text-xl font-bold text-accent">R$ 800</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">🤖 Automação Completa:</span>
                <span className="text-xl font-bold text-accent">R$ 900</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">📊 Métricas e Controle:</span>
                <span className="text-xl font-bold text-accent">R$ 600</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-hero-text/20">
                <span className="text-lg font-medium">🎯 Plano de Implementação:</span>
                <span className="text-xl font-bold text-accent">R$ 400</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-accent/20 rounded-xl px-6 mt-6">
                <span className="text-2xl font-bold">VALOR TOTAL:</span>
                <span className="text-3xl font-black text-accent">R$ 6.400</span>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-hero-text mb-6">
              🎁 OFERTA ESPECIAL DE FECHAMENTO DE ANO
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              <span className="text-2xl text-hero-text/60 line-through">R$ 6.400</span>
              <span className="text-3xl text-hero-text/80 line-through">R$ 497,00</span>
              <span className="text-4xl text-hero-text/90 line-through">R$ 197,00</span>
            </div>
            
            <div className="bg-accent rounded-[25px] p-6 mb-6 shadow-sm">
              <div className="text-5xl md:text-6xl font-black text-accent-foreground mb-2">
                Apenas R$ 47,00
              </div>
              <div className="text-lg font-bold text-accent-foreground/80">
                (Mais de 98% de desconto)
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bg-hero-bg rounded-[25px] md:rounded-[50px] p-8 mb-8 shadow-sm">
            <h4 className="text-2xl font-bold text-accent text-center mb-6">
              🚀 BÔNUS EXCLUSIVOS INCLUSOS
            </h4>
            
            <div className="space-y-4 text-hero-text">
              <div className="flex items-center justify-between py-3">
                <span className="text-lg">✅ BÔNUS #1: Scripts de Vendas Prontos</span>
                <span className="text-xl font-bold text-accent">(R$ 497)</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-lg">✅ BÔNUS #2: Templates de Anúncios Campeões</span>
                <span className="text-xl font-bold text-accent">(R$ 697)</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-lg">✅ BÔNUS #3: Calculadora de ROI Imobiliário</span>
                <span className="text-xl font-bold text-accent">(R$ 397)</span>
              </div>
              
              <div className="border-t border-hero-text/20 pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">VALOR DOS BÔNUS:</span>
                  <span className="text-2xl font-black text-accent">R$ 1.591</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-accent rounded-[25px] p-6 mb-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-black text-accent-foreground">
                VOCÊ LEVA TUDO POR: R$ 47
              </div>
            </div>
            
            <div className="w-full max-w-[360px] mx-auto">
              <Button variant="hero" size="hero" className="w-full">
                QUERO GARANTIR MINHA VAGA
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Separator className="bg-white h-[2px]" />
    </>;
};
export default PricingSection;