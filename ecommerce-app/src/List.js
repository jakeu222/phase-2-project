import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function List({ invintory }) {
    return (
        <ul className='list'>
            {invintory.map(item => <Card key={item.id} item={item} />)}
        </ul>
    )
}

export default List