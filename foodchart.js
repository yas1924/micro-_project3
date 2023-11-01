const data = require('./foodchart.json');

function allFoodItems() {
    return data.map((Items) => Items.foodname)
};
console.log(allFoodItems());

function catgVegetable() {
    return data.filter((item) => item.category === "Vegetable")
};
console.log(catgVegetable());

function catgFruit() { 
    return data.filter((item) => item.category === "Fruit")
};
console.log(catgFruit());

;function catgProteins() { 
    return data.filter((item) => item.category === "Proteins")
};
console.log(catgProtein());

function catgNuts() { 
    return data.filter((item) => item.category === "Nuts")
};
console.log(catgNuts());

function catgGrain() {
    return data.filter((item) => item.category === "Grain")
};
console.log(catgGrain());

function catgDairy() {
    return data.filter((item) => item.category === "Dairy")
};
console.log(catgDairy());

function above100() {
    return data.filter((item) => item.calorie > 100)
};
console.log(above100());

function below100() {
    return data.filter((item) => item.calorie < 100)
};
console.log(below100());

function HighProContent() {
    return data.sort((a, b) => b.proteins - a.proteins)
};
console.log(HighProContent());

function LowCabContent() {
    return data.sort((a, b) => a.cab - b.cab)
};
console.log(LowCabContentContent());
