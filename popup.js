var kms;

let litersPerKm ;
let costLiterOfFuel;
let currency;

var costJourney; 

//Get user settings from storage
chrome.storage.sync.get("currency", function(data){
  currency = data.currency;
})
chrome.storage.sync.get("litersPerKm", function(data){
  litersPerKm = data.litersPerKm;
})
chrome.storage.sync.get("costLiterOfFuel", function(data){
  costLiterOfFuel = data.costLiterOfFuel;
})


//Form handler
document.getElementById('form').addEventListener("submit",function(e) {
    e.preventDefault(); // before the code
    /* do what you want with the form */
    kms = document.forms["form"]["distance"].value;
    console.log("Got values :", kms, " ", litersPerKm, " ",costLiterOfFuel )
    costJourney = ((litersPerKm)*kms * costLiterOfFuel).toFixed(2) + " "+ currency;
    document.getElementById("result").innerHTML =  costJourney ;
  });

//Test send message button
document.getElementById("messageButton").addEventListener("click", function() {
  console.log("send btn clicked ! 📧")
    //chrome.tabs.query : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var message = {costJourney: "123"}
      message["costJourney"] = costJourney;
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
})
