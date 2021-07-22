import React from 'react';

const Product = (props) => {
    const { name, id } = props.product;
    const { addToCart } = props;

    return (
        <div style={{ border: '1px solid tomato' }}>
            <h5>{name}</h5>
            <button onClick={() => addToCart(id, name)}>Add to Cart</button>
        </div>
    );
};

export default Product;