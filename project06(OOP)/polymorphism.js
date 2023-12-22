var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Polymorphism
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowthRate, _statePrivacy, _leader, religion) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
        this.religion = religion;
    }
    Country.prototype.populationGrowth = function () { return 1; };
    ;
    Object.defineProperty(Country.prototype, "privateData", {
        get: function () {
            return this._statePrivacy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "leader", {
        set: function (newLeader) {
            this._leader = newLeader;
        },
        enumerable: false,
        configurable: true
    });
    Country.prototype.greeting = function () {
        return "Hello";
    };
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowthRate, statePrivacy, leader, religion) {
        if (religion === void 0) { religion = "Islam"; }
        return _super.call(this, name, language, population, populationGrowthRate, statePrivacy, leader, religion) || this;
    }
    OICCountry.prototype.populationGrowth = function () {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    };
    OICCountry.prototype.greeting = function () {
        return "Asalamoalaikum";
    };
    return OICCountry;
}(Country));
var Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Pakistan Private Data", "Pakistan's Leader");
console.info(Pakistan);
console.info(Pakistan.greeting());
var China = new Country("China", "Mandarin", 1500000000, 0, "China's Private Date", "China's Leader", "Buddish");
console.info(China);
console.info(China.greeting());
