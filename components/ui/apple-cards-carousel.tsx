"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardOpen: (card: Card) => void;
  currentIndex: number;
}>({
  onCardOpen: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(true);
  const [canScrollRight, setCanScrollRight] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Set initial scroll position to the end of the carousel for right-to-left behavior
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Adjustments for flex-row-reverse scrolling
      const maxScrollLeft = scrollWidth - clientWidth;

      // Can scroll left when not at the end of the carousel
      setCanScrollLeft(Math.abs(scrollLeft) < maxScrollLeft);

      // Can scroll right when not at the beginning of the carousel
      setCanScrollRight(scrollLeft < 0);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      // For `flex-row-reverse`, a positive scroll value will scroll towards the start (rightward)
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      // For `flex-row-reverse`, a negative scroll value will scroll towards the end (leftward)
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleCardOpen = (card: Card) => {
    setCurrentCard(card);
  };

  const handleCardClose = () => {
    setCurrentCard(null);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardOpen: handleCardOpen, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex flex-row-reverse justify-start gap-4 w-full overflow-x-scroll overscroll-x-auto pt-10 md:pt-20 pb-6 sm:pb-10 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute left-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-r"
            )}
          ></div>

          <div
            className={cn("flex flex-row-reverse gap-4", "max-w-7xl mx-auto")}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                className="last:pl-[5%] md:last:pl-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-start gap-2">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
      {currentCard && <Modal card={currentCard} onClose={handleCardClose} />}
    </CarouselContext.Provider>
  );
};

const Modal = ({ card, onClose }: { card: Card; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  useOutsideClick(modalRef, onClose);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [card]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 h-screen z-50 overflow-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }} // Overlay fades out quickly
          className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
        />
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }} // Smoother fade-out and slight scale-down
          transition={{
            opacity: { duration: 0.1, delay: 0.1 }, // Fades out sooner
            scale: { duration: 0.3, ease: "easeOut" }, // Smooth scale down
          }}
          ref={modalRef}
          className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
        >
          <button
            className="sticky top-4 h-8 w-8 left-0 mr-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
          </button>
          <motion.p className="text-base text-right font-medium text-black dark:text-white">
            {card.category}
          </motion.p>
          <motion.p className="text-2xl text-right md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white">
            {card.title}
          </motion.p>
          <div className="py-10">{card.content}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const { onCardOpen } = useContext(CarouselContext);

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={() => onCardOpen(card)}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-white text-sm md:text-base font-medium text-right"
        >
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-xl md:text-3xl font-semibold max-w-sm text-right leading-relaxed [text-wrap:balance] mt-2"
        >
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
    </motion.button>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
