import Binance from 'binance-api-node';

const client = Binance();

// Authenticated client, can make signed calls
const client2 = Binance({
  apiKey: 'mjhfrCT1DdSENQdItTqMyw6239fD3DBH4SSqJQpVt987M8pQatsT8CPlvTn8oRF1',
  apiSecret: '2KpiXOF6q2YQLGSKhYgwRFTsZoWNe6JsodmUT4RwUpzErFEtpl9VGjnAQRoJ4VFD'
});

console.log(client.ping());
