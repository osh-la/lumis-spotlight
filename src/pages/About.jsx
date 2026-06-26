import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "../components/transitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const growRef = useRef(null);
  const textsRef = useRef([]);
  const addTextRef = (el) =>
    el && !textsRef.current.includes(el) && textsRef.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.fromTo(
        growRef.current,
        { scaleX: 0.1, transformOrigin: "left center" },
        { scaleX: 1, ease: "none", duration: 1 },
      ).fromTo(
        textsRef.current,
        { xPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          stagger: 0.25,
          ease: "power2.out",
          duration: 0.75,
        },
        ">-0.4",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-20 md:px-10 text-black space-y-16 overflow-x-hidden"
    >
      <section>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">
          About Lumi Spotlight
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <video
            className="w-full md:w-2/5 rounded-lg object-cover"
            src="/images/ab1.mp4"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="max-w-3xl space-y-6 text-center md:text-left">
            <p className="font-inter text-[17px] md:text-[19px] leading-8 tracking-[0.01em] text-neutral-700">
              It started with a phone camera and a love for creativity—no
              business plan, no fancy gear, just me capturing moments I found
              beautiful. Then people started noticing.{" "}
              <span className="italic">"Who shot this?"</span>{" "}
              <span className="italic">"I need you to cover my event."</span>{" "}
              Again and again, the reactions made it clear: this wasn't just a
              hobby—it was a gift worth building a brand around. That's how
              <span className="font-semibold text-black"> Lumi Spotlight </span>
              was born: out of genuine passion, not a forced idea.
            </p>

            <p className="font-inter text-[17px] md:text-[19px] leading-8 tracking-[0.01em] text-neutral-700">
              Today, we tell stories through photography and video—shot entirely
              on mobile—for brands, events, and individuals who want their
              moments captured exactly the way they felt, not just the way they
              looked. Every shoot is treated with the same care that started it
              all.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={growRef}
        className="bg-red-50 min-h-screen flex flex-col items-center justify-center px-4 py-16 md:px-10 overflow-hidden"
      >
        <h1
          ref={addTextRef}
          className="max-w-4xl mx-auto text-center font-serif text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-black"
        >
          Every story deserves to be remembered.
          <br />
          Let's create yours.
        </h1>
        <div
          ref={addTextRef}
          className="max-w-3xl text-center text-sm sm:text-base md:text-lg"
        >
          <TransitionLink to="/onboarding">
            <button className="rounded-full bg-black text-white px-8 py-4 text-sm md:text-base uppercase">
              Book a Session
            </button>
          </TransitionLink>
        </div>
      </section>
    </section>
  );
}
