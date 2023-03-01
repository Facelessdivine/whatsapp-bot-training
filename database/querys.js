const querys =
{
    workoutplan: `
    SET DATEFIRST 1; 
    SELECT DATEPART(dw, GETDATE()) AS DiaActual, DATEPART(month, DATEADD(month, -1, GETDATE())) AS MesActual;
    SELECT top 1 assetism_text FROM Assetism ORDER BY NEWID();
    SELECT workout_text  FROM Workout where day_workout = DATEPART(dw, GETDATE()) and month_workout = DATEPART(month, DATEADD(month, -1, GETDATE())) ;
    SELECT nutrition_text FROM Nutrition where month_nutrition = DATEPART(month, DATEADD(month, -1, GETDATE()));
    SELECT warmup_text, stretch as estiramientos, food as planAlimentario, forcetraining as entrenaientoFuerza FROM Warmup where month_warmup= DATEPART(month, DATEADD(month, -1, GETDATE()));
    SELECT top 1 esotericisim_text FROM Esotericisim order by NEWID();
    `
}
module.exports = { querys };
