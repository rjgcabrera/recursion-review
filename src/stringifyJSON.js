// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // vars
  var objType = typeof obj;

  // collections (arrays & objects)
  if (objType === 'object') {
    if (obj === null) {
      return 'null';
    }
    else if (Array.isArray(obj)) {
      var arrayStr = '[';
      for (var i = 0; i < obj.length; i++) {
        arrayStr += stringifyJSON(obj[i]) + 
                     (i === obj.length - 1 ? '' : ',');
      }
      return arrayStr + ']';
    }
    else {
      var objStr = '{';
      var keyArr = Object.keys(obj);
      var propStr = '';
      for (var i = 0; i < keyArr.length; i++) {
        propStr = stringifyJSON(obj[keyArr[i]]);
        if (propStr !== '') {
          objStr += '\"' + keyArr[i] + '\":' + propStr +
                     (i === keyArr.length - 1 ? '' : ',');
        }
      }
      return objStr + '}';
    }
  }
  
  // non-collection objs / base case
  if (objType === 'number' ||
      objType === 'boolean') {
    return obj.toString();
  }
  else if (objType === 'string') {
    return '\"' + obj + '\"';
  }

  return '';

};
