function calcc(vix,days,clo){
    var  t = 365/days;
    var sqrt = Math.sqrt(t);
    sqrt = vix/sqrt;
    sqrt = Math.round(sqrt*100)/100;
    //sqrt is % deviation
    var mov = clo*sqrt/100
    mov = Math.round(mov*100)/100;
    document.getElementsByName('display')[0].value = '+/-'+mov  ;
    
}


document.addEventListener("submit", calc)
function calc() {
    var clo = document.getElementById('ci').value;
    var vix  = document.getElementById('iv').value;
    var days = document.getElementById('nod').value;
    calcc(vix, days,clo);
}
