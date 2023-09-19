var display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function numbers(number) {
    var valor = number.textContent;
    display.value += valor;
}
