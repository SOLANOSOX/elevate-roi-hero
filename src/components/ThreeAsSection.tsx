const ThreeAsSection = () => {
  return (
    <>
      <section className="bg-hero-bg min-h-screen w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-20 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-[90px] font-geist mx-auto">
        {/* Title */}
        <div className="w-full max-w-[900px] flex flex-col justify-center items-center gap-5 text-center">
          <div className="w-full">
            <h2 className="text-hero-text text-[28px] md:text-[40px] lg:text-5xl font-semibold leading-tight md:leading-[50px] lg:leading-[57.60px]">
              O Que Você Vai Dominar em 2 Dias Intensivos
            </h2>
          </div>
        </div>

        {/* Day 1 Card */}
        <div className="w-full max-w-[1230px] p-6 md:p-10 lg:p-14 bg-hero-text rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 lg:gap-[54px]">
          <div className="w-full lg:w-[318px] h-[300px] lg:h-[469px] relative overflow-hidden rounded-[14px] flex-shrink-0">
            <img 
              className="w-full h-full object-cover rounded-[14px]" 
              src="/lovable-uploads/117b7064-bbda-4822-ac7f-dae76bc73752.png" 
              alt="Fundamentos da Venda Imobiliária"
            />
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 lg:gap-[42px]">
            <div className="w-full">
              <h3 className="text-hero-bg text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-[50px] text-center lg:text-left">
                Dia 1 – Acendendo o Motor da Máquina
              </h3>
            </div>
            
            <div className="w-full flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Captação 5x mais leads com IA
                  </div>
                </div>
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Funil de Conversão de até 40%
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Gestão de equipe imparável
                  </div>
                </div>
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Automação que vende 24h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Day 2 Card */}
        <div className="w-full max-w-[1230px] p-6 md:p-10 lg:p-14 bg-hero-text rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 lg:gap-[54px]">
          <div className="w-full lg:w-[318px] h-[300px] lg:h-[469px] relative overflow-hidden rounded-[14px] flex-shrink-0">
            <img 
              className="w-full h-full object-cover rounded-[14px]" 
              src="/lovable-uploads/089f8aea-92fc-42e1-aaa8-d5a308c4ce32.png" 
              alt="Implementação da Venda Imobiliária"
            />
          </div>
          <div className="flex-1 flex flex-col justify-start items-start gap-6 md:gap-8 lg:gap-[42px]">
            <div className="w-full">
              <h3 className="text-hero-bg text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-tight lg:leading-[50px] text-center lg:text-left">
                Dia 2 – Acelerando Crescimento e Blindando Resultados
              </h3>
            </div>
            
            <div className="w-full flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Expansão inteligente para dominar sua região
                  </div>
                </div>
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Métricas que importam para ROI máximo
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Plano de ação em 7 dias
                  </div>
                </div>
                <div className="flex-1 p-4 md:p-6 rounded-xl lg:rounded-2xl border border-[rgba(167,187,210,0.70)]">
                  <div className="text-hero-bg text-sm md:text-base lg:text-lg font-medium leading-tight lg:leading-[23.40px]">
                    ✅ Mesa redonda com análise de casos reais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeAsSection;