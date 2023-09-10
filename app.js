const category = [
  {
    title: "Для женщин",
    ad: "546",
    image: "./images/category-icons/Component1(2).svg",
  },
  {
    title: "Красота",
    ad: "154",
    image: "./images/category-icons/Component1(3).svg",
  },
  {
    title: "Бытовая техника",
    ad: "57",
    image: "./images/category-icons/Component1(4).svg",
  },
  {
    title: "Для мужчин",
    ad: "43",
    image: "./images/category-icons/Component1(5).svg",
  },
  {
    title: "Здоровье",
    ad: "221",
    image: "./images/category-icons/Component1(4).svg",
  },
  {
    title: "Электроника",
    ad: "102",
    image: "./images/category-icons/Component1(5).svg",
  },
  {
    title: "Детские товары",
    ad: "23",
    image: "./images/category-icons/Component1(6).svg",
  },
  {
    title: "Украшения и бижутерия",
    ad: "324",
    image: "./images/category-icons/Component1(7).svg",
  },
  {
    title: "Домашняя утварь",
    ad: "423",
    image: "./images/category-icons/Component1(8).svg",
  },
  {
    title: "Обувь",
    ad: "354",
    image: "./images/category-icons/Component1(9).svg",
  },
  {
    title: "Канцелярия",
    ad: "94",
    image: "./images/category-icons/Component1(10).svg",
  },
  {
    title: "Спорт и отдых",
    ad: "70",
    image: "./images/category-icons/Component1(11).svg",
  },
  {
    title: "Автотовары",
    ad: "34",
    image: "./images/category-icons/Component1(12).svg",
  },
  {
    title: "Новые легковые автомобили",
    ad: "148",
    image: "./images/category-icons/Component1(20).svg",
  },
  {
    title: "Мототранспорт",
    ad: "47",
    image: "./images/category-icons/Component1(13).svg",
  },
  {
    title: "Дача, сады и огороды",
    ad: "78",
    image: "./images/category-icons/Component1(14).svg",
  },
  {
    title: "Личная гигиена",
    ad: "63",
    image: "./images/category-icons/Component1(15).svg",
  },
  {
    title: "Аксессуарлар",
    ad: "652",
    image: "./images/category-icons/Component1(16).svg",
  },
  {
    title: "Бытовая химия и личная гигиена",
    ad: "746",
    image: "./images/category-icons/Component1(17).svg",
  },
  {
    title: "Строительство и ремонт",
    ad: "125",
    image: "./images/category-icons/Component1(18).svg",
  },
  {
    title: "Сумки и чемоданы",
    ad: "46",
    image: "./images/category-icons/Component1(20).svg",
  },
];
let Cards = [
  {
    image: "./images/card-img/Image(1).png",
    address: "г. Самарканд",
    price: "204 000 000",
    title: "Chevrolet Onix 1.2 Turbo в наличии",
    id: "1",
  },
  {
    image: "./images/card-img/Image(2).png",
    address: "г. Ташкент",
    price: "280 000",
    title: "7Saber Trucker Cap",
    id: "2",
  },
  {
    image: "./images/card-img/Image(3).png",
    address: "г. Ташкент",
    price: "4 820 000",
    title: "Оригинальные кроссовки Nike Air Max Plus",
    id: "3",
  },
  {
    image: "./images/card-img/Image(4).png",
    address: "г. Ташкент",
    price: "4 820 000",
    title: "Оригинальные кроссовки Nike Air Max 97",
    id: "4",
  },
  {
    image: "./images/card-img/Image(5).png",
    address: "г. Ташкент",
    price: "4 500 000",
    title: "Apple Watch Series 8 - USA Non active",
    id: "5",
  },
  {
    image: "./images/card-img/Image(6).png",
    address: "г. Ташкент",
    price: "320 000 000",
    title: "Лучший кроссовер Geely Monjaro Limited Edition",
    id: "6",
  },
  {
    image: "./images/card-img/Image(7).png",
    address: "г. Ташкент",
    price: "5 599 000",
    title: "Стайлер для волос Dyson airwrap complete long",
    id: "7",
  },
  {
    image: "./images/card-img/Image(8).png",
    address: "г. Ташкент",
    price: "280 000",
    title: "7Saber Trucker Cap",
    id: "8",
  },
  {
    image: "./images/card-img/Image(9).png",
    address: "г. Ташкент",
    price: "2 599 000",
    title: "Оригинальные кроссовки Nike Air Max Plus",
    id: "9",
  },
  {
    image: "./images/card-img/Image(10).png",
    address: "г. Ташкент",
    price: "2 599 000",
    title: "Chevrolet Onix 1.2 Turbo в наличии",
    id: "10",
  },
  {
    image: "./images/card-img/Image(11).png",
    address: "г. Ташкент",
    price: "2 599 000",
    title: "Кепки Corneliani Diamond for him edition.",
    id: "11",
  },
  {
    image: "./images/card-img/Image(11).png",
    address: "г. Ташкент",
    price: "2 599 000",
    title: "Кепки Corneliani Diamond for him edition.",
    id: "12",
  },
];
// console.log(product);

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
import { uiRender } from "./product.js";
function cardRender(arr) {
  const card = document.querySelector(".card-items");
  card.innerHTML = arr
    .map((item) => {
      return `
    <div id="card" class="card bg-white rounded-lg shadow overflow-hidden cursor-pointer">
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
  const cardItem = document.querySelectorAll("#card");
  cardItem.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      document.location.assign("./product.html");
      uiRender("hello");
    });
  });
  console.log(cardItem);
}
cardRender(products);
