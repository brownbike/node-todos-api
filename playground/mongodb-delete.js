const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    // deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat Lunch" })
    //   .then(results => {
    //     console.log(results);
    //   });

    // deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat Lunch" })
    //   .then(results => {
    //     console.log(results);
    //   });

    // findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(results => {
    //     console.log(results);
    //   });

    db.collection("Users")
      .deleteMany({ name: "Bob" })
      .then(results => {
        console.log(results);
      });

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5b3cd671cd31c2f78837b47e") })
      .then(results => {
        console.log(results);
      });

    // db.close();
  }
);
