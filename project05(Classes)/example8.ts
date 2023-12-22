class Car7 {
    constructor(color: string, location: string, vin: string) {
        this.color = color;
        this.location = location;
        this.vin = vin;
    }
    readonly vin: string;
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

class Mercedes extends Car7 {
    constructor(color: string, location: string, vin: string, alloywheels: boolean) {
        super(color, location, vin)
    }
    alloyWheels = true;
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

let myCar = new Mercedes("Silver","California","1A", true)
myCar.power( true)

// console.log(myCar);

export{}