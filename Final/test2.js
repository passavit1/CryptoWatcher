const Binance = require("binance-api-node").default;

const client = Binance({
  apiKey: "mjhfrCT1DdSENQdItTqMyw6239fD3DBH4SSqJQpVt987M8pQatsT8CPlvTn8oRF1",
  apiSecret: "2KpiXOF6q2YQLGSKhYgwRFTsZoWNe6JsodmUT4RwUpzErFEtpl9VGjnAQRoJ4VFD",
});

const run = async (x) => {
  const r = await client.futuresDailyStats({ symbol: x });

  console.log(r);
};

run("BTCUSDT");
