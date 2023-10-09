const fs = require("fs").promises;

fs.readFile("new-task.txt", "utf-8")
  .then((content) => {
    return fs.appendFile("tasks.txt", content + "\n");
  })
  .catch((error) => {
    console.log("Error occurred:", error);
  });