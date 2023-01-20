import { useState, useEffect } from 'react' 

import './Hooks.css'

const Hooks = () => {

    //Hooks de estado
    //Costructor [ESTADO , Funcion que actualiza el estado] = Inicializacion del Estado (El valor por default del estado )
    const [contador,setContador] = useState(0)

    //Hooks de efectos
    //UseEffect (funcion ( inicio, fin )) , variantes

    useEffect(()=> {

        //Montaje
            console.log("Componente inicializado");
        //Desmotaje
        return () => {
            console.log("Componente finalizado");
        }
    })



    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return(
        
        <div >
           <button onClick={sumar}>Sumar</button>
            <p>{contador}</p>
           <button onClick={restar}>Restar</button>
        </div>
        
    )

}

export default Hooks




