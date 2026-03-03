import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

    const products = [
        { id: 1, name: 'Mobile', desc: 'With call feature' },
        { id: 2, name: 'Laptop', desc: 'High performance device' },
        { id: 3, name: 'Keyboard', desc: 'Mechanical keyboard' }
    ]

    return (
        <div>
            <h1 className="font-extrabold w-100 text-center">Products</h1>

            {products.map((product) => (
                <div key={product.id}>
                    <h3 className="font-bold">{product.name}</h3>
                    
                    <Link 
                        className="text-blue-400"
                        to={`/services/${product.id}`}
                    >
                        View description
                    </Link>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Services