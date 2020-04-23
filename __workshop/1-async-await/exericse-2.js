// Exercise 2
// ----------
// 1. Write a function called `doublesLater` that returns a new Promise that doubles a num after 2 seconds.

// E2.1
// returns a new promise that doubles (using the setTimeout method [ setTimeout([function], miliseconds])

const doublesLater = (num) => {
  return new Promise(res => {
    setTimeout(() => {
      res(num * 2);
    }, 2000)
  })
};
// 2.2 
const addPromise = async (num) => {
  const a = await doublesLater(10);
  const b = await doublesLater(20);
  const c = await doublesLater(30);

  return num+a+b+c;
}

addPromise(10).then(sum => {
  console.log(sum);
});
