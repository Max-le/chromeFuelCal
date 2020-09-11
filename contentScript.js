console.log("Content script - I was injected !")


   function getTripDistanceFromDOM() {
    let divTripDistance = document.getElementsByClassName("section-directions-trip-distance")[0]; 
    if (divTripDistance == null){
      console.warn("coudln't get element in DOM")
    }
    for (var i = 0; i < divTripDistance.children.length; i++) {
      child = divTripDistance.children[i];
      if (child.innerHTML.includes("km")){ console.log(child.innerHTML) }
    }  
  }
  