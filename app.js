import { categoryData } from "./constants/category.js";
import Cards from "./constants/cards.js";
// console.log(product);
const category = categoryData;
const categories = document.querySelector(".categories");
category.forEach((item) => {
  categories.innerHTML += `
  <div
            
  class="category relative p-4 border border-gray-400 rounded-lg my-auto"
>
  <div>
    <img
      src="${item.image}"
      alt="male-icon"
      class="icon absolute rounded-lg flex items-center justify-center p-2 border border-gray-400 bg-[#F0F3F7] left-0 translate-x-[-50%] top-[50%] translate-y-[-50%]"
    />
  </div>
  <div class="flex justify-between items-center ">
    <div class="category__info pl-8">
      <h3 class="font-bold text-xl">${item.title}</h3>
      <p>${item.ad} объявлений</p>
    </div>
    <button><i class="fa-solid fa-angle-right"></i></button>
  </div>
</div>
  `;
});

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

// dropdown

// search panel
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
