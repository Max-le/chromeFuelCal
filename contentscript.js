console.log("Content script - I was injected !")

chrome.runtime.onMessage.addListener(
  function(message) {
    console.table(message);
    if( message["costJourney"] != null) {
      addCostInDOM(message["costJourney"]);
    } else {
      console.warn("costJourney is null")
    }
  });
  
  
  function addCostInDOM(cost) {
    //Code below will edit the DOM of the webpage.
    let span = document.createElement("span");
    span.innerHTML = cost;
    document.getElementsByClassName("section-directions-trip-numbers")[0].appendChild(span);
  }
  
  
  