require('es6-promise');

first().then(second).then(console.log);

// or
// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val)) {
//  return second(val);
// });

//secondPromise.then(console.log);
