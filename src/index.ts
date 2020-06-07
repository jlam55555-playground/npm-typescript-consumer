import { HelloSayer } from "@jlam55555-playground/npm-typescript";
import { MountainBike } from "@jlam55555-playground/npm-typescript/bicycle/mountainbike";
import { BicycleColor, BicycleFrameMaterial } from "@jlam55555-playground/npm-typescript/bicycle";

// using the entrypoint from the root package.json
const helloSayer = new HelloSayer();
helloSayer.sayHello();

// using nested imported entrypoints
const bike: MountainBike = new MountainBike({
    gears: 8,
    cost: 500,
    color: BicycleColor.SALMON,
    material: BicycleFrameMaterial.BALEEN
});
console.log(`Bike material: ${BicycleFrameMaterial[bike.getDescription().material]}`);
console.log(`Bike color: ${BicycleColor[bike.getDescription().color]}`);

let bikeSpeed: number = bike.changeGear(2).pedal(5).brake(2).getCurrentSpeed();
console.log(`Bike speed: ${bikeSpeed}`);
