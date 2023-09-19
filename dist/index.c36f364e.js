"use strict";
const burger_button = document.querySelector(".burger-icon");
const nav = document.querySelector("nav");
const header_content = document.querySelector(".header-content");
burger_button.onclick = ()=>hide(nav, header_content);
function hide(el, el2) {
    if (el.classList.contains("_active")) {
        el.classList.remove("_active");
        el2.classList.remove("_hide");
        burger_button.classList.remove("close");
    } else {
        el.classList.add("_active");
        el2.classList.add("_hide");
        burger_button.classList.add("close");
    }
}

//# sourceMappingURL=index.c36f364e.js.map
