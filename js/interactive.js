document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("fade-in");
        }, index * 150); // stagger animation
        observer.unobserve(entry.target); // stop observing once animated
      }
    });
  });

  document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
  });
});