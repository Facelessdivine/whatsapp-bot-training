const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
  dateWorkout: {
    type: String,
    required: true,
  },
  workout_text: {
    type: String,
    required: true,
  },
  dia: {
    type: String,
    required: true,
  },
  mes: {
    type: String,
    required: true,
  }
}, { collection: 'WorkoutPlan' });

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

module.exports = { WorkoutPlan };
