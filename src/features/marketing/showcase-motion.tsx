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
    return () => observer.disconnect();
  }, []);
  return <span hidden ref={marker} aria-hidden="true" />;
}
