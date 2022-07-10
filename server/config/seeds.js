const db = require("./connection");
const { User, Post, Tag } = require("../models");

db.once("open", async () => {
  await Tag.deleteMany();
  await User.deleteMany({});

  const tags = await Tag.insertMany([
    { tagBody: "Shelter" },
    { tagBody: "Food" },
    { tagBody: "Clothing" },
    { tagBody: "Employment" },
    { tagBody: "Legal" },
  ]);

  console.log("tags seeded");

  await User.create([
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
  ]);

  console.log("tags seeded");

});
