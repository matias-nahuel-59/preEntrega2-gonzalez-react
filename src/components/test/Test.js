import { useState, useEffect } from 'react'


import './Test.css'

const Test = () => {

    const [contador, setContador] = useState(0) 

    useEffect(()=>{
        //Inicio del componente
        console.log("Inicie");

        return () => {
            console.log("Finalice");
        }
    })


    const suma = () => {
        let total = contador + 1
        setContador(total)
    }

    const resta = () => {
        let total = contador - 1
        setContador(total)

    }

    return(
        
        <div >
            <button onClick={suma}>Sumar</button>
            <p>{contador}</p>
           <button onClick={resta}>Restar</button>
        </div>
        
    )

}

export default Test
