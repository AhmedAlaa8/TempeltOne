let icon = document.querySelector(".icon");
let span = document.querySelectorAll(".icon span");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let frist = document.querySelector(".header .links .icon span:first-child");
let last = document.querySelector(".header .links .icon span:last-child");




icon.addEventListener("click", function () {
    if (document.querySelector("ul").className == "") {
        document.querySelector("ul").classList.add('clicked');
        document.querySelector(".clicked").style.display = "block"
        a.classList.add("s")
        b.classList.add("ss")
        c.classList.add("sss")
        frist.style.backgroundColor = "#a62525"
        last.style.backgroundColor = "#a62525"


    } else {
        document.querySelector(".clicked").style.display = "none"
        document.querySelector("ul").classList.remove('clicked');
        a.classList.remove("s")
        b.classList.remove("ss")
        c.classList.remove("sss")
        frist.style.backgroundColor = "var(--second-color)"
        last.style.backgroundColor = "var(--second-color)"
    }
})




