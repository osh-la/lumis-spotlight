import TransitionLink from "../transitionLink";
import { useSectionRefs } from "../../context/sectionRefs";

export default function About() {
  const { about, aboutImage1, aboutHeader, aboutImage } = useSectionRefs();

  return (
    <section
      ref={about}
      className="relative overflow-hidden bg-red-50 px-6 py-20 md:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row md:justify-between">
        <div
          ref={aboutImage1}
          className="relative w-full max-w-md flex justify-center"
        >
          <video
            ref={aboutImage}
            src="/lumivid1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
          >
            Your browser does not support the video tag.
          </video>

          <video
            src="/logovid.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute -bottom-10 -right-6 w-28 md:w-52 md:h-64 object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* TEXT */}
        <div
          ref={aboutHeader}
          className="flex w-full max-w-2xl flex-col items-center space-y-8 text-center md:items-start md:text-left"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] md:text-sm md:tracking-[0.8em]">
            WHERE STORYTELLING MEETS CREATIVITY.
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            We don’t just create videos — we craft moments that live forever.
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
            From weddings to brand stories, Lumi Spotlight captures emotion,
            movement, and atmosphere in a way that feels cinematic, authentic,
            and unforgettable.
          </p>

          <TransitionLink to="/About">
            <button className="flex items-center gap-3 rounded-full border-2 border-gray-800 px-6 py-3 tracking-[0.2em] transition hover:bg-black hover:text-white">
              ABOUT US
              <div className="rounded-full bg-white p-2">
                <img className="h-4 w-4" src="/images/right.png" alt="" />
              </div>
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
