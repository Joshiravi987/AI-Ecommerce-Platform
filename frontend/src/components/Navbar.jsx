import { useNavigate } from "react-router-dom";
function Navbar({ handleLogout }) {

    const navigate = useNavigate();
    return (

        <div className="bg-black p-5 shadow-lg flex justify-between">

            <h1 className="page-title">
                AI Ecommerce
            </h1>
<button
    onClick={() => navigate("/cart")}
    className="bg-green-500 px-4 py-2 rounded-lg mr-3"
>
    Cart
</button>
            <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg"
            >
                Logout
            </button>

        </div>
    );
}

export default Navbar;