//  Array of string|number with spread operator

const nicknames: string [] = ["imran","Alexander"];
const numbers: number[] = [1,2]

const combined = [...nicknames,...numbers]
console.log(combined);
