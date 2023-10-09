const fs = require("fs").promises;

const newUser = {
    id: 1,
    name: "Me",
    pet: "Lucy"
};

const fileName = "user-db.json";

fs.writeFile(fileName, JSON.stringify(newUser), "utf-8")
  .then(() => {
    console.log("created json db");
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });