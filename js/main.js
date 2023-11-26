console.log("test");

const openItemsBtn = document.getElementById("open__items-btn");

const navItems = document.getElementById("nav__items");

document.onclick = function (e) {
  if (e.target.id !== "nav__items" && e.target.id !== "open__items-btn") {
    openItemsBtn.classList.remove("active");
    navItems.classList.remove("active");
  }
};

openItemsBtn.onclick = function () {
  openItemsBtn.classList.toggle("active");
  navItems.classList.toggle("active");
};
