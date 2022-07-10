const db = require("./connection");
const { User, Post, Tag } = require("../models");

db.once("open", async () => {
  await Tag.deleteMany();

  const tags = await Tag.insertMany([
    { tagBody: "Shelter" },
    { tagBody: "Food" },
    { tagBody: "Clothing" },
    { tagBody: "Employment" },
    { tagBody: "Legal" },
  ]);

  console.log("tags seeded");
});
