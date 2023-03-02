import { ShipModel } from "../../_models/ship.model";

export interface ServiceResponseInterface {
    count: number;
    next: string;
    previous: string;
    results: ShipModel[];
}