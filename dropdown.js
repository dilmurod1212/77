const dropdown = document.querySelectorAll(".dropdown"),
  selected = document.querySelector(".selected"),
  btn = document.querySelector(".caret i");

dropdown.forEach((item) => {
  const select = item.querySelector(".select");
  const menu = item.querySelector(".menu");
  const options = item.querySelectorAll(".menu li");
  const selected = item.querySelector(".selected");
  const btn = item.querySelector(".caret i");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    btn.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  const flag = item.querySelector(".lan-flag");
  options.forEach((item) => {
    item.addEventListener("click", () => {
      selected.innerText = item.innerText;
      if (item.innerText === "UZ") {
        flag ? flag.setAttribute("src", "images/Languageuzb.svg") : flag;
      } else {
        flag ? flag.setAttribute("src", "images/Languageru.svg") : flag;
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
});
