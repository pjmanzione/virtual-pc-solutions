// script.js
document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");

  // Remove the class if it already exists to allow the animation to be triggered again
  box.classList.remove("animate");

  // Trigger reflow (re-render) to restart the animation
  void box.offsetWidth;

  // Add the animation class
  box.classList.add("animate");
});
