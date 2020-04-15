describe('Fizzbuzz', function() {

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz;
  })
  

  describe('returns FizzBuzz when given mutiple of 3 & 5', function() {
    it('FizzBuzzes for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });

    it('Fizzbuzzes for 60', function() {
      expect(fizzbuzz.play(60)).toEqual('FizzBuzz');
    });
  });

  describe('return Fizz when given multiple of 3', function() {
    it('Fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });

    it('Fizzes for 99', function() {
      expect(fizzbuzz.play(99)).toEqual('Fizz');
    });
  });

  describe('return Buzz when given multiple of 5', function() {
    it('Buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
  });
});

