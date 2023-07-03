import { useState } from "react"

type RenameAnimalType = {
    name: string;
    onNewName(value: string): void; //Emits the new value
}

export default function RenameAnimal(type: RenameAnimalType) {

    const [newName, setNewName] = useState(type.name);

    return (
        <>
            <input value={newName} onChange={input => { setNewName(input.target.value); type.onNewName(input.target.value) }}></input>
            <p>New name: {newName}</p>
        </>
    )
}


