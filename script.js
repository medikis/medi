let plusBtn;
let buttonsPlus;

window.addEventListener("load", ()=> {
    plusBtn = document.getElementById("plus-button");
    plusBtn.addEventListener("click", plusBtnManager);
    buttonsPlus = document.getElementsByClassName("plus-button-spec");
    getTimeOfDay();
    document.getElementById("menu-button").addEventListener("click", openSideMenu);
    document.getElementById("close-menu-button").addEventListener("click", closeSideMenu);
});

const plusBtnManager = () => {
    plusBtn.removeEventListener("click", plusBtnManager);
    document.getElementById("plus-text").style.transform = "rotate(45deg)";
    plusBtn.style.width = "195px";
    document.getElementById("blur-div").style.visibility = "visible";
    document.getElementById("blur-div").style.opacity = "1";
    for (i=0; i < buttonsPlus.length; i++) {
        buttonsPlus[i].style.opacity = "1";
        buttonsPlus[i].style.transform = "scale(1)";
    };
    document.getElementById("plus-btn-text").style.opacity = "1";
    document.getElementById("plus-btn-text").style.transform = "translateX(0px)";
    plusBtn.addEventListener("click", closePlusBtn);
}

const closePlusBtn = () => {
    plusBtn.removeEventListener("click", closePlusBtn);
    document.getElementById("plus-text").style.transform = "rotate(0deg)";
    plusBtn.style.width = "64px";
    document.getElementById("blur-div").style.visibility = "hidden";
    document.getElementById("blur-div").style.opacity = "0";
    for (i=0; i < buttonsPlus.length; i++) {
        buttonsPlus[i].style.opacity = "0";
        buttonsPlus[i].style.transform = "scale(0)";
    };
    document.getElementById("plus-btn-text").style.opacity = "0";
    document.getElementById("plus-btn-text").style.transform = "translateX(-7px)";
    plusBtn.addEventListener("click", plusBtnManager);
};

const getTimeOfDay = () => {
    let now = new Date();
    let hours = now.getHours();
    if (hours > 5 && hours < 12) {
        document.getElementById("time-text-name").innerText = "בוקר טוב לירז";
    } else if (hours > 12 && hours < 17) {
        document.getElementById("time-text-name").innerText = "צהריים טובים לירז";
    } else {
        document.getElementById("time-text-name").innerText = "ערב טוב לירז";
    };
};


const openSideMenu = () => {
    document.getElementById("side-menu").style.transform = "translateX(0)";
    document.getElementById("side-menu").style.visibility = "visible";
    document.getElementById("blur-div").style.visibility = "visible";
    document.getElementById("blur-div").style.opacity = "1";
};

const closeSideMenu = () => {
    document.getElementById("side-menu").style.transform = "translateX(100%)"
    document.getElementById("side-menu").style.visibility = "hidden";
    document.getElementById("blur-div").style.visibility = "hidden";
    document.getElementById("blur-div").style.opacity = "0";
};