const slider = document.getElementById("time");
const minutes = document.getElementById("minutes");

slider.oninput = () => {
  minutes.innerText = slider.value + " minutes";
};

function startFocus() {
  alert("Focus Mode Started for " + slider.value + " minutes");
}