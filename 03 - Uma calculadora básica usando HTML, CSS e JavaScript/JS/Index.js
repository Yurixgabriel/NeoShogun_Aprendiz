var display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function dellete() {
    if (display.value != "")
    {
        if(display.value == "0") {
            clearDisplay();
        }else{
            display.value = display.value.substring(0,display.value.length-1);
        };
    };
}

function elementos(elemento) {
    var valor = elemento.textContent;
    display.value += valor;
}
