'use strict';

const items = document.querySelectorAll(".item");
for (let i of items) {
  i.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      for (let i of items) {
        i.classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}