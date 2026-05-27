// LookoutSection.jsx
import { useSectionRefs }  from "../../context/sectionRefs";


const LookoutSection = () => {
  const { lookoutSection, lookoutText, lookoutImage } = useSectionRefs();

  return (
    <section
      ref={lookoutSection}
      className="relative min-h-[100vh] w-full flex flex-col md:flex-row overflow-hidden bg-red-50"
    >
      <div className="w-full md:w-1/2 h-[85vh] md:h-full relative z-10 overflow-hidden">
        <img
          ref={lookoutImage}
          src="/images/image1.jpg"
          alt="Lookout"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-4 sm:px-10 z-20">
        <div
          ref={lookoutText}
          className="text-center md:text-left text-stone-800 font-medium p-4 sm:p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">OUR SHOWROOM</h2>
          <p className="text-base sm:text-lg">
            Located at former spoons sensation, rayfield road jos plateau state, a world of endless choices. Step in, reflect, and find what moves your space forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LookoutSection;
