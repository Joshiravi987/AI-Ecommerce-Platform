function ProductCard({

    product,

    editProduct,

    deleteProduct,

    addToCart

}) {

    return (

        <div className="product-card shadow-lg">

            <h2 className="text-2xl font-bold text-blue-400">
                {product.name}
            </h2>

            <p className="mt-3 text-gray-300">
                {product.description}
            </p>

            <p className="mt-3">
                ₹ {product.price}
            </p>

            <p>
                Stock: {product.quantity}
            </p>

            <button
                onClick={() => editProduct(product)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg mt-5 mr-3"
            >
                Edit
            </button>

<button
    onClick={() => addToCart(product)}
    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mt-5 mr-3"
>
    Add To Cart
</button>
            <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg mt-5"
            >
                Delete
            </button>

        </div>
    );
}

export default ProductCard;