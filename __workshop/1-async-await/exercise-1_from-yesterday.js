// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = async () => {
  // add code here (include a try/catch as well)
  try {
    const x = await request("http://api.open-notify.org/iss-now.json");
    const y = JSON.parse(x);
    const z = {
      lat: y.iss_position.latitude,
      lng: y.iss_position.longitude,
    };
    console.log(z);
  }
  catch (err) {
    console.log(err);
  }
};

getIssPosition();


// try {
//   const x = await request("http://api.open-notify.org/iss-now.json");
//   const y = JSON.parse(x);
//   const z = {
//     lat: y.iss_position.latitude,
//     lng: y.iss_position.longitude
//   };
//   console.log(z);
//   return z;
// } catch (err) {
//   return console.log("error: " + err);
// }