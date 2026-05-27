import { useSectionRefs } from "../../context/sectionRefs";
import TransitionLink from "../transitionLink";

export default function Hero() {
  const { hero, heroHeader, heroText, POD, videoRef } = useSectionRefs();

  return (
    <section
    id="hero"
      ref={hero}
      className="relative  overflow-hidden bg-[#d9b38c] text-black">
      {/* BACKGROUND IMAGE */}
      <img
        ref={videoRef}
        src="/lumi.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 " />

      <div className="absolute inset-0 " />

      <div className="absolute inset-0 " />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay " />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* SMALL LABEL */}
        <div className="mb-6 tracking-[0.4em] uppercase text-sm md:text-base text-black/70">
          
        </div>

        {/* MAIN TITLE */}
        <h1
          ref={heroHeader}
          className="max-w-6xl text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-none tracking-tight"
        >
          Lumi
          <span className="block italic font-light tracking-normal">
            Spotlight
          </span>
        </h1>

        {/* SUBTEXT */}
        <div
          ref={heroText}
          className="mt-8 max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-black/80"
        >
          <p>
            Where storytelling and creativity collide to create
            unforgettable digital experiences.
          </p>
        </div>

        {/* CTA */}
        <div
          ref={POD}
          className="mt-14 flex flex-col items-center justify-center"
        >
          <TransitionLink to="/shop">
            <button className="group relative overflow-hidden rounded-full border border-black/20 bg-white/30 backdrop-blur-xl px-8 py-4 transition-all duration-500 hover:scale-105 hover:bg-black hover:text-white">
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

              <div className="relative flex items-center gap-4 text-sm md:text-lg tracking-[0.2em] uppercase">
                Explore

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  →
                </div>
              </div>
            </button>
          </TransitionLink>
        </div>
      </div>

      {/* LIGHT BLOBS */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full " />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full " />
    </section>
  );
}