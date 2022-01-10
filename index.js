function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction()  {
      return function hiFunction() {
          console.log('hi')
      }
  }
  function returnsAnAnonymousFunction() {
      return () => console.log('anon')
  }