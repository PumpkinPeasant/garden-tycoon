import {Plant} from "~/classes/entities/Plant";

enum GrowStage {
    Planted,
    Sprout,
    YoungPlant,
    Maturing,
    ReadyToHarvest
}

export class Crop extends Plant{
    constructor(...args) {
        super(...args);
        this.growStage = GrowStage.Planted
    }
}