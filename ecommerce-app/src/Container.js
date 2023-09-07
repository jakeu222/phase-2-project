import React, { useState, useEffect } from 'react'
import List from './List'
// import Card from './Card'
import Search from './Search'
import Form from './Form'


function Container() {
    const [invintory, setInvintory] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setInvintory(data))
    }, [])

    const filteredInvintory = invintory.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    function addNewItem(newItem) {
        setInvintory([...invintory, newItem])
    }

    return (
        <div>
            <Search setSearch={setSearch} />
            <Form addNewItem={addNewItem} />
            <List invintory={filteredInvintory} />

        </div>
    )
}

export default Container