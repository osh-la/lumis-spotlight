import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Latest() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2.5, spacing: 12 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const autoplayRef = useRef(null);

  const items = [
    { id: 1, image: "/images/chairs.png", label: "Modern Chair", price: "$140" },
    { id: 2, image: "/images/image2.jpg", label: "Wooden Table", price: "$140" },
    { id: 3, image: "/images/image3.jpg", label: "Sleek Lamp", price: "$140" },
    { id: 4, image: "/images/image4.jpg", label: "Cozy Sofa", price: "$140" },
    { id: 5, image: "/images/image5.jpg", label: "Wall Frame", price: "$140" },
  ];

  // Autoplay – scroll by visible group or just 1 on mobile
  useEffect(() => {
    if (!slider || !slider.current) return;

    const current = slider.current;
    const getPerView = () =>
      typeof current.options.slides.perView === "number"
        ? current.options.slides.perView
        : 1;

    const scroll = () => {
      const { abs } = current.track.details;
      const perView = getPerView();
      current.moveToIdx(abs + perView, true);
    };

    autoplayRef.current = setInterval(scroll, 2500);

    return () => clearInterval(autoplayRef.current);
  }, [slider]);

  // Drag cursor
  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 32}px, ${e.clientY - 32}px)`;
    };
    const showCursor = () => (cursor.style.opacity = 1);
    const hideCursor = () => (cursor.style.opacity = 0);

    container.addEventListener("mousemove", moveCursor);
    container.addEventListener("mouseenter", showCursor);
    container.addEventListener("mouseleave", hideCursor);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
      container.removeEventListener("mouseenter", showCursor);
      container.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-red-50 py-8 space-y-6 relative">
      <h1 className="ml-4 text-2xl sm:text-3xl font-semibold">LATEST ARRIVALS</h1>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-16 h-16 bg-black text-white text-xs font-semibold 
                   rounded-full flex items-center justify-center uppercase 
                   pointer-events-none z-50 opacity-0 transition-opacity duration-200"
      >
        Drag
      </div>

      <div ref={sliderRef} className="keen-slider px-4">
        {[...items, ...items].map(({ image, label, price }, i) => (
          <div
            key={i}
            className="keen-slider__slide relative w-full max-w-[300px] h-[360px] shrink-0 rounded-md shadow-lg bg-white overflow-hidden"
          >
            <img src={image} alt={label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 p-4 w-2/4 h-1/4 top-5/6 bg-gradient-to-t from-white/70 to-transparent">
              <p className="text-black text-base sm:text-lg font-semibold">{label} -</p>
              <p className="text-black text-base sm:text-lg font-semibold">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
