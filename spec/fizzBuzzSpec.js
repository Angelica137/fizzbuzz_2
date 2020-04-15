describe('Fizzbuzz', function() {

  var fizzbuzz;

  describe('returns FizzBuzz when given mutiple of 3 & 5', function() {
    it('FizzBuzzes for 15', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });

    it('Fizzbuzzes for 60', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.play(60)).toEqual('FizzBuzz');
    });
  });

  describe('return Fizz when given multiple of 3', function() {
    it('Fizzes for 3', function() {
    fizzbuzz = new Fizzbuzz();
    expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
  });
});

