const Cat = require('../models/cat.model');
const cats = require('./cats.json');

(async () => {
  const mongoose = require('mongoose');

  const MONGO_URI =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cats-server';

  mongoose
    .connect(MONGO_URI)
    .then((x) => {
      const dbName = x.connections[0].name;
      console.log(`Connected to Mongo! Database name: "${dbName}"`);
    })
    .catch((err) => {
      console.error('Error connecting to mongo: ', err);
    });

  try {
    await Cat.deleteMany();
    console.log('DB cleaned');

    const modelAdaptedCats = cats.map(
      ({
        name,
        latlng: { lat, lng },
        image,

      }) => {
        return {
          name,
          location: {
            type: 'Point',
            coordinates: [lat, lng],
          },
          image

        };
      }
    );

    const catsDb = await Cat.insertMany(modelAdaptedCats);
    console.log(`Successful DB Seed with cats ${catsDb}!`);
  } catch (error) {
    console.log('error', error);
  } finally {
    mongoose.connection.close();
  }
})();
