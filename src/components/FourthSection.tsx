import background from "@/assets/dobraquatro.png";

const FourthSection = () => {
  return (
    <section className="relative font-geist text-white bg-[#0E141B]">
      {/* Background só do md pra cima */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Overlay sempre presente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/90"></div>

      {/* Conteúdo */}
      <div
        className="relative z-10 max-w-[1500px] mx-auto 
                   min-h-[850px] sm:min-h-[950px] md:min-h-[1050px] lg:min-h-[1150px] xl:min-h-[1250px] 
                   flex items-center justify-end px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28"
      >
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 flex flex-col gap-8 text-left lg:pl-12 xl:pl-16 2xl:pl-24">
          {/* Título */}
          <h1
            className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px] 
                       leading-[32px] sm:leading-[38px] md:leading-[46px] lg:leading-[54px] xl:leading-[62px] 
                       font-bold"
          >
            Desmistificando o Futuro:{" "}
            <span className="text-hero-accent">Simplicidade e Resultados</span>{" "}
            para Sua Imobiliária
          </h1>

          {/* Texto */}
          <div className="flex flex-col gap-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-relaxed md:leading-loose">
            <p className="italic text-gray-200">
              “Será que é para mim? Minha equipe vai conseguir aplicar? Não é
              complexo demais para a minha realidade?”
            </p>

            <p>
              Essa hesitação é comum, mas não pode te travar. Nós
              desmistificamos tudo. Este workshop é a prova de que o poder da IA
              e das vendas recorrentes está na{" "}
              <span className="font-bold text-hero-accent">simplicidade</span>,
              não na complexidade.
            </p>

            {/* Lista */}
            <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-4 text-white">
              <li>
                <span className="font-bold text-hero-accent/90">
                  Pé no Chão, Direto ao Ponto:
                </span>{" "}
                Sem jargões técnicos ou promessas vazias. Apenas o que funciona,
                explicado com clareza.
              </li>
              <li>
                <span className="font-bold text-hero-accent/90">
                  100% Aplicável:
                </span>{" "}
                Não importa o tamanho da sua imobiliária, seu nicho ou sua
                experiência. Os princípios de atração e recorrência funcionam
                para todos.
              </li>
              <li>
                <span className="font-bold text-hero-accent/90">
                  Resultados Tangíveis:
                </span>{" "}
                Mostramos quais ferramentas de IA eliminam o trabalho manual,
                liberando você para focar no fechamento de vendas.
              </li>
            </ul>

            <p>
              Chega de adiar o futuro. Você sairá deste workshop com um método
              claro para impulsionar sua imobiliária e alcançar resultados
              consistentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
