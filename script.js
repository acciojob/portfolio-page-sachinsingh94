//your code here
// Simple interactivity: highlight project when clicked
document.querySelectorAll("#projects li").forEach(item => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = "#e0f7fa";
    item.style.cursor = "pointer";
  });
});
