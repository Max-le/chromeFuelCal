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


//Test send message button
document.getElementById("messageButton").addEventListener("click", function() {
    //chrome.tabs.query : Gets all tabs that have the specified properties, or all tabs if no properties are specified.
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log("Sending message 📧");
      chrome.tabs.sendMessage(tabs[0].id, {request: "SendMeTheTripDistance"}, function(response) {
        console.log(response.distance);
        UpdateElementOnPopup(distance);
      });
    });
})

function UpdateElementOnPopup(distance) {
  var distanceSpan = document.createElement("span");
  distanceSpan.innerHTML = distance; 
  document.getElementById("distance").appendChild(distanceSpan);
}