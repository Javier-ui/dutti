export class ShipModel {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: string;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: number;
    starship_class: string;
    pilots: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;

    constructor() {
        this.name = '';
        this.model = '';
        this.manufacturer = '';
        this.cost_in_credits = 0;
        this.length = 0;
        this.max_atmosphering_speed = 0;
        this.crew = '';
        this.passengers = 0;
        this.cargo_capacity = 0;
        this.consumables = '';
        this.hyperdrive_rating = '';
        this.MGLT = 0;
        this.starship_class = '';
        this.pilots = [];
        this.films = [];
        this.created = new Date();
        this.edited = new Date();
        this.url = '';
    }

}