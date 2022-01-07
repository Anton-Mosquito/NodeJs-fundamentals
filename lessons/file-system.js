const fs = require("fs");
const path = require("path");

//console.log("START");

//fs.mkdirSync(path.resolve(__dirname, "dir"));

// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {
//   recursive: true,
// });

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Папка создана");
// });

//console.log("END");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Папка удалена");
// });

// fs.writeFile(path.resolve(__dirname, "test.txt"), "5 qwerty 7 9 10", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Файл записан");
//   fs.appendFile(
//     path.resolve(__dirname, "test.txt"),
//     "append data part from write file",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Файл дозаписан");
//     }
//   );
// });

// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   "append data part",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Файл дозаписан");
//   }
// );

const writeAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

const appendAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

const readAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    })
  );
};

const removeAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

// writeAsync(path.resolve(__dirname, "test1.txt"), "test text from async write")
//   .then(() =>
//     appendAsync(
//       path.resolve(__dirname, "test1.txt"),
//       "test append text from async append"
//     )
//   )
//   .then(() =>
//     appendAsync(
//       path.resolve(__dirname, "test1.txt"),
//       "test append text from async append 1"
//     )
//   )
//   .then(() => readAsync(path.resolve(__dirname, "test1.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeAsync(path.resolve(__dirname, "test1.txt"))
//   .then(() => console.log("file was removed"))
//   .catch((err) => console.log(err));

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первий файл

const text = process.env.TEXT || "node example work";

writeAsync(path.resolve(__dirname, "text.txt"), text)
  .then(() => readAsync(path.resolve(__dirname, "text.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов ${count}`)
  )
  .then(() => removeAsync(path.resolve(__dirname, "text.txt")));
