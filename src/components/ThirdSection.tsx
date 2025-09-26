import { useState } from "react";
import compasso from "@/assets/video_thumbs/22.png";
import antoniocarlos from "@/assets/video_thumbs/23.png";
import triad from "@/assets/video_thumbs/24.png";

const ThirdSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // índice ativo do carrossel

  const thumbs = [
    {
      img: compasso,
      video: "https://www.youtube.com/embed/zEtEy67WlNY",
      title: "Emerson - Compasso",
    },
    {
      img: antoniocarlos,
      video: "https://www.youtube.com/embed/yJ5O_2CtRf4",
      title: "Michel - Antônio Carlos",
    },
    {
      img: triad,
      video: "https://www.youtube.com/embed/4QmAylcFbwE",
      title: "Bruno - Triad",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % thumbs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + thumbs.length) % thumbs.length);
  };

  return (
    <>
      <section className="bg-[#0E141B] px-4 md:px-6 lg:px-[418px] font-geist text-white">
        <div className="max-w-[1060px] mx-auto py-12 md:py-20 flex flex-col items-center gap-10">
          {/* Título */}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-center leading-tight font-bold">
            Quem Já Aplicou e Lucrou
          </h2>

          {/* Texto intro */}
          <div className="flex flex-col items-center gap-3 text-center max-w-2xl">
            <p className="text-base md:text-lg text-gray-300">
              Veja como{" "}
              <span className="text-white font-bold">
                imobiliárias e corretores
              </span>{" "}
              estão conquistando resultados extraordinários.
            </p>
            <p className="text-base md:text-lg text-gray-300">
              Depoimentos reais de quem{" "}
              <span className="text-white font-bold">
                multiplicou seus resultados
              </span>
              .
            </p>
          </div>

          {/* Mobile: carrossel com setas */}
          <div className="w-full sm:hidden relative flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              ◀
            </button>

            <button
              onClick={() => {
                setActiveVideo(thumbs[currentIndex].video);
                setIsVideoOpen(true);
              }}
              className="w-[260px] bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg text-left"
            >
              <img
                src={thumbs[currentIndex].img}
                alt={thumbs[currentIndex].title}
                className="w-full aspect-[9/16] object-cover rounded-xl"
              />
              <div className="p-3">
                <h3 className="font-bold text-base">
                  {thumbs[currentIndex].title}
                </h3>
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              ▶
            </button>
          </div>

          {/* Desktop: grid normal */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {thumbs.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveVideo(t.video);
                  setIsVideoOpen(true);
                }}
                className="bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition text-left"
              >
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full aspect-[16/9] object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{t.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Vídeo */}
      {isVideoOpen && activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src={activeVideo}
              title="Vídeo"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute -top-6 -right-6 bg-white text-black rounded-full px-3 py-1 font-bold"
              onClick={() => {
                setIsVideoOpen(false);
                setActiveVideo(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ThirdSection;
