function timer() {
    var h = document.getElementById("h");
    var min = document.getElementById("min");
    var seg = document.getElementById("seg");
  
    var valorH = 0;
    var valorMin = 0;
    var valorSeg = 0;
  
    var cronometro = setInterval(time, 1000);
  
    function time() {
        valorSeg++;
    
        if (valorSeg < 10) {
            seg.innerHTML = "0" + valorSeg;
        } else {
            seg.innerHTML = valorSeg;
        }
    
        if (valorSeg === 59) {
            valorSeg = -1;
        }
    
        if (valorSeg === 0) {
            valorMin++;
    
            if (valorMin < 10) {
            min.innerHTML = "0" + valorMin;
            } else {
            min.innerHTML = valorMin;
            }
        }
    
        if (valorMin === 59) {
            valorMin = -1;
        }
    
        if (valorMin === 0 && valorSeg === 0) {
            valorH++;
    
            if (valorH < 10) {
            h.innerHTML = "0" + valorH;
            } else {
            h.innerHTML = valorH;
            }
        }
    
        if (valorH === 23 && valorMin === 59 && valorSeg === 59) {
            clearInterval(cronometro);
        }
    }
}
  
timer();