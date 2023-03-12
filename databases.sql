create database ultimatetraining10k;

use ultimatetraining10k;

create table Workout (
    workout_id int IDENTITY(1, 1) primary key,
    month_workout int,
    day_workout int,
    workout_text varchar(500)
);

create table Nutrition (
    nutrition_id int IDENTITY(1, 1) primary key,
    month_nutrition int,
    nutrition_text varchar (500)
);

create table Esotericisim (
    esotericisim_id int IDENTITY(1, 1) primary key,
    esotericisim_text text
);

create table Assetism (
    assetism_id int IDENTITY(1, 1) primary key,
    assetism_text text
);

create table Warmup (
    warmup_id int IDENTITY(1, 1) primary key,
    month_warmup int,
    warmup_text text,
    stretch text,
    food text,
    forcetraining text
);

INSERT INTO
    Workout (
        [month_workout],
        [day_workout]
    )
VALUES
    (1,1,'Correr 5k a 10-12 km/h (ritmo moderado)'),
    (1,2,'Entrenamiento de velocidad en intervalos (8x400m) a 15-18 km/h con descanso de 1 minuto entre cada repetición.'),
    (1,3,'Descanso'),
    (1,4,'Correr 7k a 10-12 km/h (ritmo moderado)'),
    (1,5,'Entrenamiento de fuerza (sentadillas,estocadas,zancadas)'),
    (1,6,'Descanso'),
    (1,7,'Correr 8k a 10-12 km/h (ritmo moderado)'),
    (2,1,'Correr 6k a 11-13 km/h (ritmo moderado)'),
    (2,2,'Entrenamiento de velocidad en intervalos (10x400m) a 16-19 km/h con descanso de 1 minuto entre cada repetición'),
    (2,3,'Descanso'),
    (2,4,'Correr 8k a 11-13 km/h (ritmo moderado)'),
    (2,5,'Entrenamiento de fuerza (sentadillas,estocadas,zancadas)'),
    (2,6,'Descanso'),
    (2,7,'Correr 10k a 11-13 km/h (ritmo moderado)'),
    (3,1,'Correr 7k a 12-14 km/h (ritmo moderado)'),
    (3,2,'Entrenamiento de velocidad en intervalos (12x400m) a 17-20 km/h con descanso de 1 minuto entre cada repetición'),
    (3,3,'Descanso'),
    (3,4,'Correr 9k a 12-14 km/h (ritmo moderado)'),
    (3,5,'Entrenamiento de fuerza (sentadillas,estocadas,zancadas)'),
    (3,6,'Descanso'),
    (3,7,'Correr 12k a 12-14 km/h (ritmo moderado)'),
    (4,1,'Correr 8k a 13-15 km/h (ritmo moderado-rápido)'),
    (4,2,'Entrenamiento de velocidad en intervalos (14x400m) a 18-21 km/h con descanso de 1 minuto entre cada repetición'),
    (4,3,'Descanso'),
    (4,4,'Correr 10k a 13-15 km/h (ritmo moderado-rápido)'),
    (4,5,'Entrenamiento de fuerza (sentadillas,estocadas,zancadas)'),
    (4,6,'Descanso'),
    (4,7,'Correr 13k a 13-15 km/h (ritmo moderado-rápido)');


INSERT INTO
    Nutrition (month_nutrition, nutrition_text)
VALUES
    (1,'Asegúrate de comer una dieta equilibrada que incluya proteínas magras, carbohidratos complejos y grasas saludables.'),
    (1,'Aumenta tu ingesta de carbohidratos complejos, como arroz integral, quinoa y batatas, para proporcionar la energía necesaria para entrenamientos rigurosos.'),
    (1,'Bebe mucha agua para mantener tu cuerpo hidratado y evitar la fatiga.'),
    (2,'Aumenta tu ingesta de proteínas, como carne magra, pescado y huevos, para ayudar a reparar los músculos después de los entrenamientos intensos.'),
    (2,'Incluye alimentos ricos en hierro, como carnes rojas, espinacas y frijoles, en tu dieta para ayudar a mantener los niveles de hemoglobina en la sangre y prevenir la fatiga.'),
    (2,'Asegúrate de comer suficientes carbohidratos complejos para proporcionar la energía necesaria para entrenamientos rigurosos.'),
    (3,'Asegúrate de comer suficientes grasas saludables, como aguacate, frutos secos y aceite de oliva, para proporcionar la energía necesaria para entrenamientos rigurosos.'),
    (3,'Incluye alimentos ricos en calcio, como productos lácteos, brócoli y almendras, en tu dieta para ayudar a mantener la salud ósea.'),
    (3,'Evita alimentos procesados y azucarados para mantener tu cuerpo en óptimas condiciones.'),
    (4,'Asegúrate de incluir una variedad de alimentos en tu dieta para obtener los nutrientes necesarios para los entrenamientos rigurosos.'),
    (4,'Aumenta tu ingesta de fibra, como frutas y verduras, para ayudar a mantener una digestión saludable.'),
    (4,'Incluye alimentos ricos en antioxidantes, como bayas y vegetales de hojas verdes, para ayudar a combatir los radicales libres y reducir el estrés oxidativo.');

INSERT INTO
    Assetism (assetism_text)
VALUES
    ('La renuncia a lo superfluo: El ascetismo valora la simplicidad y la renuncia a lo superfluo. En tu entrenamiento, esto significa centrarse en los ejercicios esenciales y evitar distracciones innecesarias.'),
    ('La disciplina y la autodeterminación: El ascetismo valora la disciplina y la autodeterminación. Esto se aplica a tu entrenamiento al hacerlo de forma regular y consistente, incluso cuando no te sientes motivado. Aprende a confiar en tu propia fuerza de voluntad y determinación para superar los obstáculos en tu entrenamiento.'),
    ('El entrenamiento mental: El ascetismo valora el entrenamiento mental tanto como el físico. Utiliza la meditación y la visualización para ayudarte a mantenerte enfocado y motivado en tu entrenamiento.');

INSERT INTO
    Esotericisim (esotericisim_text)
VALUES
    ('Acepta lo que no puedes controlar: Cuando estás entrenando para una carrera, no puedes controlar el clima, el terreno, ni la actuación de los demás corredores. Sin embargo, puedes controlar tu propia actitud y tus esfuerzos en el entrenamiento. Enfócate en lo que puedes controlar y acepta el resto.'),
    ('Practica la moderación: El estoicismo enseña que la moderación es una virtud. Esto se puede aplicar a tu entrenamiento al no exceder tus límites. Escucha a tu cuerpo y no te fuerces más allá de lo que puedes soportar.'),
    ('La resistencia es virtuosa: El estoicismo valora la capacidad de resistir y perseverar ante la adversidad. En tu entrenamiento, habrá momentos en los que te sentirás cansado o desanimado, pero es importante perseverar y continuar trabajando hacia tu meta.');