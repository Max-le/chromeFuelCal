chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == "appendPriceTripNumbers"){
        chrome.tabs.executeScript({
          code: 'INSERT CODE HERE'
        });
      }
   });