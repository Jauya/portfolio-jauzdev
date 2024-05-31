import { useState } from "react";


export function useCarousel(listItem: any[] ) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollToImage = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === listItem.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? listItem.length - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return {
    currentIndex,
    scrollToImage,
    goToSlide,
  };
}
