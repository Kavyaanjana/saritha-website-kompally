import { onMounted, onUnmounted } from "vue";

export function useScrollEffects() {
  const checkScroll = () => {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      statsSection.classList.add("in-view");
    }
  };

  const revealCards = () => {
    const cards = document.querySelectorAll(".doctor-card");
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 50) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200); // Staggered effect
      }
    });
  };

  onMounted(() => {
    document.addEventListener("scroll", checkScroll);
    document.addEventListener("scroll", revealCards);
    document.addEventListener("DOMContentLoaded", checkScroll);
    document.addEventListener("DOMContentLoaded", revealCards);
  });

  onUnmounted(() => {
    document.removeEventListener("scroll", checkScroll);
    document.removeEventListener("scroll", revealCards);
    document.removeEventListener("DOMContentLoaded", checkScroll);
    document.removeEventListener("DOMContentLoaded", revealCards);
  });
}
