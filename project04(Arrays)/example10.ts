// Rest Parameter // During Function calling provided value collect in array(store)

// 1st Method

// function logNames(greeting: string, ...nicknames: string[]){
//     for (const nickname of nicknames){
//         console.log(`${greeting} ${nickname}`);
//     }
// }




// logNames("Hello","Imran", "Alexander", "Alex", "Alexander the Great");

// 2nd method

let nickNames1 = ["Imran", "Alexander", "Alex", "Alexander the Great"];

function logNames(greeting: string, ...nicknames: string[]){
    for (const nickname of nicknames){
        console.log(`${greeting} ${nickname}`);
    }
}

logNames("Hello", ...nickNames1)

 
let nickNames2 = ["Imran", "Alexander", "Alex", "Alexander the Great"];
let preference = [,1,2,3,4]
function logNames1(greeting: string, ...nicknames: (string | number)[]){
    for (const nickname of nicknames){
        console.log(`${greeting} ${nickname}`);
    }
}

logNames1("Hello", ...nickNames2);
logNames1("Hello", ...preference);
