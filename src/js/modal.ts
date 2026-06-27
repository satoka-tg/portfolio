const worksItems = document.querySelectorAll<HTMLButtonElement>(".item");
const modals = document.querySelectorAll<HTMLDialogElement>(".modal");
const btnCloses = document.querySelectorAll<HTMLButtonElement>(".modal-close");

worksItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const modal = document.getElementById(`modal-${index}`) as HTMLDialogElement | null;
    modal?.showModal();
  });
});

btnCloses.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest<HTMLDialogElement>(".modal");
    modal?.close();
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e: MouseEvent) => {
    const modalInner = modal.querySelector(".modal-inner");
    if (!modalInner) return;
    const rect = modalInner.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isOutside) {
      modal.close();
    }
  });
});