import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Product.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import {toast} from "react-toastify";


function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

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

  const editProduct = (product) => {
    setEditing(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
  };


  const addProduct = async () => {
    try {
      if (!name || !description || !price || !quantity) {

    toast.error("All fields are required");

    return;
}

if (price <= 0 || quantity <= 0) {

    toast.error("Price and quantity must be greater than 0");

    return;
}
      await axios.post("http://localhost:8081/api/products", {
        name,
        description,
        price,
        quantity,
      });

     toast.success("Product Added Successfully");

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    try {
      if (!name || !description || !price || !quantity) {

    toast.error("All fields are required");

    return;
}
if (price <= 0 || quantity <= 0) {

    toast.error("Price and quantity must be greater than 0");

    return;
}
      await axios.put(`http://localhost:8081/api/products/${editing}`, {
        name,
        description,
        price,
        quantity,
      });

      toast.success("Product Updated Successfully");

      setEditing(null);
      setName("");
      setDescription("");
      setPrice("");
      setQuantity("");

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };
const addToCart = async (product) => {

    try {

        await axios.post(
            "http://localhost:8081/api/cart",
            {

                productName: product.name,

                price: product.price,

                quantity: 1
            }
        );

        toast.success("Added To Cart");

    } catch (error) {

        console.error(error);

        toast.error("Failed To Add Cart");
    }
};
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/products/${id}`);

      toast.success("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}

      <Navbar handleLogout={handleLogout} />

      {/* Add Product Form */}

      <div className="p-8">
        <ProductForm
  name={name}
  setName={setName}

  description={description}
  setDescription={setDescription}

  price={price}
  setPrice={setPrice}

  quantity={quantity}
  setQuantity={setQuantity}

  editing={editing}

  addProduct={addProduct}
  updateProduct={updateProduct}
/>

        {/* Product Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
           <ProductCard
  key={product.id}

  product={product}

  editProduct={editProduct}

  deleteProduct={deleteProduct}

  addToCart={addToCart}
/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
