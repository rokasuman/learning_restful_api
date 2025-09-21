import express from "express";
const router = express.Router();

let fakeDB = [
  {
    id: 1,
    fName: "Prem",
    lName: "Acharya",
  },
  {
    id: 2,
    fName: "Prem",
    lName: "Acharya",
  },
];

router.get("/", (req, res) => {
  try {
    // throw new Error("testing error");

    console.log(req.query);
    // fakeDB.push(req.query);
    res.json({
      message: "todo get method",
      users: fakeDB,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error", //'success'
      message: "Error " + error.message,
    });
  }
});

router.post("/", (req, res) => {
  fakeDB.push(req.body);
  res.json({
    message: "New user has been added",
  });
});

router.put("/", (req, res) => {
  console.log(req.body, req.headers.authorization, "from put");
  res.json({
    message: "todo put method",
  });
});

router.delete("/:id?", (req, res) => {
  console.log(req.params, "from delete");
  res.json({
    message: "todo delete method",
  });
});

export default router;
