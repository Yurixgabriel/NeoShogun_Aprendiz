var slide = document.querySelectorAll(".slide");
var desk = document.querySelectorAll(".desk");
var intervalID = setInterval(sliderAutomatic, 4000);
var S = 0;
var D = 0;

function prev() {
    if(S == 0) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            slide[i].style.display="none";
            desk[i].style.display="none";
        }
        S = slide.length - 1;
        slide[S].style.display="block";
        desk[S].style.display="flex";
    } else if(S == 4) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = slide.length - 2;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 3) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = slide.length - 3;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 2) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = slide.length - 4;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 1) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = 0;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    }

    intervalID = setInterval(sliderAutomatic, 6000);
}

function next() {
    if(S == 0) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 1) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 2) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 3) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 4) {
        clearInterval(intervalID);
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = 0;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    }

    intervalID = setInterval(sliderAutomatic, 6000);
}

function sliderAutomatic() {
    if(S == 0) {
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 1) {
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 2) {
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 3) {
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S++;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    } else if(S == 4) {
        for (let i=0; i < slide.length; i++) {
            desk[i].style.display="none";
            slide[i].style.display="none";
        }
        S = 0;
        desk[S].style.display="flex";
        slide[S].style.display="block";
    }

    clearInterval(intervalID);
    intervalID = setInterval(sliderAutomatic, 4000);
}