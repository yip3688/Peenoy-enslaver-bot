module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/gvnmYbRwUt", //Support Server Link
  Token: process.env.Token || "ODcwMjYyMzEyMzQxMjM3NzYw.YQKM7w.KI4kbmSpyn1LpPAyKVqtd0hxMYs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "870262312341237760", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "l2ZyT-DvuabPYn41yHYqP-JmskVOp9GX", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "AcroLikesMen", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/emojis/818637192657633321.gif?v=1", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "6bd9837855114df0a4b2a8390cfc536c", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "d6fe18add1634d2eb85b9e9a1d3296f1", //Spotify Client Secret
  },
};