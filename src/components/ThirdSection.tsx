import { useEffect, useState } from "react";
import compasso from "@/assets/video_thumbs/23.png";
import antoniocarlos from "@/assets/video_thumbs/24.png";
import triad from "@/assets/video_thumbs/25.png";

const ThirdSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const thumbs = [
    {
      img: compasso,
      video: "https://www.youtube.com/embed/zEtEy67WlNY",
      title: "Emerson - Compasso",
      hoverText:
        "Gestão de excelência que hoje já superou +600% de ROI”. - Emerson",
    },
    {
      img: antoniocarlos,
      video: "https://www.youtube.com/embed/yJ5O_2CtRf4",
      title: "Michel - Antônio Carlos",
      hoverText:
        "Visionário supera +R$7 MILHÕES em vendas nos primeiros meses de projeto”. - Michel",
    },
    {
      img: triad,
      video: "https://www.youtube.com/embed/4QmAylcFbwE",
      title: "Bruno - Triad",
      hoverText:
        "Líder sente a transformação e resultados dedicando 30min/dia”. - Bruno",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % thumbs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + thumbs.length) % thumbs.length);
  };

    // autoplay lento no mobile
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // troca a cada 4s (pode ajustar p/ 5000ms = 5s, etc.)
      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <section className="bg-[#0E141B] px-4 md:px-6 lg:px-[418px] font-geist text-white">
          <div className="max-w-[1060px] mx-auto py-12 md:py-20 flex flex-col items-center gap-10">
            {/* Título */}
            <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-center leading-tight font-bold">
              Quem Já Aplicou e Lucrou
            </h2>
  
            {/* Mobile: slider horizontal */}
            <div className="w-full sm:hidden relative overflow-hidden">
              {/* Track */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {thumbs.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveVideo(t.video);
                      setIsVideoOpen(true);
                    }}
                    className="relative w-full flex-shrink-0 bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg group"
                  >
                    <img
                      src={t.img}
                      alt={t.title}
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                    />
  
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] flex items-center justify-center shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          className="w-6 h-6"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
  
                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                      <p className="text-sm text-white font-medium">
                        {t.hoverText}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
  
              {/* Controls */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                ◀
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              >
                ▶
              </button>
            </div>
  
            {/* Desktop: grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveVideo(t.video);
                    setIsVideoOpen(true);
                  }}
                  className="relative group bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition text-left"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full aspect-[3/4] object-cover rounded-xl"
                  />
  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        className="w-6 h-6"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
  
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                    <p className="text-sm md:text-base text-white font-medium">
                      {t.hoverText}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

export default ThirdSection;
