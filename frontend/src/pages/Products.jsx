import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/products");

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post("http://localhost:8081/api/products", {
        name,
        description,
        price,
        quantity,
      });

      alert("Product Added");

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/products/${id}`);

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}

      <div className="bg-black p-5 shadow-lg flex justify-between">
        <h1 className="text-3xl font-bold text-blue-400">AI Ecommerce</h1>

        <button className="bg-red-500 px-4 py-2 rounded-lg">Logout</button>
      </div>

      {/* Add Product Form */}

      <div className="p-8">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md">
          <h2 className="text-2xl mb-4 font-bold">Add Product</h2>

          <input
            type="text"
            placeholder="Product Name"
            className="w-full p-3 mb-3 rounded bg-gray-800"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            className="w-full p-3 mb-3 rounded bg-gray-800"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 mb-3 rounded bg-gray-800"
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-3 mb-3 rounded bg-gray-800"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            onClick={addProduct}
            className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg w-full"
          >
            Add Product
          </button>
        </div>

        {/* Product Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 p-5 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-blue-400">
                {product.name}
              </h2>

              <p className="mt-3 text-gray-300">{product.description}</p>

              <p className="mt-3">₹ {product.price}</p>

              <p>Stock: {product.quantity}</p>

              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg mt-5"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
