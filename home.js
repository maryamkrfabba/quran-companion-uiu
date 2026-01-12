let hasanat = 1250;

setInterval(() => {
  hasanat += 10;
  document.getElementById("hasanatCount").innerText =
    hasanat + " ??";
}, 5000);
function go(page) {
    window.location.href = page;
}