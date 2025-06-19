import type {Crop} from "~/classes/entities/Crop";

export enum PlotState {
    empty,
    planted
}

export class Plot {
    constructor() {
        this.state = PlotState.empty;
        this.crop = null;
    }

    plant(crop: Crop) {
        this.crop = crop;
        this.state = PlotState.planted;
    }

}