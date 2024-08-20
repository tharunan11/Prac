const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// {
//     "name": "John Doe",
//     "regNumber": "12345",
//     "dept": "CSE"
// }
