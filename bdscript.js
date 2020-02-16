function calc(){
    var inputcentury = parseInt(document.getElementById("century").value);
    var inputyear = parseInt(document.getElementById("year").value);
    var inputmonth = parseInt(document.getElementById("month").value);
    var inputday = parseInt(document.getElementById("day").value);
    var calcDay = (((inputcentury/4)-2*inputcentury-1)+((5*inputyear/4))+((26*(inputmonth+1)/10))+inputday)%7;
    calcDay = Math.floor(calcDay);



}