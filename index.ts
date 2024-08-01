const userName: string = "Takeshi";

const userAge: number = 20;

// console.log(`name:${userName},` + `age:${userAge}`);

const color: string[] = [
    'red', 'blue', 'green'
];

// console.log(color);

enum role {
    Manager = 'Manager',
    Developer = 'Developer',
    Designer = 'Developer',
}

// console.log(role);

const sum = (a: number, b: number): number => {
    return a+ b;
}

const sumA = sum(1,2);
console.log(sumA);

const strConcat = (strA: string, strB: string): string => {
    return strA + strB;
}
const concatString = strConcat('type', 'script')

console.log(concatString);
