import './CardWidget.css'

const CardWidget = (props) => {

    return(
        
        <div className='cart-box'>
            <span className="material-symbols-outlined">Tu Carrito</span>
            <p>{props.cantidad}</p>
        </div>
        
    )

}

export default CardWidget



