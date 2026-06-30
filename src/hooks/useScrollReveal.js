import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to the element once it enters the viewport.
 * Pairs with the `.reveal` utility in theme.css. No-ops gracefully when
 * IntersectionObserver isn't available.
 * @param {{ delay?: number, threshold?: number }} [options]
 */
export function useScrollReveal({ delay = 0, threshold = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return undefined;
    }

    if (delay) {
      node.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.unobserve(node);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return ref;
}

export default useScrollReveal;
