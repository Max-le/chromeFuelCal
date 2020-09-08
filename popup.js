var kms;
 let currency = " €";
 let litersPer100Km = 5.5 ;
 let CostFuelPerLiter = 1.35 ;


//Form handler
document.getElementById('form').addEventListener("submit",function(e) {
    e.preventDefault(); // before the code
    /* do what you want with the form */
    kms = document.forms["form"]["distance"].value;
    console.log("Got value ", kms)
    // Should be triggered on form submit
    document.getElementById("result").innerHTML = ((litersPer100Km/100)*kms * CostFuelPerLiter) + currency  ;
  });