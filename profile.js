const darkToggle = document.getElementById("darkMode");

darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    document.body.style.background = "#1e1e1e";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#f5f2ee";
    document.body.style.color = "black";
  }
});