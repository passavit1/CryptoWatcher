const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "mjhfrCT1DdSENQdItTqMyw6239fD3DBH4SSqJQpVt987M8pQatsT8CPlvTn8oRF1",
  APISECRET: "2KpiXOF6q2YQLGSKhYgwRFTsZoWNe6JsodmUT4RwUpzErFEtpl9VGjnAQRoJ4VFD",
});

// const run = async (x) => {
//   const Price = await binance.futuresPrices();
//   console.log(Price[x]);
// };

// run("BTCUSDT");

const Detail = async (x, y) => {
  const r = await binance.futuresAccount();
  const r2 = r[x][0]["symbol"];
  console.log(r2);

  // const number = Object.keys(r[x]); // number of items

  //   const symbol = Object.keys(r[x][0]["symbol"]);
  //   console.log(symbol);
};

Detail("positions", "symbol");
