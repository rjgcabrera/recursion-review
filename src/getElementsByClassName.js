// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElem = document.body) {
  // vars
  var elemArr = [];
  
  // step into the DOM tree
  if (currentElem.hasChildNodes()) {
    for (var i = 0; i < currentElem.childNodes.length; i++) {
      if (currentElem.childNodes[i].nodeType === 1) { // check if child is and element
        elemArr = elemArr.concat(getElementsByClassName(className, currentElem.childNodes[i]));
      }
    }
  }

  // check for the class
  if (currentElem.classList !== undefined) {
    if (currentElem.classList.contains(className)) {
      elemArr.unshift(currentElem);
    }
  }

  return elemArr;

};
