const Application = require("./framework/Application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parceJson");
const parceUrl = require("./framework/parceUrl");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(parceUrl("http://localhost:5000"));
app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://user:123@cluster0.nm6ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
