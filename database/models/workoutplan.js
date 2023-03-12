const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
  dateWorkout: {
    type: Date,
    required: true,
  },
  workout_text: {
    type: String,
    required: true,
  },
}, { collection: 'WorkoutPlan' });

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = { WorkoutPlan };
