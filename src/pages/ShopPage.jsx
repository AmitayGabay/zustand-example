import React from 'react'
import data from '../data/products.json';
import Card from '../components/Card';

export default function ShopPage() {
    console.log(data);

    return (
        <div className='shopPage'>
            {data.map((product) =>
                <Card key={product.id} product={product} />
            )}
        </div>
    )
}
