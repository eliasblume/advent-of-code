import { readFileSync } from "fs";

const input = readFileSync("2020/04/input.txt", "utf-8").split("\n\n");

function testLine(line: string): boolean {
    const regexp = /([a-z]{3})(?=:[#\w]+)/gm;
    const exec = line.match(regexp);
    return exec!.filter(key => "byr iyr eyr hgt hcl ecl pid".includes(key)).length == 7;
}

function testLine2(line: string) {
    const regexp = /([a-z]{3}):([#\w]+)/g;
    let exec;
    let parsedPassport: { [key: string]: string } = {};
    while ((exec = regexp.exec(line)) !== null) {
        if ("byr iyr eyr hgt hcl ecl pid".includes(exec[1])) parsedPassport[exec[1]] = exec[2];
    }

    return (
        Number(parsedPassport["byr"]) >= 1920 &&
        Number(parsedPassport["byr"]) <= 2002 &&
        Number(parsedPassport["iyr"]) >= 2010 &&
        Number(parsedPassport["iyr"]) <= 2020 &&
        Number(parsedPassport["eyr"]) >= 2020 &&
        Number(parsedPassport["eyr"]) <= 2030 &&
        parsedPassport["hgt"] &&
        ((parsedPassport["hgt"].includes("cm") &&
            Number(parsedPassport["hgt"].split("cm")[0]) >= 150 &&
            Number(parsedPassport["hgt"].split("cm")[0]) <= 193) ||
            (parsedPassport["hgt"].includes("in") &&
                Number(parsedPassport["hgt"].split("in")[0]) >= 59 &&
                Number(parsedPassport["hgt"].split("in")[0]) <= 76)) &&
        /#[a-f0-9]{6}/.test(parsedPassport["hcl"]) &&
        "amb blu brn gry grn hzl oth".includes(parsedPassport["ecl"]) &&
        parsedPassport["ecl"].length == 3 &&
        parsedPassport["pid"] &&
        parsedPassport["pid"].length == 9
    );
}

console.log("Part 1", input.filter(line => testLine(line)).length);
console.log("Part 2", input.filter(line => testLine2(line)).length);
