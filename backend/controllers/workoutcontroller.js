const mongoose = require("mongoose");
const Workouts = require("../models/workoutmodel");

//get workouts
const getworkouts = async (req, res) => {
  const workouts = await Workouts.find({}).sort({ createdAt: -1 });

  return res.status(200).json(workouts);
};

// get a single workout

const getSingle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such id" });
  } else {
    const workout = await Workouts.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "no such workout" });
    } else {
      return res.status(200).json(workout);
    }
  }
};

//create a new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  //add doc to db
  try {
    const workout = await Workouts.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    console.error(err); // Use console.error for errors
    res.status(500).send("Error creating workout"); // Send a proper error message with status code
  }
};

//delete a single workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  } else {
    const status = await Workouts.findByIdAndDelete(id);
    if (!status) {
      return res.status(404).json({ error: "workout not found" });
    } else {
      return res.status(200).json({ success: "succesfully deleted" });
    }
  }
};

//update a single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "not found" });
  } else {
    const workout = await Workouts.findByIdAndUpdate(id, {
      ...req.body,
    });
    if (!workout) {
      return res.status(404).json({ error: "workout not found" });
    } else {
      return res.status(200).json({ success: "succesfully updated" });
    }
  }
};

module.exports = {
  deleteWorkout,
  getworkouts,
  getSingle,
  createWorkout,
  updateWorkout,
};
