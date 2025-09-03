const StorySection = () => {
  return (
    <section className="bg-hero-bg py-20 px-6 md:px-[418px] font-raleway">
      <div className="max-w-[1060px] mx-auto flex flex-col items-end gap-[15px]">
        {/* Header with logo and title - fully responsive layout */}
        <div className="w-full flex flex-col items-start">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
            <div className="flex-1 flex flex-col items-center md:items-start order-1 md:order-1">
              <img 
                src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
                alt="Company Logo" 
                className="w-full max-w-[520px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 pt-0 md:pt-2 flex flex-col items-start order-2 md:order-2">
              <div className="w-full flex flex-col items-center">
                <div className="w-full text-center">
                  <h2 className="text-hero-text text-[10px] sm:text-[12px] md:text-[10px] font-bold uppercase leading-[8px] md:leading-[3px] tracking-[8px] sm:tracking-[12px] md:tracking-[20px]">
                    A VIRADA DE CHAVE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content card */}
        <div className="w-full h-[687px] min-h-[687px] relative bg-hero-text rounded-[50px] shadow-sm">
          {/* Title */}
          <div className="absolute w-[810px] left-[125px] top-[72px] max-w-[calc(100%-250px)]">
            <h3 className="text-hero-bg text-[32px] font-extrabold leading-[40px] text-center">
              Em janeiro de 2025, algo extraordinário aconteceu...
            </h3>
          </div>

          {/* Content */}
          <div className="absolute w-[899px] h-[487px] max-w-[calc(100%-184px)] left-[92px] top-[125px]">
            <div className="h-full flex flex-col items-start">
              <div className="w-full h-full text-center flex flex-col justify-center">
                <p className="text-hero-bg text-xl font-medium leading-6">
                  Uma imobiliária com mais de 30 anos de mercado e menos de 10 corretores em uma cidade do interior conseguiu algo que parecia impossível:{" "}
                  <span className="font-semibold">
                    Conquistou 600% de retorno em exatos 6 meses
                  </span>
                  <br />
                  <br />
                  Isso representa 160% de crescimento real – sem contratar mais um monte de corretores, sem gastar fortunas em marketing, e ainda por cima, se tornando uma das imobiliárias que mais paga para o corretor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with same image and "O QUE ACONTECEU?" */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 mt-8">
          <div className="flex-1 flex flex-col items-center md:items-start order-1 md:order-1">
            <img 
              src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
              alt="Company Logo" 
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
          <div className="flex-1 pt-0 md:pt-2 flex flex-col items-start order-2 md:order-2">
            <div className="w-full flex flex-col items-center">
              <div className="w-full text-center">
                <h2 className="text-hero-text text-[10px] sm:text-[12px] md:text-[10px] font-bold uppercase leading-[8px] md:leading-[3px] tracking-[8px] sm:tracking-[12px] md:tracking-[20px]">
                  O QUE ACONTECEU?
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;