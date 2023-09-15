document.querySelector(".exitBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.assign("./index.html");
  console.log("logger");
});
