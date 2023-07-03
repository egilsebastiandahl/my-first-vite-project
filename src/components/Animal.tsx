import './Animal.css'
import { useState } from 'react';
import { BasicAnimal } from '../models/Animals.model';
import RenameAnimal from './RenameAnimal';





export default function Animal(animal: BasicAnimal) {
    const [name, setName] = useState("");

    const getChildData = (value: string) => {
        setName(value);
    }


    return (
        <div className='animal'>
            <h3>Type: {animal.type}</h3>
            <h3>Name: {name != "" ? name : animal.name}</h3>
            <RenameAnimal name={name} onNewName={getChildData}

            />
        </div>
    )

    // function changeName(newName: string): void {
    //     setName(newName);
    //     dog[1].name = newName;
    //     console.log(dog);


    // }
}


