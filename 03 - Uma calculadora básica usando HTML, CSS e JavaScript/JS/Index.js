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
    var valor = elemento.value;
    display.value += valor;
}

function parenteses() {
    var carac = display.value.length;
    var a = 0;
    var f = 0;

    for(var i=0; i < carac; i++) {
        
        if(display.value[i] === "(") {
            a++;
        } else {
            if(display.value[i] === ")") {
                f++;
            }
        }
    }

    if(a == 0 || a == f) {
        display.value += "(";
    } else {
        if(a == 1 || a > f) {
            display.value += ")";
        }
    }
}