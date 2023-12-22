class Car8 {
    constructor(color: string, location: string, vin: string | number) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    readonly vin: string | number;
    color: string;
    location: string;
    owner?: string;
    power(state: boolean): string {
        if (state === true) {            
            return "Starting engine.";
        } else {
            return "Shutting down engine.";
        }
    }
}

class Mercedes extends Car8 {
    constructor(
        color: string, 
        location: string, 
        vin: number, 
        alloywheels: boolean
        ) {
        super(color, location, vin);
        this.alloyWheels = alloywheels;
    }
    alloyWheels: boolean;
    adjustableSuspension = true;
    power(state: boolean): string {
        if (state === true) {
            console.log("Starting Mercedes engine");

            return "Starting Mercedes engine.";
        } else {
            return "Shutting down Mercedes engine.";
        }
    }
}

let myMercedes = new Mercedes("Silver","California",1 , true)
let myCar = new Car8("Black", "Pakistan", 2);
myCar.power( true)

// console.log(myCar);

export {}