import Animal from "./Animal";
import { Cat, Dog, Elephant } from "../models/Animals.model";

export const Animals = () => {
    const list: (Dog | Elephant | Cat)[] = [
        { name: "Carl", type: "Elephant", age: 17, hear: true },
        { name: "Peter", type: "Cat", age: 2, meow: true },
        { name: "J", type: "Dog", age: 7, bark: true },
        { name: "Dawg", type: "Dog", age: 5, bark: true },
        { name: "James", type: "Meow", age: 4, meow: true },
        { name: "Jey", type: "Meow", age: 4, meow: true },
    ]


    return (
        <>
            {list.map(entity => {
                return (
                    <div key={entity.name}>
                        <Animal name={entity.name} type={entity.type} age={entity.age} />
                    </div>
                )
            })}

        </>
    )
}