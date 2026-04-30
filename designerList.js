const rows = document.querySelectorAll('.designerList .row');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const row = entry.target;

      const index = [length].indexOf(row);
      row.style.transitionDelay = `${index * 50}ms`;

      row.classList.add('reveal');
      observer.unobserve(row);
    }
  });
}, {
  threshold: 1
});

rows.forEach(row => observer.observe(row));