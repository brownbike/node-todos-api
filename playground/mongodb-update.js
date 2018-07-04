const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    // findOneAndUpdate
    // 5b3a2e2a1f8c0a8b6ee63f70

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: new ObjectID("5b3a2e2a1f8c0a8b6ee63f70") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(results => {
    //     console.log(results);
    //   });

    // 5b3cd693cd31c2f78837b484

    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5b3cd693cd31c2f78837b484") },
        {
          $set: { name: "Scott" },
          $inc: { age: 1 }
        },
        { returnOriginal: false }
      )
      .then(results => {
        console.log(results);
      });

    // db.close();
  }
);
