// Setting up a file so we can seed data to our React site - CW

// Require seed for Cities, Users and Comments
// const citySeeds = require("./citySeeds.json");
const userSeeds = require('./userSeeds.json');
// const commentSeeds = require('./commentSeeds.json');
const db = require('../config/connection');
const { User, Post } = require('../models');

db.once('open', async () => {
  try {
    // BOBBY TABLES
    await Post.deleteMany({});
    await User.deleteMany({});

    // Plant Seeds
    await User.create(userSeeds);

    // for (let i = 0; i < postSeeds.length; i++) {
    //   const { _id, postAuthor } = await Post.create(postSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: postAuthor },
    //     {
    //       $addToSet: {
    //         posts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
