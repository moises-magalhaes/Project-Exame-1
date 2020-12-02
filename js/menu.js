let toggleNavStatus = false;

let toggleNav = function() {
    let getNav = document.querySelector(".nav-main");
    let getMenu = document.querySelector(".menu");
    let getMenuLinks = document.querySelectorAll(".menu a");

    if (toggleNavStatus === false){
        getMenu.style.visibility = "visible";
        getNav.style.backgroundColor = "#000630";
        getNav.style.position = "fixed";

        let arrayLength = getMenuLinks;

        for (let i=0; i < arrayLength.length; i++){
            getMenuLinks[i].style.opacity = "1";
        }
        
        toggleNavStatus = true;

    }   else if (toggleNavStatus === true) {
        let arrayLength = getMenuLinks;

        for (let i=0; i < arrayLength.length; i++){
            getMenuLinks[i].style.opacity = "0";
        }

        getMenu.style.visibility = "hidden";
        getNav.style.background = "none";
        getNav.style.position = "relative";

        toggleNavStatus = false;
    }
}