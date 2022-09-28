function birthdayCakeCandles(candles) {
  // Write your code here
  let maxCandle = Math.max(...candles);
  let howHighCandles = Number();

  candles.forEach((candle) => {
    if (candle == maxCandle) {
      howHighCandles++;
    }
  });
  return howHighCandles;
}

const candles = [3, 1, 2, 3];
console.log(birthdayCakeCandles(candles));
