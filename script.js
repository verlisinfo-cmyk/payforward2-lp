const revealTargets = document.querySelectorAll(".reveal");
const stickyCta = document.querySelector("[data-sticky-cta]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

const syncStickyCta = () => {
  const heroBottom = document.querySelector(".hero")?.getBoundingClientRect().bottom ?? 0;
  const detailTop = document.querySelector("#campaign-detail")?.getBoundingClientRect().top ?? 0;
  stickyCta?.classList.toggle("is-visible", heroBottom < 80 && detailTop > 180);
};

window.addEventListener("scroll", syncStickyCta, { passive: true });
window.addEventListener("resize", syncStickyCta);
syncStickyCta();
