document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) return;
    target.scrollIntoView({ behavior: 'smooth' });
  });
});