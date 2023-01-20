import './ItemListContainer.css'

import ItemList from '../itemList/ItemList'


const ItemListContainer = (props) => {//Funcion constructora


    return(
        
        <div className='main-section'>
            <p>{props.greeting}</p>

            <div>
                <h1>BANER PUBLICITARIO</h1>
            </div>
            <ItemList />
        </div>
        
    )

}

export default ItemListContainer



