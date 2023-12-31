import Cards from "./constants/cards.js";
let products = [...new Set(Cards.map((item) => item))];
const card = document.querySelector(".cards");
const cardLength = document.querySelector(".card-length");
const listIcon = document.querySelector(".list-icon");
const gridIcon = document.querySelector(".grid-icon");
cardLength.textContent = `Мы нашли ${products.length} объявлений`;

const regions = document.querySelectorAll(".region-filter li");
regions.forEach((region) => {
  region.addEventListener("click", (e) => {
    products = [...new Set(Cards.map((item) => item))];
    const address = e.target.dataset.address;
    const filtredArr = products.filter(
      (item) => item.address.toLowerCase() == address.toLowerCase()
    );
    if (filtredArr.length) {
      renderFunc(filtredArr);
      products = filtredArr;
      cardLength.textContent = `Мы нашли ${filtredArr.length} объявлений`;
    } else {
      renderFunc(products);
      cardLength.textContent = `Мы нашли ${products.length} объявлений`;
    }
  });
});

if (listIcon) {
  listIcon.addEventListener("click", () => {
    gridIcon.classList.remove("active");
    listIcon.classList.add("active");
    listRender(products);

    console.log("list click");
  });
}
if (gridIcon) {
  gridIcon.addEventListener("click", () => {
    gridIcon.classList.add("active");
    listIcon.classList.remove("active");
    console.log("grid click");
    gridRender(products);
  });
} else {
  gridRender(products);
}
function renderFunc(products) {
  if (listIcon && listIcon.classList.contains("active")) {
    listRender(products);
  } else {
    gridRender(products);
  }
}
function gridRender(arr) {
  card.classList.add("grid-cols-3");
  card.classList.remove("grid-cols-1");
  card.classList.add("max-md:grid-cols-2");
  card.classList.remove("max-md:grid-cols-1");

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
function listRender(arr) {
  card.classList.add("grid-cols-1");
  card.classList.remove("grid-cols-3");
  card.classList.add("max-md:grid-cols-1");
  card.classList.remove("max-md:grid-cols-2");

  card.innerHTML = arr
    .map((item) => {
      return `
      <div
      id="${item.id}"
      class="card bg-white rounded-lg shadow cursor-pointer grid grid-cols-7 overflow-hidden "
    >
        
        <div class="w-full  col-span-2 ">
        <img
        src="${item.image}"
        alt=""
        class="h-full object-cover"
      />
        </div>
      
      <div
        class="content p-4 max-md:p-2 col-span-5 flex flex-col justify-between"
      >
        <div
          class="flex items-center justify-between flex-row-reverse max-md:flex-col max-md:justify-start max-md:items-start"
        >
          <span class="py-1 px-2 bg-gray-200 rounded-lg text-xs"
            >${item.address}</span
          >
          <h5
            class="my-1 text-xl font-bold tracking-tight text-[#388FF3] max-md:text-base line-clamp"
          >
            ${item.title}
          </h5>
        </div>
        <div
          class="flex items-center justify-between flex-row-reverse"
        >
          <p class=" opacity-50 text-sm">Вчера, 19:20</p>
          <a
            href="tel:+998 71 200 70 07"
            class="text-lg font-bold opacity-60 max-md:text-sm"
            >+998 71 200 70 07</a
          >
        </div>
        <p class="text-black font-bold text-2xl max-md:text-xl">
          ${item.price}
          <span class="text-[#388FF3] text-xs">UZS</span>
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
renderFunc(products);
