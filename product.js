import Cards from "./constants/cards.js";
const products = Cards;
const product = document.querySelector(".card");

function uiRender(id) {
  products.forEach((el) => {
    if (el.id == id) {
      product.innerHTML = `
      <div class="card bg-white p-4  rounded-lg overflow-hidden" id="${el.id}">
      <img
        src="${el.image}"
        alt=""
        class="w-full object-cover rounded-lg mb-4"
      />
      <div class="content">
        
        
        <h2
          class="my-2 text-3xl font-bold tracking-tight text-[#388FF3] max-md:text-xl"
        >
        ${el.title}
        </h2>
        <div class="flex gap-4">
          <span class="py-1 px-2 bg-gray-200 rounded-lg text-xs my-4"
          >Вчера, 19:20</span>
          <span? class="py-1 px-2 bg-gray-200 rounded-lg text-xs my-4"
          >${el.address}</span>
        </div>
        <div class="flex justify-between items-center max-md:flex-col max-md:items-start gap-2">
          <p class="text-black font-bold text-3xl max-md:text-xl">
          ${el.price} <span class="text-[#388FF3] text-xl">UZS</span>
          </p>
          <a
            href="tel:+998 71 200 70 07"
            class="text-lg font-bold  max-md:text-sm py-2 px-4 bg-[#388FF3] hover:bg-[#327dd8] transition text-white rounded-md max-md:w-full max-md:text-center"
            >+998 71 200 70 07</a
          >
          
        </div>
      </div>
    </div>
  `;
    }
  });
}
uiRender(localStorage.getItem("id"));
