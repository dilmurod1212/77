import { categoryData } from "./constants/category.js";
import Cards from "./constants/cards.js";
// console.log(product);
const category = categoryData;
const categories = document.querySelector(".categories");
category.forEach((item) => {
  categories.innerHTML += `
  <div class="relative category">
            <div          
              class="  p-4 border border-[
                #EAEDF0] shadow-md hover:shadow-lg hover:cursor-pointer  transition-all rounded-lg my-auto"
            >
                <img
                src="${item.image}"
                alt="male-icon"
                class="icon absolute rounded-lg flex items-center justify-center p-2 border border-[
                  #EAEDF0] bg-[#F0F3F7] shadow-md left-0 translate-x-[-50%] top-[50%] translate-y-[-50%]"
              />
              <div class="flex justify-between items-center ">
                <div class="category__info pl-8">
                  <h3 class="font-bold text-xl">${item.title}</h3>
                  <p>${item.ad} объявлений</p>
                </div>
                <button><i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            <ul class="absolute w-[100%]  bg-red-300 containerr my-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 p-4 border border-[#EAEDF0] rounded-md category-dropdown hidden">
            <li class="flex justify-between cursor-pointer items-center"><span>Смартфоны</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Фитнес браслеты</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Аксессуары для смартфонов и телефонов</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Смарт-часы</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Запчасти для смартфонов</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Ремешки для часов и смарт-часов</span><i class="fa-solid fa-angle-right"></i></li>
            <li class="flex justify-between cursor-pointer items-center "><span>Аксессуары для смартфонов и телефонов</span><i class="fa-solid fa-angle-right"></i></li>      
            </ul>
          </div>
  `;
});
const categoryDropdown = document.querySelectorAll(".category-dropdown");
// console.log(categoryDropdown);
const categoryItem = document.querySelectorAll(".category");
categoryItem.forEach((item) => {
  const arrowIcon = item.querySelector("i");
  const dropdown = item.querySelector(".category-dropdown");
  item.addEventListener("click", (e) => {
    arrowIcon.classList.toggle("caret-rotate");
    // dropdown.classList.toggle("hidden");
  });
});
// modal
const login = document.querySelector(".login");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".fa-close");
const overlay = document.querySelector(".overlay");
const orderBtn = document.querySelector(".order-btn");
const logModal = document.querySelector(".modal-content");
const orderModal = document.querySelector(".modal-order");

login.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
orderBtn.addEventListener("click", () => {
  logModal.classList.add("hidden");
  orderModal.classList.remove("hidden");
});

function showModal() {
  modal.classList.remove("hidden");
  window.scrollY(none);
}
function closeModal() {
  modal.classList.add("hidden");
}

// dropdown

// search panel
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  window.location.assign("./search.html");
});
const products = [...new Set(Cards.map((item) => item))];

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const newArr = products.filter((item) =>
    item.title.toLowerCase().includes(value)
  );
  if (newArr.length) {
    cardRender(newArr);
  } else {
    const card = document.querySelector(".card-items");
    card.innerHTML = `<h1 class="text-2xl text-blue-400 w-[200%] font-bold">Bunday mahsulot mavjud emas😢</h1>`;
  }
});

// card render
function cardRender(arr) {
  const card = document.querySelector(".card-items");
  card.innerHTML = arr
    .map((item) => {
      return `
    <div id="${item.id}" class="card bg-white rounded-lg shadow overflow-hidden cursor-pointer">
    <img src="${item.image}" alt="" class="w-full object-cover" />
    <div class="content p-4">
      <span class="py-1 px-2 bg-gray-200 rounded-lg text-xs my-4">${item.address}</span>
      <h5
        class="my-2 text-xl font-bold tracking-tight text-[#388FF3] max-md:text-base"
      >
        ${item.title}
      </h5>
      <p class="my-2 opacity-50 text-sm">Вчера, 19:20</p>
      <a
        href="tel:+998 71 200 70 07"
        class="text-lg font-bold opacity-60 max-md:text-sm"
        >+998 71 200 70 07</a
      >
      <p class="text-black font-bold text-2xl max-md:text-xl">
        ${item.price} <span class="text-[#388FF3] text-xs">UZS</span>
      </p>
    </div>
  </div>
    `;
    })
    .join("");
  const cardItem = document.querySelectorAll(".card");
  cardItem.forEach((item) => {
    item.addEventListener("click", () => {
      document.location.assign("./product.html");
      localStorage.setItem("id", item.id);
      uiRender("hello");
    });
  });
}
cardRender(products);
