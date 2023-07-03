export interface Dog extends BasicAnimal {
    bark: boolean;
}

export interface Cat extends BasicAnimal {
    meow: boolean;
}

export interface Elephant extends BasicAnimal {
    hear: boolean;
}

export interface BasicAnimal {
    type: string;
    name: string;
    age?: number;
}


export interface PokemonModel {
    name: string;
    url: string;
}