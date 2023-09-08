import React, { useState } from 'react';

function Form({ addNewItem }) {

    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
        stock: "",

    })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault()
        const newItem = {
            name: form.name,
            price: form.price,
            description: form.description,
            category: form.category,
            image: form.image,
            stock: form.stock
        }
        fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem),
        })
            .then(res => res.json())
            .then(addNewItem)
    }




    return (
        <div className='form'>
            <button >Add Item</button>
            <form onSubmit={handleSubmit}>

                <input type="text"
                    name="name"
                    placeholder="Product Name" value={form.name} onChange={handleChange} />


                <input type="text" name="price" placeholder="Product Price" value={form.price} onChange={handleChange} />

                <input type="text"

                    name="description"
                    placeholder="Product Description" value={form.description} onChange={handleChange} />

                <input type="text"
                    name="category" placeholder="Product Category" value={form.category} onChange={handleChange} />

                <input type="text" name="image" placeholder="Product Image" value={form.image} onChange={handleChange} />

                <input type="text" name='quantity' placeholder="Product Quantity" value={form.quantity} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form >
        </div>
    )
}

export default Form; 