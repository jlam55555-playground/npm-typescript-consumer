"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var npm_typescript_1 = require("@jlam55555-playground/npm-typescript");
var mountainbike_1 = require("@jlam55555-playground/npm-typescript/bicycle/mountainbike");
var bicycle_1 = require("@jlam55555-playground/npm-typescript/bicycle");
// using the entrypoint from the root package.json
var helloSayer = new npm_typescript_1.HelloSayer();
helloSayer.sayHello();
// using nested imported entrypoints
var bike = new mountainbike_1.MountainBike({
    gears: 8,
    cost: 500,
    color: bicycle_1.BicycleColor.SALMON,
    material: bicycle_1.BicycleFrameMaterial.BALEEN
});
console.log("Bike material: " + bicycle_1.BicycleFrameMaterial[bike.getDescription().material]);
console.log("Bike color: " + bicycle_1.BicycleColor[bike.getDescription().color]);
var bikeSpeed = bike.changeGear(2).pedal(5).brake(2).getCurrentSpeed();
console.log("Bike speed: " + bikeSpeed);
//# sourceMappingURL=index.js.map