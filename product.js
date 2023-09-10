const product = document.querySelector(".product");
export let obj = null;
// uiRender({
//   image: "./images/card-img/Image(1).png",
//   address: "г. Самарканд",
//   price: "204 000 000",
//   title: "Chevrolet Onix 1.2 Turbo в наличии",
//   id: "1",
// });
console.log(product);
function uiRender(item) {
  console.log(item);
  product
    ? (product.innerHTML += `
  <div class="card bg-white rounded-lg  overflow-hidden">
  <img src="${item.image}" alt="" class="w-full object-cover rounded-lg mb-4" />
  <div class="content ">
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
  `)
    : product;
}

export { uiRender };
