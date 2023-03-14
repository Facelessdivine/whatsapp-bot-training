const moment = require('moment');
const mongoose = require('mongoose');
const config = require('../config');
const { WorkoutPlan } = require('./models/workoutplan')
require('moment/locale/es');
const dbSettings = {
  user: config.dbUser,
  pass: config.dbPassword,
  host: config.dbServer,
  dbName: config.dbDatabase,
};

const connectToDatabase = async () => {
  try {
    const mongoUri = `mongodb+srv://facelessdivine:Password44@clustervergas.gkdcbnb.mongodb.net/ultimatetraining10k?retryWrites=true&w=majority`;
    // const mongoUri = `mongodb+srv://${dbSettings.user}:${dbSettings.pass}@${dbSettings.host}/${dbSettings.dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    // console.log(results[1].dateWorkout)
    // var startDate = new Date("2023-03-02T00:00:00Z");
    // var daysToAdd = 0;
    // var dateWorkout;
    // // await WorkoutPlan.find({}).forEach(async (doc) => {

    // for (var i = 0; i < 122; i++) {
    //   dateWorkout = moment(new Date(startDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000))
    //   daysToAdd++;
    //   const fecha = moment(dateWorkout, 'DD/MM/YYYY');
    //   const mes = fecha.month() -1;
    //   const diaSemana = fecha.format('dddd');
    //   let res = await WorkoutPlan.updateOne(
    //     { dateWorkout: { $not: { $type: 'string' } } },
    //     {
    //       $set: {
    //         dateWorkout: fecha.format('DD/MM/YYYY'),
    //         mes: mes,
    //         dia: diaSemana
    //       }
    //     }
    //   );
    //   console.log(res)
    // }
    // );
    // });



    // let res = await WorkoutPlan.updateOne(
    //   { dateWorkout: { $not: { $type: "string" } } },
    //   { $set: { dateWorkout: dateWorkout } }
    //   console.log(moment().format('dddd'))
    //   let res = await WorkoutPlan.find({ dateWorkout: moment().format('DD/MM/YYYY') })
    //   console.log(res)
    // }
    console.log('Database connected successfully');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connectToDatabase };
