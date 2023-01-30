/* Example in Node.js */
const axios = require("axios");

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/category?id=605e2ce9d41eae1066535f7c",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "e6b036b8-c9bb-448d-952e-a892ed233fce",
        },
      }
    );
  } catch (ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json["data"]["coins"][0]);
    resolve(json);
  }
});
