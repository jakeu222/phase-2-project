import React, { useState } from 'react'

function Card({ item }) {

    const [favorite, setFavorite] = useState(true)
    function toggleFavorite() {
        setFavorite(fav => !fav)
    }

    return (
        <div className='card'>
            <h4>{item.name}</h4>
            <br />
            <img src={item.image} alt={item.name} />
            <div className='card-info'>

                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>Only {item.quantity} left in stock!</p>
                <p>Price: ${item.price}</p>
                <br />


                <button className='add-cart' >Add to Cart</button>
                <br />


                {favorite ? (
                    <button className="primary" onClick={toggleFavorite}>Click to Favorite</button>
                ) : (
                    <button className="secondary" onClick={toggleFavorite}>Favorite</button>
                )}
            </div>

        </div>
    )
}

export default Card
