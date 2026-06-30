import { useEffect, useRef } from 'react';

/**
 * Applies a subtle vertical parallax translation to an element based on its
 * position relative to the viewport centre. Uses only `transform` (no layout
 * thrash), throttles work to one rAF per scroll/resize, and disables itself
 * entirely when the user prefers reduced motion.
 * @param {{ speed?: number }} [options] speed in [0, 1], higher = more movement
 */
export function useParallax({ speed = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    let ticking = false;

    function update() {
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (viewportCenter - elementCenter) * speed;
      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return ref;
}

export default useParallax;
