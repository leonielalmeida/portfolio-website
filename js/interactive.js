const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in");
      }, index * 150); // stagger by 150ms each
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));