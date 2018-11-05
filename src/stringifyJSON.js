// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === {}) {
    return '{}';
  }
  
  if (obj === undefined) {
    return undefined;
  }
  
  if (typeof obj === "string") {
    return "'" + obj + "'";
  }
  
  if (typeof obj === "boolean") {
    return "'" + obj + "'";
  }

  if (typeof obj === "number") {
    return "'" + obj + "'";
  }

  if (Array.isArray(obj)) {
    var result = "[";
    obj.forEach(function(ele) {
      if (ele === undefined || typeof(ele) === "function") {
        result += "null, ";
      } else {
        result += stringifyJSON(ele) + ", ";
      }
      
    });
    result = result.slice(0, result.length -2);
    result += "]";
    return result; 
  }

  

  
};

/*
input: an object to be stringified
output: a stringified object

psuedocode:
  /if value is {} return '{}'
  /if value is undefined -> return undefined
  /if value is a string -> return the string value contained within an additional set of quotes 
  /if value is a boolean -> return boolean as a string value 
  /if value is a number -> return number written as a string value

  /if value is an array then declare a result variable to build up and start with adding "[ +" 
  /use forEach to itterate over the array
    /if element is undefined, or a function, then build up string by doing result += 'null,'
      /recursively call stringifyJSON on element and change the element accordingly
      /DONT FORGET TO SLICE COMMA OFF LAST ELEMENT

  /if value is an object declare a result variable to build up and start with adding "{ "
  /use for in to iterate over the obj
    / (result += ' "' + key + '" ' + stringifyJSON(obj[key]) + ', ')

notes:
  all other data types
  //make a list of datatypes that stringify changes to null
    ie; functions, undefined, NaN, null
  //figure out what stringify does to each datatype
    ie; number, boolean, string, object, array, function, undefined, null, NaN
  //start with simple cases such as all datatypes that return undefined;
  
  obj/arr
  //Next we will have to deal with the more complex data types such as objects and arrays
    //iterate through array/obj and match them to the conditions which we have declared
  
*/