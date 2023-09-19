var display = document.getElementById("display");
var result = document.getElementById("result");

function clearDisplay() {
    display.value = "";
    prevResult();
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
    prevResult();
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

function prevResult() {
    if(display.value != "") {
        try {
            const expressao = eval(display.value);

            result.textContent = expressao;
        } catch (error) {

            result.textContent = 'Erro';
        }
    } else {
        result.textContent = "---";
    }
}
prevResult();

function resultado() {
    prevResult();

    if(display.value != "") {
        try {
            display.value = result.textContent;
        } catch (error) {

            display.value = 'Erro';
        }
    }

    result.textContent = "---";
}