import { Separator } from "@/components/ui/separator";

const ScheduleSection = () => {
  return (
    <>
      <Separator className="bg-white h-[2px]" />
      <section className="bg-hero-bg w-full max-w-[1392px] min-w-[1392px] pt-[50px] pb-[100px] px-12 flex flex-col justify-center items-center gap-16 font-geist mx-auto">
        {/* Top divider line */}
        <div className="w-[1186px] h-[3px] flex flex-col justify-center items-start">
          <div className="self-stretch flex-1 relative">
            <div className="w-[1186px] h-[3px] left-0 top-0 absolute overflow-hidden"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="w-[1296px] h-[527px] justify-start items-start gap-8 inline-flex">
          {/* Left column */}
          <div className="w-[431px] self-stretch flex flex-col justify-between items-start">
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="px-5 py-[10px] relative rounded-[100px] justify-center items-center inline-flex">
                <div className="flex flex-col justify-start items-start">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="justify-center flex flex-col text-hero-text text-lg font-semibold leading-[23.40px]">
                      20 e 21 de Setembro | Online
                    </div>
                  </div>
                </div>
                <div className="w-[287px] h-[47.30px] left-0 top-0 absolute rounded-[100px] border border-[#A7BBD2]"></div>
              </div>
              <div className="min-w-[431px] flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-text text-5xl font-semibold leading-[52.32px]">
                    Cronograma
                  </div>
                </div>
              </div>
              <div className="min-w-[431px] flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-text/80 text-lg font-normal leading-[27px]">
                    Os dois dias seguirão esse cronograma:
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[309px] flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-center flex flex-col text-hero-text/40 text-sm font-normal leading-[21px]">
                  *Considere encerrar mais tarde, caso os<br />
                  participantes peçam para nos aprofundarmos<br />
                  em algum ponto. Porém, o conteúdo combinado<br />
                  será entregue dentro do horário programado.
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Schedule cards */}
          <div className="flex-1 h-[501px] flex flex-col justify-center items-start gap-8">
            {/* 9h30 - Início */}
            <div className="flex-1 px-[42px] py-5 bg-hero-text rounded-2xl justify-between items-center inline-flex">
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[42px] font-semibold leading-[52.50px]">
                    9h30
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[32px] font-semibold leading-[40px]">
                    Início
                  </div>
                </div>
              </div>
            </div>

            {/* 12h00 - Almoço */}
            <div className="flex-1 px-[42px] py-5 bg-hero-text rounded-2xl justify-between items-center inline-flex">
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[42px] font-semibold leading-[52.50px]">
                    12h00
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[32px] font-semibold leading-[40px]">
                    Almoço
                  </div>
                </div>
              </div>
            </div>

            {/* 13h30 - Retorno */}
            <div className="flex-1 px-[42px] py-5 bg-hero-text rounded-2xl justify-between items-center inline-flex">
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[42px] font-semibold leading-[52.50px]">
                    13h30
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[32px] font-semibold leading-[40px]">
                    Retorno
                  </div>
                </div>
              </div>
            </div>

            {/* 20h00 - Encerramento */}
            <div className="flex-1 px-[42px] py-5 bg-hero-text rounded-2xl justify-between items-center inline-flex">
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[42px] font-semibold leading-[52.50px]">
                    20h00
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="justify-center flex flex-col text-hero-bg text-[32px] font-semibold leading-[40px]">
                    Encerramento*
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator className="bg-white h-[2px]" />
    </>
  );
};

export default ScheduleSection;