import { sobreMi } from "../data";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useCarousel } from "../hooks/useCarousel";

export default function CarouselSkillful() {
  const { currentIndex, goToSlide } = useCarousel(sobreMi.skillfulList);
  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center">
      <div
        className="w-full flex flex-nowrap transition-transform duration-700 ease-in-out transform-cpu min-h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sobreMi.skillfulList.map((skillful, idx) => (
          <div key={idx} className="min-w-full">
            <h3 className="font-medium text-[#fffff6] dark:text-[#1c1c1c] md:text-3xl text-2xl mb-2">
              {skillful.title}
            </h3>
            <p className="text-lg">{skillful.description}</p>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-0 px-1 py-0.5 bg-[#292928] dark:bg-[#f2f2f2] rounded-[1.75rem]">
        {sobreMi.skillfulList.map((_, idx) => (
          <button
            key={idx}
            className="flex w-4 h-4 justify-center items-center"
            onClick={() => goToSlide(idx)}
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                idx == currentIndex ? "bg-white/80 dark:bg-black/80" : "bg-white/40 dark:bg-black/20"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
