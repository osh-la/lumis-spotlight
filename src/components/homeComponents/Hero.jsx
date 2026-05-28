import { useSectionRefs } from "../../context/sectionRefs";
import TransitionLink from "../transitionLink";

export default function Hero() {
  const { hero, heroHeader, heroText, POD, videoRef } = useSectionRefs();

  return (
    <section
      id="hero"
      ref={hero}
      className="relative overflow-hidden bg-[#d9b38c] text-black min-h-screen"
    >
      {/* BACKGROUND IMAGE */}
      <img
        ref={videoRef}
        src="/lumi.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 text-center py-20">
        
        {/* SMALL LABEL */}
        <div className="mb-4 sm:mb-6 tracking-[0.25em] sm:tracking-[0.4em] uppercase text-xs sm:text-sm md:text-base text-black/70">
        </div>

        {/* MAIN TITLE */}
        <h1
          ref={heroHeader}
          className="
            max-w-6xl
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            xl:text-[10rem]
            font-black
            uppercase
            leading-none
            tracking-tight
          "
        >
          Lumi
          <span className="block italic font-light tracking-normal">
            Spotlight
          </span>
        </h1>

        {/* SUBTEXT */}
        <div
          ref={heroText}
          className="
            mt-6
            sm:mt-8
            max-w-4xl
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            font-light
            leading-relaxed
            text-black/80
          "
        >
          <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-6 list-none">
            <li className="flex items-center gap-2">
              <span>•</span> Mobile Photography
            </li>

            <li className="flex items-center gap-2">
              <span>•</span> Mobile Videography
            </li>

            <li className="flex items-center gap-2 text-center">
              <span>•</span> Event & Lifestyle Content Creation
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div
          ref={POD}
          className="mt-10 sm:mt-14 flex flex-col items-center justify-center"
        >
          <TransitionLink to="/gallery">
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-black
                bg-red-50
                backdrop-blur-xl
                px-6
                sm:px-8
                py-3
                sm:py-4
                transition-all
                duration-500
                hover:scale-105
                hover:bg-transparent
                hover:text-white
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

              <div className="relative flex items-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                Explore

                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  →
                </div>
              </div>
            </button>
          </TransitionLink>
        </div>
      </div>

      {/* LIGHT BLOBS */}
      <div className="absolute -top-20 -left-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full" />
      <div className="absolute bottom-0 right-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full" />
    </section>
  );
}