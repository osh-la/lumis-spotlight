// About.jsx
import TransitionLink from "../transitionLink";
import { useSectionRefs }  from "../../context/sectionRefs";


export default function About() {
  const { about, aboutImage1, aboutHeader, aboutImage } = useSectionRefs();

  return (
    <section
      ref={about}
      className="relative h-screen overflow-hidden py-16 px-4 bg-red-50 flex flex-col-reverse md:flex-row items-center justify-around gap-10 md:gap-0"
    >
      <div ref={aboutImage1} className="relative h-64 w-64 md:h-80 md:w-80">
        <img
          ref={aboutImage}
          src="/images/image2.jpg"
          alt="Lamp 1"
          className="block w-full h-full object-contain"
        />
        <img
          src="/images/lamp2.png"
          alt="Lamp 2"
          className="absolute bottom-[-20%] right-[-20%] w-32 md:w-48"
        />
      </div>

      <div
        ref={aboutHeader}
        className="w-full md:w-3/5 space-y-4 text-lg md:text-xl flex flex-col justify-center md:justify-start  md:text-left"
      >
        <h1 className="text-2xl md:text-3xl font-semibold">
          WELCOME TO OUR STORE, WHERE TIMELESS AND STYLISH DESIGNS MEET
          STORYTELLING.
        </h1>
        <p>
          Every piece in our collection tells a personal story. Custom-designed
          and personalized to enhance aesthetics of your spaces..
        </p>
        <TransitionLink to="/About">
          <button className="border-2 py-2 px-6 rounded-full border-gray-800 flex items-center gap-2">
            ABOUT US
            <div className="rounded-full bg-white p-2">
              <img className="w-5 h-5" src="/images/right.png" alt="" />
            </div>
          </button>
        </TransitionLink>
      </div>
    </section>
  );
}
