import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `visible` flag.
 * When the referenced element enters the viewport, visible becomes true.
 * Respects prefers-reduced-motion — if motion is reduced, visible starts true.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [visible, setVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, prefersReduced]);

  return { ref, visible };
}