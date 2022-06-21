const ham = document.querySelector(".hamburger");
const nm = document.querySelector(".nav-menur");
// const ln = document.querySelector(".nav-linkr");

ham.addEventListener("click", () =>{
    ham.classList.toggle("active");
    nm.classList.toggle("active");
})

const loader = document.getElementById("pre-loader");

window.addEventListener("load", () => {
    loader.style.display = "none";
})

// ln.addEventListener("click", () => {
//     nm.style.display = "none"
// })