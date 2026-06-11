const closeBtn = document.querySelector(".closeButt");
const dropdownBtn = document.querySelector(".dropdown-btn");
const header = document.querySelector("header");

closeBtn.addEventListener("click", ()=> {
    header.style.top = "-140px";
    dropdownBtn.style.display = "block";
});

dropdownBtn.addEventListener("click", ()=> {
    header.style.top = "0";
    dropdownBtn.style.display = "none";
})

