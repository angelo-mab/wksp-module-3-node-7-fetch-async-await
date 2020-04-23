const request = require("request-promise");

const getTronaldDump = async () => {
  try {
    const options = {
      uri: 'https://api.tronalddump.io/',
      headers: {
        Accept: 'application/json',
      }
    };

    return await request(options);
  } catch (err) {
    console.log(err);
  }
}

// getTronaldDump()
//   .then(data => console.log(data));

module.exports = { getTronaldDump };