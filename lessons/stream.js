// Readable - чтение
// Writable - запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

// Один чанк дефолту 64к6
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => console.log("Закончили читать"));
// stream.on("open", () => console.log("Начали читать"));
// stream.on("error", (e) => console.log(e));

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );

// for (let index = 0; index < 20; index++) {
//   writableStream.write(index + "\n");
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on("error");

const http = require("http");

http.createServer((req, res) => {
  // req - readable stream
  // res - writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, "test2.txt"));

  // Стрим закончит читать раньше чем пользователь скачает
  //   stream.on("data", (chunk) => res.write(chunk));
  //   stream.on("end", (chunk) => res.end());
  stream.pipe(res);
});
