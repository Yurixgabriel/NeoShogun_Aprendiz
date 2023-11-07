const slide = document.getElementById("S1");
var intervalID = setInterval(sliderAutomatic, 3000);

function prev() {
    if(slide.style.marginLeft == "0%") {
        slide.style.marginLeft = "-400%";
    } else if(slide.style.marginLeft == "-400%") {
        slide.style.marginLeft = "-300%";
    } else if(slide.style.marginLeft == "-300%") {
        slide.style.marginLeft = "-200%";
    } else if(slide.style.marginLeft == "-200%") {
        slide.style.marginLeft = "-100%";
    } else if(slide.style.marginLeft == "-100%") {
        slide.style.marginLeft = "0%";
    }

    clearInterval(intervalID);
    intervalID = setInterval(sliderAutomatic, 5000);
}

function next() {
    if(slide.style.marginLeft == "0%") {
        slide.style.marginLeft = "-100%";
    } else if(slide.style.marginLeft == "-100%") {
        slide.style.marginLeft = "-200%";
    } else if(slide.style.marginLeft == "-200%") {
        slide.style.marginLeft = "-300%";
    } else if(slide.style.marginLeft == "-300%") {
        slide.style.marginLeft = "-400%";
    } else if(slide.style.marginLeft == "-400%") {
        slide.style.marginLeft = "0%";
    }

    clearInterval(intervalID);
    intervalID = setInterval(sliderAutomatic, 5000);
}

function sliderAutomatic() {
    if(slide.style.marginLeft == "0%") {
    slide.style.marginLeft = "-100%";
    } else {
    if(slide.style.marginLeft == "-100%") {
    slide.style.marginLeft = "-200%";
    } else {
    if(slide.style.marginLeft == "-200%") {
    slide.style.marginLeft = "-300%";
    } else {
    if(slide.style.marginLeft == "-300%") {
    slide.style.marginLeft = "-400%";
    } else {
    if(slide.style.marginLeft == "-400%") {
    slide.style.marginLeft = "0%";
    }}}}}
}