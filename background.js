chrome.runtime.onInstalled.addListener(function() {
console.log("Thanks for installing Fuel Calculator.")

//The extension will need permission to access the declarativeContent API in its manifest.
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      //Web pages where the user can interact with the extension - The icon will be in color instead of grey.
      pageUrl: {hostEquals: 'www.google.com'},
      //TODO : restrict interactivty to google.com/maps
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

});
