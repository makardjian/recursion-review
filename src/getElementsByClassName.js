// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var classes = [];

  var getClasses = function(node) {
    if (node.classList && node.classList.contains(className)) {
      classes.push(node)
    }
    
    if (node.childNodes) {
      node.childNodes.forEach(function(ele) {
      getClasses(ele)})
    }
  }
  
  getClasses(document.body);
  return classes;
};

/*

input: a target class name 
output: returns an array like object

pseudocode:
  /declare a a variable called 'classes' to hold the nodes that contain the target className
  
  /declare a helper function called getClasses which takes in a node
    /if the node has a classList and the target className exists as a class on the node, then push the entire node into 'classes' array.
    
    /else if the node has childNodes, then:
        /call the inner function on each childNode using forEach. 
    
  /invoke the inner function getClasses(node)

  /return classes array. 


*/

