// modal
const login = document.querySelector(".login");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-close");
const overlay = document.querySelector(".overlay");

login.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function showModal() {
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
}
