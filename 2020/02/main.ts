import { readFileSync } from "fs";

const input = readFileSync("2020/02/input.txt", "utf-8")
    .split("\n")
    .map(line => /([0-9]+)-([0-9]+)\s([a-z]):\s([a-z]+)/g.exec(line));

console.log(
    "Part 1",
    input.filter(
        reg =>
            Number(reg![1]) <= reg![4].split(reg![3]).length - 1 &&
            reg![4].split(reg![3]).length - 1 <= Number(reg![2])
    ).length
);

console.log(
    "Part 2",
    input.filter(
        reg =>
            (reg![4][Number(reg![1]) - 1] == reg![3] && reg![4][Number(reg![2]) - 1] != reg![3]) ||
            (reg![4][Number(reg![1]) - 1] != reg![3] && reg![4][Number(reg![2]) - 1] == reg![3])
    ).length
);
