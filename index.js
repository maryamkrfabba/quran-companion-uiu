setTimeout(() => {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("welcome").classList.remove("hidden");
}, 2000);

function goTo(page) {
  window.location.href = page;
}