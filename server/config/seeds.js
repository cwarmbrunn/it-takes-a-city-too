const db = require("./connection");
const { User, Post } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  await User.create(
    [
      {
        "username" : "Christina",
        "email" : "christina@ittakesacity.org",
        "password" : "test1234", 
        "posts" : []
      },
      {
        "username" : "Madison",
        "email" : "madison@ittakesacity.org",
        "password" : "test1234", 
        "posts" : []
      },
      {
        "username" : "Kaijam",
        "email" : "kaijam@ittakesacity.org",
        "password" : "test1234", 
        "posts" : []
      },
      {
        "username" : "Konner",
        "email" : "konner@ittakesacity.org",
        "password" : "test1234", 
        "posts" : []
      },
      {
        "username" : "Matt",
        "email" : "matt@ittakesacity.org",
        "password" : "test1234", 
        "posts" : []
     }
    ]
  );

  console.log("Users Seeded");

});
