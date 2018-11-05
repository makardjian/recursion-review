var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName'); //invokes the function we wrote by passing in 'targetClassName' as an arg
      var expectedNodeList = document.getElementsByClassName('targetClassName'); //uses native getElementsByClassName to return target eles
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here? --> these are different objects in memory.
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
