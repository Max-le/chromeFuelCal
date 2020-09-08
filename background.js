chrome.runtime.onInstalled.addListener(function() {
console.log("Thanks for installing Fuel Calculator.")


//Note : the extension will need permission to access the declarativeContent API in its manifest.
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
  //Web pages where the user can interact with the extension
  //The icon will be in color instead of grey on those pages.
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {urlContains: 'www.google.com/maps'},
    }), 
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'www.openstreetmap.org'},
      }),

    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

});
