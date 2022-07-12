const userSeeds = require('./userSeed.json');
const postSeeds = require('./postSeed.json');
const db = require("./connection");
const { User, Post } = require("../models");

db.once("open", async () => {
  try {
    // drop tables
    await Post.deleteMany({});
    await User.deleteMany({});

    // seed tables
    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const post = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: post.username },
        { $push: { posts: post._id } },
      );   
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Users & Posts Seeded!');
  process.exit(0);
});
