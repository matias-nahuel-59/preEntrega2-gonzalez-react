import { useState, useEffect} from 'react'


import './ItemList.css'


import Item from '../item/Item'

const ItemList = (props) => {//Funcion constructora
 
    const [productos,setProductos] = useState([])

    //preguntar categoria
    //preguntar cuantos queresmos traer
    //ordear alfabeticamente

//Nuesta Api de productos
// ------- archivo JSON => '../../misProductos.json'

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json => setProductos(json.map(productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)))
},[])
    //Tenemos un retraso de informacion


    return(
        
        <div >
            <p>Este es el item List</p>
            {productos}
        </div>
        
    )

}

export default ItemList

