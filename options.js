var userCurrencyInput = document.getElementById("userCurrency");
var userLiterPerKmInput= document.getElementById("userLitersPerKm");
var userCostLiterPerFuelInput = document.getElementById("userCostLiterOfFuel");


function get_user_options(){
    console.log("Options function")
    chrome.storage.sync.get("currency", function(data){
        userCurrencyInput.value = data.currency;
    console.log(data.currency);
      })
      chrome.storage.sync.get("litersPerKm", function(data){
        userLiterPerKmInput.value = data.litersPerKm;
        console.log(data.litersPerKm);

      })
      chrome.storage.sync.get("costLiterOfFuel", function(data){
        userCostLiterPerFuelInput.value = data.costLiterOfFuel;
        console.log(data.costLiterOfFuel);

      })
}

//Listener for Save Button
document.getElementById("saveButton").addEventListener("click", set_user_options)


function set_user_options(){ 
    chrome.storage.sync.set({
        currency: userCurrencyInput.value,
        litersPerKm: userLiterPerKmInput.value, 
        costLiterOfFuel:userCostLiterPerFuelInput.value} , function() {
            alert("Values updated.");
      });
}



//Get executed when Options page opened/refreshed
get_user_options()