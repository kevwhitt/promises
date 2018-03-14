var promise = Promise.reject(new Error("THERE IN AN ERROR!")
).then(null, function(error) {
  console.log(error.message);
}).catch(function(error) {
  console.log(error.message);
});