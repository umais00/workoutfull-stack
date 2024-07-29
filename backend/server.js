require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const workoutrouts = require("./routes/workouts");
const app = express();

app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts',workoutrouts);

mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("MongoDB connected"))
 .catch(err => console.error(err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



