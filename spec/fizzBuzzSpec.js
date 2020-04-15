describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('returns FizzBuzz when given mutiple of 3 & 5', function() {
    it('FizzBuzzes for 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
  });
});

