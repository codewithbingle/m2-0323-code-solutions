let startNum = 3;

const interval = setInterval(() => {
  console.log(startNum);
  startNum--;

  if (startNum === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  }
}, 1000);
