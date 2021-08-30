import { readFileSync } from "fs";

const input = readFileSync("2020/03/input.txt", "utf-8").split("\n");

function calcSlopes(xplus: number, yplus: number): number {
    let x = 0,
        y = 0,
        t = 0;

    while (y < input.length) {
        if (input[y][x] == "#") t++;
        x = (x + xplus) % 31;
        y += yplus;
    }
    return t;
}

console.log("Part 1", calcSlopes(3, 1));
console.log(
    "Part 2",
    calcSlopes(1, 1) * calcSlopes(3, 1) * calcSlopes(5, 1) * calcSlopes(7, 1) * calcSlopes(1, 2)
);
