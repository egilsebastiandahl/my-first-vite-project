import { useState } from 'react'
import './Person.css'

function Person() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    return (
        <>

            <h1>Person object</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Dette er {name} som har {count}
                </button>
                <input className='name-input' onChange={(value) => setName(value.target.value)}></input>
                <p>
                    Edit <code>src/Person.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default Person
