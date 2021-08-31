const uppercase = require('./exercise1.js');

test('if uppercase function returns uppercase letters', (done) => {
   uppercase('testing', (str) => {
    try {
      expect(str).toBe('TESTING');
      done();
    } catch(err) {
      done(err);
    }
   });
});