// Rest Parameter // During Function calling provided value collect in array(store)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1st Method
// function logNames(greeting: string, ...nicknames: string[]){
//     for (const nickname of nicknames){
//         console.log(`${greeting} ${nickname}`);
//     }
// }
// logNames("Hello","Imran", "Alexander", "Alex", "Alexander the Great");
// 2nd method
var nickNames1 = ["Imran", "Alexander", "Alex", "Alexander the Great"];
function logNames(greeting) {
    var nicknames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nicknames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, nicknames_1 = nicknames; _a < nicknames_1.length; _a++) {
        var nickname = nicknames_1[_a];
        console.log("".concat(greeting, " ").concat(nickname));
    }
}
logNames.apply(void 0, __spreadArray(["Hello"], nickNames1, false));
var nickNames2 = ["Imran", "Alexander", "Alex", "Alexander the Great"];
var preference = [, 1, 2, 3, 4];
function logNames1(greeting) {
    var nicknames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nicknames[_i - 1] = arguments[_i];
    }
    for (var _a = 0, nicknames_2 = nicknames; _a < nicknames_2.length; _a++) {
        var nickname = nicknames_2[_a];
        console.log("".concat(greeting, " ").concat(nickname));
    }
}
logNames1.apply(void 0, __spreadArray(["Hello"], nickNames2, false));
logNames1.apply(void 0, __spreadArray(["Hello"], preference, false));
