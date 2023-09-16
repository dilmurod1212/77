// import axios from "axios";

// modal
const login = document.querySelector(".login");
const modal = document.querySelector(".modal");
const form = modal.querySelector("form");
const modalBtn = modal.querySelector(".modal-btn");
const loginInput = modal.querySelector("#login-input");
const passwordInput = modal.querySelector("#password-input");
const errorText = modal.querySelector(".error");
const closeBtn = document.querySelector(".fa-close");
const overlay = document.querySelector(".overlay");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("loginVal", passwordVal);
  const formVal = {
    email: loginInput.value.toLowerCase(),
    password: passwordInput.value.toLowerCase(),
  };
  getData(formVal)
    .then((response) => response.json())
    .then((json) => {
      if (json.access_token && errorText.classList.contains("hidden")) {
        localStorage.setItem("token", json.access_token);
        window.location.assign("./admin.html");
      } else {
        // alert("xatolik");
        errorText.classList.remove("hidden");
        setTimeout(() => {
          errorText.classList.add("hidden");
        }, 3000);
      }
    })
    .catch((err) => console.log(err));
});

async function getData(data) {
  console.log(data);

  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // console.log(response, "logger");
  // response.then((res) => console.log(res)).catch((err) => console.log(err));
  return response;
}
// getData()

login.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function showModal() {
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
}

export { closeModal };
