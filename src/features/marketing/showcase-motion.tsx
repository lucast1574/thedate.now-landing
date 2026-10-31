"use client";
import { useEffect, useRef } from "react";
export default function ShowcaseMotion() {
  const marker = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = marker.current?.closest(".product-showcase");
    if (!root || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.target.toggleAttribute("data-in-view", entry.isIntersecting),
        ),
      { rootMargin: "100px" },
    );
    root
      .querySelectorAll("section")
      .forEach((section) => observer.observe(section));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const copy = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          copy.unobserve(entry.target);
          if (reduced.matches) return;
          const animation = entry.target.animate(
            [
              { opacity: 0, translate: "0 24px" },
              { opacity: 1, translate: "0 0" },
            ],
            { duration: 1000, easing: "cubic-bezier(.16,1,.3,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }),
      { threshold: 0.15 },
    );
    root
      .querySelectorAll("h2, .showcase-notes > p")
      .forEach((el) => copy.observe(el));
    const stop = () => {
      if (reduced.matches) animations.forEach((a) => a.cancel());
    };
    root
      .closest("main")
      ?.querySelectorAll(
        ".vow-story article, .vow-promise, .party-steps article, .marketing-questions details, .marketing-questions > div:first-child, .vow-closing h2, .party-final",
      )
      .forEach((el) => copy.observe(el));
    reduced.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      copy.disconnect();
      animations.forEach((a) => a.cancel());
      reduced.removeEventListener("change", stop);
    };
  }, []);
  return <span hidden ref={marker} aria-hidden="true" />;
}
