import { useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current || !textRef.current) return;

    // Prepare the overlay: hidden offscreen and invisible
    gsap.set(overlayRef.current, {
      yPercent: -100,
      opacity: 1,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // Trigger route swap
      },
    });

    tl.to(overlayRef.current, {
      yPercent: 0, // Slide down into view
      duration: 0.6,
      ease: "power4.inOut",
    })
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3" // slightly overlap with overlay entrance
      )
      .to(overlayRef.current, {
        yPercent: 100, // Slide down out of screen
        duration: 0.8,
        delay: 0.3,
        ease: "power4.inOut",
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-red-50 z-[9999] pointer-events-none flex justify-center items-center"
      style={{ opacity: 0 }}
    >
      <h1
        ref={textRef}
        className="font-extrabold text-3xl md:text-8xl"
      >
        SANE VILLAGE
      </h1>
    </div>
  );
};

export default TransitionOverlay;
