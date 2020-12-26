function callback() {
  console.log("Processed in next iteration");
}

// for (let i = 0; i < 20; i++) {
//   process.nextTick(() => {
//     console.log("hello " + i);
//   });
// }
process.nextTick(callback);

setTimeout(() => {
  console.log(`Set Timeout executed`);
}, 1000);

function runMultipleTimes() {
  console.log("Executing after One Second");
}
setInterval(runMultipleTimes, 1000);

console.log("Processed in the first iteration");

console.log("before immediate");

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, "during immediate");

console.log("after immediate");
