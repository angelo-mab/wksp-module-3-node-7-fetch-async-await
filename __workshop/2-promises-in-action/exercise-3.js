const request = require('request-promise');

const getDadJoke = async () => {
  const options = {
    uri: 'https://icanhazdadjoke.com/',
    headers: {
      Accept: 'application/json',
    }
  };

  const joke = await request(options);
  const actualJoke = JSON.parse(joke);

  return actualJoke.joke;
}
// getDadJoke()
//   .then(data => console.log(data));

module.exports = { getDadJoke };