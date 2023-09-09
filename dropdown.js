const dropdown = document.querySelector(".dropdown"),
  menu = document.querySelector(".menu"),
  select = document.querySelector(".select"),
  selected = document.querySelector(".selected"),
  options = document.querySelectorAll(".menu li"),
  btn = document.querySelector(".caret i");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  btn.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});
const flag = document.querySelector(".lan-flag");
options.forEach((item) => {
  item.addEventListener("click", () => {
    selected.innerText = item.innerText;
    if (item.innerText === "UZ") {
      flag.setAttribute("src", "images/Languageuzb.svg");
      console.log(flag);
    } else {
      flag.setAttribute("src", "images/Languageru.svg");
    }
    btn.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");
    select.classList.remove("select-clicked");

    options.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
