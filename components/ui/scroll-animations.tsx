"use client";

import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("main section h1, main section h2, main section h3, main section p, main section article, main section a, main section button, main section svg")];
    elements.forEach((element, index) => {
      element.classList.add("pop-on-scroll");
      (element as HTMLElement).style.setProperty("--pop-delay", `${(index % 6) * 65}ms`);
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.15 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}
