import React, { useEffect, useState } from 'react'
import axios from "axios"

function Products() {
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        const getData = async () => {
            // FIX: Added 'id' to the select parameter so React can use it as a unique key
            const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}&select=id,title,price`)
            console.log(response.data)
            setProducts(response.data.products)
        }
        getData()
    }, [skip])

    return (
        <div>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
                )
            })}

            <button className='bg-blue-800 m-5 p-2 text-white' onClick={() => {
                if (skip > 0) setSkip(skip - 10)
            }}>Prev</button>

            <button className='bg-blue-800 m-5 p-2 text-white' onClick={() => {
                // FIX: Adjusted logic to 184 to ensure the 'Next' skip doesn't 
                // exceed the total items (assuming total is 194)
                if (skip < 184) setSkip(skip + 10)
            }}>Next</button>
        </div>
    )
}

export default Products