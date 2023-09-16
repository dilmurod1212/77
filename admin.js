import { closeModal } from "./modal.js";
document.querySelector(".exitBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.assign("./index.html");
  console.log("logger");
});

const form = document.querySelector("form"),
  name = form.querySelector("#name"),
  address = form.querySelector("#address"),
  phone = form.querySelector("#phone"),
  price = form.querySelector("#price");

form.addEventListener("submit", () => {
  const newProduct = {
    image: "https://picsum.photos/200/300",
    title: name.value,
    price: price.value,
    address: address.value,
    phone: phone.value,
  };
  addProduct(newProduct);
});
function addProduct(product) {
  console.log(product);
  products.push(product);
  cardRender(products);
  closeModal();
}

const card = document.querySelector(".cards");

import Cards from "./constants/cards.js";
let products = [...new Set(Cards.map((item) => item))];

function cardRender(arr) {
  card.innerHTML = arr
    .map((item) => {
      return `
    <div id="${item.id}" class="card bg-white rounded-lg shadow overflow-hidden cursor-pointer ">
    <img src="${item.image}" alt="" class="w-full object-cover" />
    <div class="content p-4">
      <span class="py-1 px-2 bg-gray-200 rounded-lg text-xs my-4">${item.address}</span>
      <h5
        class="my-2 text-xl font-bold tracking-tight text-[#388FF3] max-md:text-base line-clamp"
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

// cardRender(products);
cardRender(products);
