// web-worker.js
// Example web worker for heavy computations
self.onmessage = function(e) {
  // e.data should contain the input for computation
  const result = heavyComputation(e.data);
  self.postMessage(result);
};

function heavyComputation(data) {
  // Simulate CPU-intensive work
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Math.sqrt(data[i] * Math.random());
  }
  return sum;
}
