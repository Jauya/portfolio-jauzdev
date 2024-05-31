import { sobreMi } from "../data";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useCarousel } from "../hooks/useCarousel";

export default function CarouselPhotos() {
  const { currentIndex, goToSlide, scrollToImage } = useCarousel(sobreMi.interestsList);

  return (
    <div className="min-h-full xl:h-full h-64  section relative overflow-hidden flex justify-center items-center">
      <div
        className="flex flex-nowrap absolute transition-transform duration-700 ease-in-out transform-gpu min-h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sobreMi.interestsList.map((image, idx) => (
          <div key={idx} className="flex min-w-full overflow-hidden">
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-full aspect-square scale-105"
            />
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-4 px-1 py-0.5 bg-[#151514]/60 rounded-[1.75rem] backdrop-blur-md">
        {sobreMi.interestsList.map((_, idx) => (
          <button
            key={idx}
            className="flex w-4 h-4 justify-center items-center"
            onClick={() => goToSlide(idx)}
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                idx == currentIndex ? "bg-white/80" : "bg-white/40"
              }`}
            ></span>
          </button>
        ))}
      </div>
      <div className="flex justify-between absolute w-full p-2">
        <button
          className="flex justify-center items-center bg-black/40 rounded-full p-2"
          onClick={() => scrollToImage("prev")}
        >
          <ChevronLeft size="1.5rem" className="text-white/90" />
        </button>
        <button
          className="flex justify-center items-center bg-black/40 rounded-full p-2"
          onClick={() => scrollToImage("next")}
        >
          <ChevronRight size="1.5rem" className="text-white/90" />
        </button>
      </div>
    </div>
  );
}
