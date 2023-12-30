let bank = 250;
let newBank = bank;

newBank = 500;


//OBJECTS AND ARRAYS REFERENCE TYPES

const names = ["Ed", "Bubzy", "Drake"];

const newNames = names;

newNames.push = ("Mom");

console.log(newNames);


const tweet = {
  name: "Kemal",
  tweets: 20,
  age:18
};

const newTweet = tweet;
newTweet.tweets = 21;

console.log(tweet);