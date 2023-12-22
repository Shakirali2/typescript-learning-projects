//  Array of string|number with spread operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nicknames = ["imran", "Alexander"];
var numbers = [1, 2];
var combined = __spreadArray(__spreadArray([], nicknames, true), numbers, true);
console.log(combined);
