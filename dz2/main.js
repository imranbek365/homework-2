const btn = document.getElementById("btn");
const root = document.getElementById("root");

btn.addEventListener("click", () => {
  const msg = document.createElement("p");
  msg.textContent = "Новое сообщение!";
  msg.classList.add("new-message"); 
  root.appendChild(msg);
});
