"use client";

import { useEffect } from "react";

const animatedSelector = [
  "main section h1",
  "main section h2",
  "main section h3",
  "main section p",
  "main section article",
  "main section a",
  "main section button",
  "main section svg"
].join(", ");

export function ScrollAnimations() {
  useEffect(() => {
    const elements = [...document.querySelectorAll(animatedSelector)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element, index) => {
      const isAlreadyVisible = element.getBoundingClientRect().top < window.innerHeight * 0.92;
      if (isAlreadyVisible) return;

      element.classList.add("pop-on-scroll");
      (element as HTMLElement).style.setProperty("--pop-delay", `${(index % 6) * 65}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
