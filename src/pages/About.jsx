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
        Our Little Story
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
          <div className="flex flex-col gap-4 text-base md:text-lg text-center md:text-left">
            <p>
              Me i dont know the story oo, but if you let me write something random i think i will just do that in the next paragraph and you asked when i was talking to my self
              in your dm if it gets crazier, well i guess you are about to find out.
            </p>
            <p>
              It all started when i saw this tall dark very handsome and good looking guy walking towards me at AYA, the aura of his presence blew me right away! i didnt know who this was but i knew i wanted to see him again,
             but i am very shy and definitly wasnt going to stop him or ask for his name or his number but i knew i wouldnt be happy if i didnt get to see him again, he was getting closer, i knew i had to think and act fast, so i took out my phone and started making a video of him as he walked towards me! the closer he got the more angles i changed
             so i could capture all his essence and more importantly not get caught while at it, when he got where i was he looked me in the eyes, help my arms and said "hi, im oshla..i know what you were doing, i hope it turns out as great as you hope" and he walked away majestically, something told me this guy was a prince and yes he smelled amazing too!
             when i got home i watched those videos and omg! it was the best thing i had seen all day!it was in that moment i realized i was good at this and i decided i was going to make the best out of this and well, as thy say.. the rest is history.
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
          perferendis nulla possimus, natus error numquam culpa magnam
          inventore, quo odit fuga reprehenderit.
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
         <Link to="/booking">
            <button className="rounded-full bg-black text-white px-8 py-4 text-sm md:text-base uppercase">
              Book a Session
            </button>
          </Link>
      </section>
    </section>
  );
}
