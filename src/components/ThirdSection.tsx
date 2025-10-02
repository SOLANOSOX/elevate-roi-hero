import { useEffect, useMemo, useState } from "react";
import compasso from "@/assets/video_thumbs/23.png";
import antoniocarlos from "@/assets/video_thumbs/24.png";
import triad from "@/assets/video_thumbs/25.png";

const ThirdSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const thumbs = useMemo(
    () => [
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
    ],
    []
  );

  const openVideo = (baseUrl: string) => {
    const url =
      baseUrl +
      "?autoplay=1&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3";
    setActiveVideo(url);
    setIsVideoOpen(true);
  };
  const closeVideo = () => {
    setIsVideoOpen(false);
    setActiveVideo(null);
  };

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % thumbs.length);
  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + thumbs.length) % thumbs.length);

  // autoplay lento no mobile (pausa quando o vídeo abre ou se user prefere menos movimento)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isVideoOpen || media.matches) return;
    const id = setInterval(nextSlide, 4000);
    return () => clearInterval(id);
  }, [isVideoOpen]);

  // trava o scroll quando o lightbox abre
  useEffect(() => {
    if (isVideoOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isVideoOpen]);

  return (
    <>
      <section className="bg-[#0E141B] px-4 md:px-6 lg:px-[418px] font-geist text-white">
        <div className="max-w-[1060px] mx-auto py-12 md:py-20 flex flex-col items-center gap-10">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-center leading-tight font-bold">
            Quem Já Aplicou e Lucrou
          </h2>

          {/* Mobile: slider */}
          <div className="w-full sm:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openVideo(t.video)}
                  onTouchStart={() => openVideo(t.video)} // garante iOS
                  className="relative w-full flex-shrink-0 bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg"
                  aria-label={`Assistir depoimento: ${t.title}`}
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full aspect-[3/4] object-cover rounded-xl"
                  />
                  {/* Play */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] flex items-center justify-center shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Overlay hover — DESLIGADO no mobile (só em sm+) */}
                  <div className="hidden sm:flex absolute inset-0 bg-black/70 opacity-0 sm:group-hover:opacity-100 transition p-4 items-center justify-center text-center">
                    <p className="text-sm text-white font-medium">{t.hoverText}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Controls */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <span aria-hidden="true">{"\u25C0\uFE0E"}</span>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próximo"
              className="absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <span aria-hidden="true">{"\u25B6\uFE0E"}</span>
            </button>
          </div>

          {/* Desktop: grid com hover normal */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {thumbs.map((t, i) => (
              <button
                key={i}
                type="button"
                onClick={() => openVideo(t.video)}
                className="relative group bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition text-left"
                aria-label={`Assistir depoimento: ${t.title}`}
              >
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#CBA135] to-[#F5D78E] flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4 pointer-events-none">
                  <p className="text-sm md:text-base text-white font-medium">{t.hoverText}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX do vídeo (mobile e desktop) */}
      {isVideoOpen && activeVideo && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[900px] aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src={activeVideo}
              title="Vídeo"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Fechar vídeo"
              className="absolute -top-3 -right-3 bg-white text-black rounded-full shadow-lg px-3 py-1.5 text-sm font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ThirdSection;
