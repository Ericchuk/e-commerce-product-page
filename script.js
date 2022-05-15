let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let contentBox = document.querySelector(".opac");

function openHamburger(){
    if(contentBox.style.display === "block"){
        contentBox.style.display = "none";
        hamburger.style.display = "block"
    }else{
        contentBox.style.display = "block",
        hamburger.style.display = "none"
    }
}

hamburger.addEventListener("click", openHamburger);
close.addEventListener("click", openHamburger)