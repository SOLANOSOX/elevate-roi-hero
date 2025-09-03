import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  return (
    <section 
      className="relative bg-hero-bg font-raleway min-h-[1035px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://placehold.co/1897x1133')"
      }}
    >
        <div className="max-w-[1897px] mx-auto px-4 md:px-6 lg:px-[418px]">
          <div className="max-w-[1060px] mx-auto pt-[74px] pb-[339px] flex flex-col justify-start items-center gap-[60px]">
            
            {/* Title Section */}
            <div className="w-full max-w-[760px] pb-[2px] flex flex-col justify-start items-start">
              <div className="w-full pb-[0.58px] flex flex-col justify-start items-center">
                <div className="w-full text-center text-[32px] font-extrabold leading-[38.4px]">
                  <span className="text-[#F0CB6D]">Ainda não decidiu pelo seu sucesso?</span><br />
                  <span className="text-white">Veja o que outras pessoas também perguntam…</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full max-w-[1060px]">
              <Accordion type="single" collapsible className="flex flex-col gap-5">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-10 py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-white text-lg font-extrabold leading-[18px]">
                        "Mas isso funciona para imobiliárias pequenas?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-10 pb-7 text-white/80 text-base leading-6">
                    O método foi criado especificamente para imobiliárias a partir de 3 corretores. Quanto menor, mais rápido você vê resultados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-10 py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-white text-lg font-extrabold leading-[18px]">
                        "Preciso ter conhecimento técnico?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-10 pb-7 text-white/80 text-base leading-6">
                    Zero conhecimento técnico necessário. Tudo é explicado passo a passo, como se você fosse iniciante.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-10 py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-white text-lg font-extrabold leading-[18px]">
                        "600% é realmente possível?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-10 pb-7 text-white/80 text-base leading-6">
                    Mostramos o case completo com dados reais e prints de tela. Além disso, você tem 7 dias de garantia total.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-10 py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-white text-lg font-extrabold leading-[18px]">
                        "E se eu perder alguma aula?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-10 pb-7 text-white/80 text-base leading-6">
                    Todas as aulas ficam gravadas e disponíveis por 30 dias após o evento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-10 py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-white text-lg font-extrabold leading-[18px]">
                        "Funciona em qualquer cidade?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-10 pb-7 text-white/80 text-base leading-6">
                    Sim! O método já foi testado em cidades de 10 mil a 2 milhões de habitantes com sucesso.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Button */}
            <div className="w-[360px] max-w-[1060px]">
              <Button 
                className="w-full h-[50px] bg-gradient-to-r from-[#C9A456] to-[#82652F] hover:from-[#B8943F] hover:to-[#71582A] text-[#000C14] font-bold text-base uppercase tracking-[1px] leading-4 rounded-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                style={{
                  boxShadow: "0px -4px 56px rgba(201, 164, 86, 0.60)"
                }}
              >
                Destravar acesso por R$47
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FAQSection;