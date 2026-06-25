const menu = document.getElementById("menu") as HTMLDialogElement | null;
const btnOpen = document.getElementById("btn-menu-open") as HTMLButtonElement | null;
const btnClose = document.getElementById("btn-menu-close") as HTMLButtonElement | null;
const navLinks = menu?.querySelectorAll("nav a");

btnOpen?.addEventListener("click", () => {
  menu?.showModal();
});

btnClose?.addEventListener("click", () => {
  menu?.close();
});

// リンク押下で閉じる
navLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    menu?.close();
  });
});

// ライトディスミス
menu?.addEventListener("click", (e: MouseEvent) => {
  const menuInner = menu.querySelector(".menu-inner");
  if (!menuInner) return;
  const rect = menuInner.getBoundingClientRect();
  const isOutside =
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom;
  if (isOutside) {
    menu.close();
  }
});

// クロスアニメーション
menu?.addEventListener("toggle", (e: Event) => {
  const isOpen = (e.target as HTMLDialogElement).open;
  btnOpen?.classList.toggle("is-active", isOpen);
  btnClose?.classList.toggle("is-active", isOpen);
});