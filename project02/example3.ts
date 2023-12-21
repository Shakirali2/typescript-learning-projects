type imranType = {
    name: {firstName: string, lastName:string},
    age : number,
    teaching: boolean,
    dob: Date,
    certification: string[],
}

let imran: imranType;

imran = {
    name: {firstName: "Imran",lastName : "Ali"},
    age : 21,
    teaching: true,
    dob: new Date(),
    certification: ["AWS","Docker", "Rust"],
};
// it doesn't match with our object(imran)
// imran = "Alexander"


export {}