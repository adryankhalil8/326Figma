(() => {
  const eyes = [...document.querySelectorAll("[data-eye]")];
  const MAX_OFFSET = 42;

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function updatePupils(clientX, clientY) {
    eyes.forEach(eye => {
      const pupil = eye.querySelector("[data-pupil]");
      const rect = eye.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = clientX - cx;
      const dy = clientY - cy;

      const dist = Math.hypot(dx, dy) || 1;
      const nx = dx / dist;
      const ny = dy / dist;

      const offsetX = clamp(nx * MAX_OFFSET, -MAX_OFFSET, MAX_OFFSET);
      const offsetY = clamp(ny * MAX_OFFSET, -MAX_OFFSET, MAX_OFFSET);

      pupil.style.transform =
        `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    });
  }

  window.addEventListener("mousemove", (e) => {
    updatePupils(e.clientX, e.clientY);
  });

  window.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    updatePupils(t.clientX, t.clientY);
  }, { passive: true });
})();
