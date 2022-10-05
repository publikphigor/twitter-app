import Twitter from "twitter-v2";

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
});

console.log(process.env.CONSUMER_KEY);
