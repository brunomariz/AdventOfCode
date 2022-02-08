// pt1
console.time("pt1");

const { time, timeEnd } = require("console");
const fs = require("fs");

const test = fs.readFileSync("input.txt").toString();

let depth = 0;
let forward = 0;

test.split("\n").forEach((item) => {
  const ammount = Number(item.split("")[item.length - 1]);
  if (item.startsWith("forward")) {
    forward += ammount;
  } else if (item.startsWith("down")) {
    depth += ammount;
  } else {
    depth -= ammount;
  }
});
console.log(depth, forward, depth * forward);
console.timeEnd("pt1");

// pt2
console.time("pt2");

const testinput = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";

const splinput = test.split("\n");

let depth2 = 0;
let aim = 0;
let forward2 = 0;

splinput.forEach((item) => {
  const ammount = Number(item.split("")[item.length - 1]);
  if (item.startsWith("forward")) {
    forward2 += ammount;
    depth2 += ammount * aim;
  }
  if (item.startsWith("up")) {
    aim -= ammount;
  }
  if (item.startsWith("down")) {
    aim += ammount;
  }
});

console.log(forward2, depth2, aim, forward2 * depth2);

console.timeEnd("pt2");
