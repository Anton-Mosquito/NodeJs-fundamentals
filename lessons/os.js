const os = require("os");
const cluster = require("cluster");

// console.log(process.platform);
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//   for (let index = 0; index < os.cpus().length - 1; index++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`Воркер с pid = ${worker.process.pid} умер `);
//     if(code ===) {
//       cluster.fork();
//     } else {
//       console.log(`Воркер умер... `);
//     }
//   });
// } else {
//   console.log(`Воркер с pid=${process.pid} запущен`);

//   setInterval(() => {
//     console.log(`Воркер с pid=${process.pid} еще работает`);
//   }, 5000);
// }
