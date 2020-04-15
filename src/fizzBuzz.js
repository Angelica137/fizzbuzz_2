var Fizzbuzz = function(){};

Fizzbuzz.prototype.play = function(number) {
  if (number % 3 === 0 && number % 5 == 0) {
    return 'FizzBuzz'
  };
};