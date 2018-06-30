const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5b1ef36bc46c5b4d3211a988") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch Todos", err);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos Count: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch Todos", err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Bob" })
      .count()
      .then(
        count => {
          console.log(`Users Count: ${count}`);
        },
        err => {
          console.log("Unable to fetch Users", err);
        }
      );

    db.collection("Users")
      .find({ name: "Bob" })
      .toArray()
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch Users", err);
        }
      );

    // db.close();
  }
);
