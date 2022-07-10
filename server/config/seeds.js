const db = require("./connection");
const { User, Post, Tag } = require("../models");

db.once("open", async () => {
  await Tag.deleteMany();

  const categories = await Category.insertMany([
    { tagBody: "Shelter" },
    { tagBody: "Food" },
    { tagBody: "Clothing" },
    { tagBody: "Employment" },
    { tagBody: "Legal" },
  ]);

  console.log("tags seeded");
});
