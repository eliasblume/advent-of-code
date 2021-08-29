import { readFileSync } from "fs";

const input = readFileSync("2020/01/input.txt", "utf-8")
    .split("\n")
    .map(n => Number(n))
    .filter(n => n <= 2020);

(() => {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] + input[j] == 2020) {
                console.log("Part 1:", input[i] * input[j]);
                return;
            }
        }
    }
})();

(() => {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[i] + input[j] < 2020) {
                for (let k = 0; k < input.length; k++) {
                    if (input[i] + input[j] + input[k] == 2020) {
                        console.log("Part 2", input[i] * input[j] * input[k]);
                        return;
                    }
                }
            }
        }
    }
})();
