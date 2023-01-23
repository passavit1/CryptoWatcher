const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: "mjhfrCT1DdSENQdItTqMyw6239fD3DBH4SSqJQpVt987M8pQatsT8CPlvTn8oRF1",
  apiSecret: "2KpiXOF6q2YQLGSKhYgwRFTsZoWNe6JsodmUT4RwUpzErFEtpl9VGjnAQRoJ4VFD",
});

const run = async (x) => {
  const r = await client.futuresAllOrders();
  // const r = Object.keys(await client.futuresAllOrders()).length;
  console.log(r[Object.keys(r).length - 2]);
};

run("BTCUSDT");
