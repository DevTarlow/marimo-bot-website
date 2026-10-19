/* Lightweight page behaviour: no dependencies, no content gated on JavaScript. */
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // A very light pointer parallax for the atmospheric layers.
  const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
  if (parallaxItems.length && !reduceMotion.matches && window.matchMedia("(pointer: fine)").matches) {
    const pointer = { x: 0, y: 0 };
    let frame = 0;

    const paint = () => {
      frame = 0;
      for (const item of parallaxItems) {
        const depth = Number(item.dataset.parallax) || 8;
        item.style.setProperty("--shift-x", `${(pointer.x * depth).toFixed(2)}px`);
        item.style.setProperty("--shift-y", `${(pointer.y * depth).toFixed(2)}px`);
      }
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        pointer.x = event.clientX / window.innerWidth - 0.5;
        pointer.y = event.clientY / window.innerHeight - 0.5;
        if (!frame) frame = window.requestAnimationFrame(paint);
      },
      { passive: true }
    );
  }

  for (const year of document.querySelectorAll("[data-year]")) {
    year.textContent = String(new Date().getFullYear());
  }
})();
