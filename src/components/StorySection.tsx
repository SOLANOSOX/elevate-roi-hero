const StorySection = () => {
  return (
    <section className="bg-hero-bg py-6 md:py-12 px-4 md:px-6 lg:px-[418px] font-raleway">
      <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-6 md:gap-[15px]">
        {/* Header with logo and title - proper spacing to avoid overlap */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <img 
                src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
                alt="Company Logo" 
                className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-6">
              <div className="w-full text-center lg:text-left">
                <h2 className="text-hero-text text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-bold uppercase leading-relaxed tracking-[6px] sm:tracking-[10px] lg:tracking-[20px]">
                  A VIRADA DE CHAVE
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Main content card - fully responsive */}
        <div className="w-full bg-hero-text rounded-[25px] md:rounded-[50px] shadow-sm p-6 md:p-12 lg:p-16">
          {/* Title */}
          <div className="w-full mb-6 md:mb-8">
            <h3 className="text-hero-bg text-lg sm:text-xl md:text-2xl lg:text-[32px] font-extrabold leading-tight md:leading-[40px] text-center">
              Em janeiro de 2025, algo extraordinário aconteceu...
            </h3>
          </div>

          {/* Content */}
          <div className="w-full">
            <div className="text-center">
              <p className="text-hero-bg text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
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

        {/* Bottom section with same image and "O QUE ACONTECEU?" - proper spacing to avoid overlap */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-6 md:mt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <img 
              src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
              alt="Company Logo" 
              className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-start lg:pl-6">
            <div className="w-full text-center lg:text-left">
              <h2 className="text-hero-text text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] font-bold uppercase leading-relaxed tracking-[6px] sm:tracking-[10px] lg:tracking-[20px]">
                O QUE ACONTECEU?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;