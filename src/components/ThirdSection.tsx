import { useState } from "react";
import { Button } from "@/components/ui/button";
import DiagnosticModal from "@/components/DiagnosticModal";

const ThirdSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Modal do formulário
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Modal dos vídeos
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const thumbs = [
    {
      img: "/uploads/michel-thumb.png",
      video: "https://www.youtube.com/embed/yJ5O_2CtRf4",
      title: "Michel - Antônio Carlos",
    },
    {
      img: "/uploads/bruno-thumb.png",
      video: "https://www.youtube.com/embed/4QmAylcFbwE",
      title: "Bruno - Triad",
    },
    {
      img: "/uploads/emerson-thumb.png",
      video: "https://www.youtube.com/embed/wk5t1p03I8I",
      title: "Emerson - Compasso",
    },
  ];

  return (
    <>
      <section className="bg-[#0E141B] px-4 md:px-6 lg:px-[418px] font-geist text-white">
        <div className="max-w-[1060px] mx-auto py-12 md:py-20 flex flex-col items-center gap-10">
          {/* Título */}
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-center leading-tight font-extrabold">
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

          {/* Grid de thumbs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {thumbs.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveVideo(t.video);
                  setIsVideoOpen(true); // Agora só abre o modal de vídeo
                }}
                className="bg-[#1A1F25] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition text-left"
              >
                <img
                  src={t.img}
                  alt={t.title}
                  className="w-full aspect-[9/16] md:aspect-[16/9] object-cover rounded-xl"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{t.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-6 mb-6 px-4">
            <Button
              variant="hero"
              size="hero"
              className="
                w-full max-w-[360px] 
                whitespace-normal break-words text-center 
                px-3 py-0 text-xs
                sm:px-4 sm:py-3 sm:text-xs
                md:px-6 md:py-3 md:text-sm
                lg:px-8 lg:py-4 lg:text-base
                bg-gradient-to-r from-[#CBA135] to-[#F5D78E]
                text-black rounded-full font-bold
              "
              onClick={() => setIsFormOpen(true)} // Agora só abre o form
            >
              Quero aplicar o sistema agora
            </Button>
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

      {/* Modal do Form */}
      <DiagnosticModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default ThirdSection;
