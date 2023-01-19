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
  //   console.log(r);

  //Find Key

  const r2 = Object.keys(r);
  console.log(r2);

  const r3 = r["assets"];
  console.log(r3);

  //   const r2 = r["positions"][0]["symbol"];
  //   console.log(r2);

  //Detail in Symbol
  //   const r2 = r["positions"][0];
  //   console.log(r2);

  //   number of symbols
  //   for (let i in r["positions"]) {
  //     console.log(i + " : " + r["positions"][i]["symbol"]);
  //   }
};

Detail();
