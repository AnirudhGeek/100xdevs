const express = require("express");
const app = express();

const PORT = 5000;

const users = [
  {
    name: "John",
    kidneys: [{ healthy: true }, { healthy: false }],
  },
];

//details of kidneys
app.get("/", (req, res) => {
  const numberOfKidneys = users[0].kidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (users[0].kidneys[i].healthy === true) {
      numberOfHealthyKidneys++;
    }
  }
  console.log(numberOfHealthyKidneys);
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.status(200).json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json());

//adding a new healthy or unhealthy kidney
app.post("/", (req, res) => {
  const healthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: healthy,
  });
  res.json({
    success: true,
  });
});

//updating unhealthy kidney to a healthy kidney
app.put("/", (req, res) => {
  if (checkIfUnhealthy()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy === false) {
        users[0].kidneys[i].healthy = true;
      }
    }
    res.status(200).json({
      msg: "Updated kidneys successfully",
    });
  } else {
    res.status(404).json({
      msg: "Unhealthy kidney not found",
    });
  }
});

//removing unhealthy kidney from the body
app.delete("/", (req, res) => {
  if (checkIfUnhealthy()) {
    let healthyKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy === true) {
        healthyKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = healthyKidneys;
    res.status(200).json({
      msg: "Removed unhealthy kidneys successfully",
    });
  } else {
    res.status(404).json({
      msg: "Unhealthy kidney not found",
    });
  }
});

//logic of checking is there is any unhealthy kidney or not
function checkIfUnhealthy() {
  let unhealthyHidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      return !unhealthyHidney;
    }
  }
}

app.listen(PORT, () => {
  console.log(`Server started at port : ${PORT}`);
});