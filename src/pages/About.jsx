import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        { scaleX: 1, ease: "none", duration: 1 }
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
        ">-0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-20 md:px-10 text-black space-y-16 overflow-x-hidden">
      <section>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center md:text-left">ABOUT US</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            className="w-full md:w-2/5 rounded-lg"
            src="/images/chairs.png"
            alt="Chairs"
          />
          <div className="flex flex-col gap-4 text-base md:text-lg text-center md:text-left">
            <p>
              It is more than just furniture; it is stories filled with
              inspiration, creativity and passion that will bring life to your
              home.
            </p>
            <p>
              The perfect blend of elegance, practicality and essence with a
              sense of style for whatever space you want it in.
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
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-center"
        >
          test
        </h1>
        <p
          ref={addTextRef}
          className="max-w-3xl mb-4 text-center text-sm sm:text-base md:text-lg"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          harum ipsam officiis blanditiis debitis eius, iure doloremque
          perferendis nulla possimus, natus error numquam culpa magnam inventore,
          quo odit fuga reprehenderit.
        </p>
        <p
          ref={addTextRef}
          className="max-w-3xl text-center text-sm sm:text-base md:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          nulla et voluptate est, hic incidunt aliquam quas deserunt, repellat
          dignissimos quos odit? Saepe omnis similique perspiciatis incidunt
          architecto officiis ratione!
        </p>
      </section>
    </section>
  );
}
