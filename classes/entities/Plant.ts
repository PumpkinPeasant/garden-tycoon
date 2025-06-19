export enum PlantType {
    Vegetable,
    Herb
}

export class Plant {
    constructor(name: string, price: number, type: PlantType) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}