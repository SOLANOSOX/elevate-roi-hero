const StorySection = () => {
  return (
    <section className="bg-hero-bg py-10 md:py-20 px-4 md:px-6 lg:px-[418px] font-raleway">
      <div className="max-w-[1060px] mx-auto flex flex-col items-center gap-6 md:gap-[15px]">
        {/* Header with logo and title - mobile first responsive */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center gap-4 md:gap-6">
            <div className="w-full flex justify-center">
              <img 
                src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
                alt="Company Logo" 
                className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[520px] h-auto object-contain"
              />
            </div>
            <div className="w-full text-center">
              <h2 className="text-hero-text text-[8px] sm:text-[10px] md:text-[12px] font-bold uppercase leading-tight tracking-[4px] sm:tracking-[8px] md:tracking-[20px]">
                A VIRADA DE CHAVE
              </h2>
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

        {/* Bottom section with same image and "O QUE ACONTECEU?" */}
        <div className="w-full flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="w-full flex justify-center">
            <img 
              src="/lovable-uploads/f17cd4d8-1d68-4eb2-b47d-9272481f8f90.png" 
              alt="Company Logo" 
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[520px] h-auto object-contain"
            />
          </div>
          <div className="w-full text-center">
            <h2 className="text-hero-text text-[8px] sm:text-[10px] md:text-[12px] font-bold uppercase leading-tight tracking-[4px] sm:tracking-[8px] md:tracking-[20px]">
              O QUE ACONTECEU?
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;