var kms;

let litersPerKm ;
let costLiterOfFuel;
let currency;

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
    // Should be triggered on form submit
    document.getElementById("result").innerHTML = ((litersPerKm)*kms * costLiterOfFuel).toFixed(2) + " "+ currency  ;
  });

  
document.getElementById("messageButton").addEventListener("click", function() {
  console.log("send btn clicked ! 📧")
    //chrome.tabs.query : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
      });
    });
})
