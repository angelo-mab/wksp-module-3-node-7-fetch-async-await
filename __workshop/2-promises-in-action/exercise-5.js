const request = require('request-promise');

const getGeekJoke = async () => {
 try {
  const options = {
   url: 'https://geek-jokes.sameerkumar.website/api?format=json',
   headers: {
    Accept: 'application/json',
   }
  }

  const joke = await request(options);
  return JSON.parse(joke);
 } catch (err) {
  console.log(err)
 }
}

getGeekJoke()
 .then(data => console.log(data.joke));
