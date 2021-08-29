import { readFileSync } from "fs";

const input = readFileSync("2020/03/input.txt", "utf-8").split("\n");

let x = 0,
    y = 0,
    t = 0;

console.log(input[y].length);

while (y < input.length) {
    if (input[y][x] == "#") t++;
    x = (x + 3) % 31;
    y++;
}

console.log(t);
