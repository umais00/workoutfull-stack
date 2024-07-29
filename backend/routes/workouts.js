const express = require("express");
const {
  createWorkout,
  getworkouts,
  getSingle,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutcontroller");
const router = express.Router();

router.get("/", getworkouts);
router.get("/:id", getSingle);
router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

module.exports = router;
