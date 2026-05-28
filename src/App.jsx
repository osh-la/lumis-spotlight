
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import MainLayout from "./Layout/mainLayout";
import About from "./pages/About";
import NotFound from "./pages/notFound";
import Gallery from "./pages/gallery";
import { TransitionProvider } from "./context/transitionContext";

import { SectionRefsProvider, useSectionRefs } from "./context/sectionRefs";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

function AnimationsController() {
  const {
    hero,
    heroHeader,
    heroText,
    POD,
    videoRef,
    about,
    aboutImage1,
    categoriesContainer,
    historySection,
    historyBg,
    lookoutSection,
    lookoutText,
    lookoutImage,
  } = useSectionRefs();

  useEffect(() => {
    // --- Lenis setup ---
    const lenis = new Lenis({ smooth: true, lerp: 0.075 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // make ScrollTrigger aware of Lenis
    try {
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length) {
            lenis.scrollTo(value);
            return;
          }
          // read the current scroll position from Lenis
          // lenis has internal API 'scroll' on recent versions; fallback to window
          return (lenis && lenis.scroll && lenis.scroll.instance && lenis.scroll.instance.scroll?.y) || window.scrollY;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });
    } catch (err) {
      // ignore scrollerProxy errors for lenis versions mismatch
      console.warn("scrollerProxy warning:", err.message);
    }

    // ensure ScrollTrigger updates when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // refresh ScrollTrigger -> update Lenis
    ScrollTrigger.addEventListener("refresh", () => lenis && lenis.update && lenis.update());

    // --- GSAP animations in single context ---
    const ctx = gsap.context(() => {
      // HERO: simple fades + video scale + POD parallax
      if (heroHeader?.current) {
        gsap.fromTo(
          heroHeader.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.8, ease: "power2.out" }
        );
      }

      if (videoRef?.current) {
        gsap.fromTo(
          videoRef.current,
          { scale: 1.5 },
          {
            scale: 1,
            ease: "power1.in",
            scrollTrigger: {
              trigger: hero.current || videoRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      if (POD?.current && hero?.current) {
        gsap.fromTo(
          POD.current,
          { y: "40%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: hero.current,
              start: "center center",
              end: "center 10%",
              scrub: true,
              // snap: 1, // optional: keep snap if desired
            },
          }
        );
      }

      // ABOUT: image parallax
      if (aboutImage1?.current && about?.current) {
        gsap.to(aboutImage1.current, {
          y: "40%",
          ease: "none",
          scrollTrigger: {
            trigger: about.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // CATEGORIES: horizontal scroll with pinned container and background parallax per slide
      if (categoriesContainer?.current) {
        const container = categoriesContainer.current;
        const slides = Array.from(container.querySelectorAll(".category-slide"));

        if (slides.length > 0) {
          const scrollTween = gsap.to(slides, {
            xPercent: -100 * (slides.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 0.3,
              snap: 1 / (slides.length - 1),
              start: "top top",
              end: () => `+=${(slides.length - 1) * window.innerWidth}`,
              invalidateOnRefresh: true,
              id: "category-scroll",
            },
          });

          slides.forEach((slide, i) => {
            const bg = slide.querySelector(".glide-bg");
            if (!bg) return;
            gsap.fromTo(
              bg,
              { xPercent: -4 },
              {
                xPercent: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: slide,
                  containerAnimation: scrollTween,
                  start: "left center",
                  end: "right center",
                  scrub: 0.3,
                  id: `slide-${i}`,
                },
              }
            );
          });
        }
      }

      // HISTORY: background parallax
      if (historyBg?.current && historySection?.current) {
        gsap.to(historyBg.current, {
          y: "40%",
          ease: "none",
          scrollTrigger: {
            trigger: historySection.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // LOOKOUT: pinned timeline showing text then image
      if (lookoutSection?.current && lookoutText?.current && lookoutImage?.current) {
        gsap.set([lookoutText.current, lookoutImage.current], { yPercent: 100, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: lookoutSection.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(lookoutText.current, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }).to(
          lookoutImage.current,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0.15"
        );
      }
    }); // end ctx

    // trigger a refresh so ScrollTrigger knows the layout after all is set
    ScrollTrigger.refresh();

    return () => {
      // cleanup
      try {
        ctx.revert();
      } catch (e) {
        /* ignore */
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.removeEventListener("refresh", () => lenis && lenis.update && lenis.update());
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [
    hero,
    heroHeader,
    heroText,
    POD,
    videoRef,
    about,
    aboutImage1,
    categoriesContainer,
    historySection,
    historyBg,
    lookoutSection,
    lookoutText,
    lookoutImage,
  ]);

  return null;
}

// --- Router setup (unchanged) ---
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:categorySlug" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <TransitionProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
          <SectionRefsProvider>
            <RouterProvider router={router} />
       
            <AnimationsController />
          </SectionRefsProvider>
        
      </TransitionProvider>
    </>
  );
}
