import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🧠 Tell ScrollTrigger to use Lenis scroll values
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    // Sync on update
    lenis.on('scroll', ScrollTrigger.update);

    // Handle resizes and dynamic content
    ScrollTrigger.addEventListener('refresh', () => lenis.update());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);
}
