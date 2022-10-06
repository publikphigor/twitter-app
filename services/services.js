import { TwitterClient } from "twitter-api-client";

const client = new TwitterClient({
  apiKey: `${process.env.CONSUMER_KEY}`,
  apiSecret: `${process.env.CONSUMER_SECRET}`,
  accessToken: `${process.env.ACCESS_TOKEN}`,
  accessTokenSecret: `${process.env.TOKEN_SECRET}`,
});

console.log(client);

export const getTweet = async function () {
  try {
    const tweet = await client.accountsAndUsers.usersSearch({ q: "publikphigor" });

    if (tweet) return tweet;
  } catch (err) {
    console.log(err);
  }
};

export default client;
