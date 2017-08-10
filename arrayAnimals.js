var animals = [];
undefined
animals.push ("Кот");
1
animals.unshift ("Пес");
2
animals;
(2) ["Пес", "Кот"]
animals.pop ("Кот");
"Кот"
animals;
["Пес"]
animals.push ("Кот");
2
animals;
(2) ["Пес", "Кот"]
animals.push ("Тигр");
3
var lastAnimals = animals.pop();
lastAnimals;
"Тигр"
animals;
(2) ["Пес", "Кот"]
animals.unshift ("Волк");
3
animals;
(3) ["Волк", "Пес", "Кот"]
animals.push ("Тигр");
4
animals;
(4) ["Волк", "Пес", "Кот", "Тигр"]
var firstAnimals = animals.shift ();
firstAnimals;
"Волк"
var wildAnimals = lastAnimals + " " + firstAnimals;
wildAnimals;
"Тигр Волк"
