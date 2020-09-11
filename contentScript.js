console.log("Content script - I was injected !")


//Wait for the popup to ask for the distance
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    console.log('message received 📧')
    if (message.request == "SendMeTheTripDistance")
      sendResponse({distance: getTripDistanceFromDOM()});
  });

   function getTripDistanceFromDOM() {
    let divTripDistance = document.getElementsByClassName("section-directions-trip-distance")[0]; 
    if (divTripDistance == null){
      console.warn("Couldn't get element in DOM ! You may need to wait a bit before calling this function.")
    }
    for (var i = 0; i < divTripDistance.children.length; i++) {
      child = divTripDistance.children[i];
      if (child.innerHTML.includes("km")){ 
        return child.innerHTML;
       }
    }
  }
  