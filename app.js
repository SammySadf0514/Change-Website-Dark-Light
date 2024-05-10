const input = document.querySelector("#checkbox");

input.addEventListener("change", () => {
  document.body.style.backgroundColor = input.checked ? "black" : "white";
  document.body.style.color = input.checked ? "white" : "black";
});
