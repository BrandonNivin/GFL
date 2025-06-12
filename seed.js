const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Player = require('./models/Player');
const players = require('./data/players.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    await Player.deleteMany(); // Clear old player data
    await Player.insertMany(players); // Insert sample data
    console.log('✅ Player data seeded successfully');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Error seeding player data:', err);
    process.exit(1);
  });
