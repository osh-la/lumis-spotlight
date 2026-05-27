// LookoutSection.jsx
import { useSectionRefs } from "../../context/sectionRefs";
import { Link } from "react-router-dom";

const LookoutSection = () => {
  const { lookoutSection, lookoutText, lookoutImage } = useSectionRefs();

  return (
    <section
      ref={lookoutSection}
      className="relative min-h-[100vh] w-full flex flex-col md:flex-row overflow-hidden bg-red-50"
    >
      <div className="w-full md:w-1/2 h-[85vh] md:h-full relative z-10 overflow-hidden">
        <video
          ref={lookoutImage}
          src="/lookout.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-4 sm:px-10 z-20">
        <div
          ref={lookoutText}
          className="text-center space-y-4 md:text-left text-stone-800 font-medium p-4 sm:p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"></h2>
          <p className="text-base sm:text-lg">
            We don’t just create videos — we capture the feeling behind every
            moment, the energy in every space, and the emotion people want to
            relive for years to come. Through cinematic storytelling,
            intentional visuals, and creative direction, we turn ordinary
            moments into timeless experiences that feel authentic, immersive,
            and unforgettable. Every frame is crafted to preserve memories, tell
            meaningful stories, and create visuals that live far beyond the
            moment they were captured.
          </p>
          <Link to="/booking">
            <button className="rounded-full bg-black text-white px-8 py-4 text-sm md:text-base uppercase">
              Book a Session
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LookoutSection;
