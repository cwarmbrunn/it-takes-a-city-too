const userSeeds = require("./userSeed.json");
const postSeeds = require("./postSeed.json");
const tagSeeds = require("./tagSeed.json");
const db = require("./connection");
const { User, Post, Tag } = require("../models");

db.once("open", async () => {
  try {
    // drop tables
    await Post.deleteMany({});
    await User.deleteMany({});
    await Tag.deleteMany({});
    // seed tables
    await User.create(userSeeds);
    await Tag.create(tagSeeds);
    for (let i = 0; i < postSeeds.length; i++) {
      const post = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: post.username },
        { $push: { posts: post._id } }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Users, Tags & Posts Seeded!");
  process.exit(0);
});
