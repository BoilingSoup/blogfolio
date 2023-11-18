import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2500 }), WheelGesturesPlugin()]);

  return (
    <div ref={emblaRef} className={`${styles.embla} embla h-full w-full`}>
      <div className={`${styles.embla__container} embla__container h-full w-full`}>
        <div className={`${styles.embla__slide} embla__slide flex h-full w-full items-center justify-center bg-green-500`}>Slide 1</div>
        <div className={`${styles.embla__slide} embla__slide flex h-full w-full items-center justify-center bg-orange-200`}>Slide 2</div>
        <div className={`${styles.embla__slide} embla__slide flex h-full w-full items-center justify-center bg-gray-500`}>Slide 3</div>
      </div>
    </div>
  );
};
