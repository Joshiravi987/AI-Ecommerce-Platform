function ProductForm({

    name,
    setName,

    description,
    setDescription,

    price,
    setPrice,

    quantity,
    setQuantity,

    editing,

    addProduct,
    updateProduct

}) {

    return (

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md">

            <h2 className="text-2xl mb-4 font-bold">

                {
                    editing
                        ? "Update Product"
                        : "Add Product"
                }

            </h2>

            <input
                type="text"
                placeholder="Product Name"
                className="w-full p-3 mb-3 rounded bg-gray-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                className="w-full p-3 mb-3 rounded bg-gray-800"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                className="w-full p-3 mb-3 rounded bg-gray-800"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Quantity"
                className="w-full p-3 mb-3 rounded bg-gray-800"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />

            <button
                onClick={
                    editing
                        ? updateProduct
                        : addProduct
                }
                className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg w-full"
            >

                {
                    editing
                        ? "Update Product"
                        : "Add Product"
                }

            </button>

        </div>
    );
}

export default ProductForm;