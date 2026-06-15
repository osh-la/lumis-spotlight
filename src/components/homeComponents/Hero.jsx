import { useSectionRefs } from "../../context/sectionRefs";
import TransitionLink from "../transitionLink";

export default function Hero() {
  const { hero, heroHeader, heroText, POD, videoRef } = useSectionRefs();

  return (
    <section
      id="hero"
      ref={hero}
      className="relative min-h-screen bg-[#f7f4ee] overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-24">
          <div className="mb-8">
            <span className="uppercase tracking-[0.35em] text-xs text-[#8a8a84]">
              Mobile Photography & Videography
            </span>
          </div>

          <h1
            ref={heroHeader}
            className="
              font-serif
              text-6xl
              sm:text-7xl
              md:text-8xl
              xl:text-[9rem]
              leading-[0.9]
              font-normal
              text-[#1a1a18]
            "
          >
            Lumi
            <br />
            Spotlight
          </h1>

          <p
            ref={heroText}
            className="
              mt-8
              max-w-md
              text-[#5d5d58]
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Capturing stories through mobile photography,
            cinematic videography and lifestyle content
            creation that feels timeless.
          </p>

          <div
            ref={POD}
            className="mt-12 flex flex-wrap gap-4"
          >
            <TransitionLink to="/gallery">
              <button
                className="
                  px-8
                  py-4
                  bg-[#1a1a18]
                  text-white
                  uppercase
                  tracking-[0.15em]
                  text-sm
                  hover:bg-[#333]
                  transition-all
                "
              >
                View Portfolio
              </button>
            </TransitionLink>

            <TransitionLink to="/onboarding">
              <button
                className="
                  px-8
                  py-4
                  border
                  border-[#1a1a18]
                  uppercase
                  tracking-[0.15em]
                  text-sm
                  hover:bg-[#1a1a18]
                  hover:text-white
                  transition-all
                "
              >
                Book Session
              </button>
            </TransitionLink>
          </div>

          <div className="mt-16 flex gap-8 text-sm text-[#8a8a84]">
            <span>Photography</span>
            <span>Videography</span>
            <span>Content Creation</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            ref={videoRef}
            src="/lumi.png"
            alt="Lumi Spotlight"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div className="absolute inset-0 bg-black/10" />

          {/* FLOATING CARD */}
          <div
            className="
              absolute
              bottom-8
              left-8
              bg-white/90
              backdrop-blur-sm
              px-6
              py-5
              max-w-xs
            "
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a84]">
              Based in Nigeria
            </p>

            <p className="mt-2 text-sm text-[#1a1a18] leading-relaxed">
              Visual storytelling for brands,
              entrepreneurs and memorable events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}