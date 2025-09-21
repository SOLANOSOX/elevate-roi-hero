import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const FAQSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section
        className="relative bg-black font-raleway py-12 md:py-16 lg:py-20 overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1897px] mx-auto px-4 md:px-6 lg:px-[418px]">
          <div className="max-w-[1060px] mx-auto flex flex-col justify-start items-center gap-8 md:gap-12 lg:gap-[60px]">
            {/* Title Section */}
            <div className="w-full max-w-[760px] flex flex-col justify-start items-center">
              <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full text-center text-[20px] md:text-[28px] lg:text-[32px] font-extrabold leading-[24px] md:leading-[32px] lg:leading-[38.4px]">
                  <span className="text-[#F0CB6D]">
                    Ainda não decidiu pelo seu sucesso?
                  </span>
                  <br />
                  <span className="text-white">
                    Veja o que outras pessoas também perguntam…
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full max-w-[1060px] relative z-10">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-5"
              >
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        "Mas isso funciona para imobiliárias pequenas?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    O método foi criado especificamente para imobiliárias a
                    partir de 3 corretores. Quanto menor, mais rápido você vê
                    resultados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        "Preciso ter conhecimento técnico?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Zero conhecimento técnico necessário. Tudo é explicado passo
                    a passo, como se você fosse iniciante.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        "600% é realmente possível?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Mostramos o case completo com dados reais e prints de tela.
                    Além disso, você tem 7 dias de garantia total.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        "E se eu perder alguma aula?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Todas as aulas ficam gravadas e disponíveis por 30 dias após
                    o evento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="bg-[#13191D] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7 rounded-none hover:no-underline [&>svg]:hidden">
                    <div className="flex justify-between items-center w-full gap-4">
                      <div className="text-white text-sm md:text-base lg:text-lg font-extrabold leading-tight flex-1 text-left">
                        "Funciona em qualquer cidade?"
                      </div>
                      <div className="w-4 h-4 bg-gradient-to-b from-[#F0CC6E] to-[#8A753F] relative flex-shrink-0">
                        <div className="w-[5.85px] h-[2.93px] absolute left-[5.07px] top-[7.02px] bg-[#F0CB6D] border-[1.17px] border-black"></div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#13191D] px-4 md:px-6 lg:px-10 pb-5 md:pb-6 lg:pb-7 text-white/80 text-sm md:text-base leading-5 md:leading-6">
                    Sim! O método já foi testado em cidades de 10 mil a 2
                    milhões de habitantes com sucesso.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* CTA Button */}
            <div className="w-full max-w-[360px] px-4 md:px-0 relative z-10">
              <Button
                className="
    w-full max-w-[360px] mx-auto 
    whitespace-normal break-words text-center
      px-3 py-0 text-xs   /* mobile */
      sm:px-4 sm:py-3 sm:text-xs   /* tablet */
      md:px-6 md:py-3 md:text-xs  /* desktop médio */
      lg:px-8 lg:py-4 lg:text-xs   /* desktop grande */
    bg-gradient-to-r from-[#C9A456] to-[#82652F] 
    hover:from-[#B8943F] hover:to-[#71582A] 
    text-[#000C14] font-bold uppercase tracking-wide
    rounded-[50px] 
    shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
                style={{
                  boxShadow: "0px -4px 56px rgba(201, 164, 86, 0.60)",
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Destravar acesso por R$47
              </Button>
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

export default FAQSection;
