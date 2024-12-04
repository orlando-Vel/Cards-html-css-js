const date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDay();
console.log(day, month, year);

const currentDay = new Date().toLocaleDateString();
const dates = document.querySelectorAll(".date");
dates.forEach((fecha) => {
  fecha.textContent = currentDay;
});

const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.classList.add(`item-${index + 1}`);
});
