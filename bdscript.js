function calc(){
    var inputcentury = parseInt(document.getElementById("century").value);
    var inputyear = parseInt(document.getElementById("year").value);
    var inputmonth = parseInt(document.getElementById("month").value);
    var inputday = parseInt(document.getElementById("day").value);
    var calcDay = (((inputcentury/4)-2*inputcentury-1)+((5*inputyear/4))+((26*(inputmonth+1)/10))+inputday)%7;
    calcDay = Math.floor(calcDay);

    var male = document.getElementById("m").checked;
        var female = document.getElementById("f").checked;
     
        male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
         
     if ((inputmonth > 12) || (inputmonth < 1))
      {
            alert("Input correct value for month");
        } 

       else if ((inputday > 31) || (inputday < 1)) {
         alert("Input correct value for day");
        }

        else if (document.getElementById("m").checked) {
            document.getElementById("answer").value = ("Your Akan name is " + male[calcDay]);
            // alert(male[calcDay]);
           }
           else if (document.getElementById("f").checked) {
            document.getElementById("answer").value = ("Your Akan name is " + female[calcDay]);
            // alert(female[calcDay]); 
           }
           else {
            alert("Please select your gender");
            };    
       




}