import { useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedDecant, setSelectedDecant] = useState(product.decants[0]);

  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h3 className="font-semibold mt-3">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.brand}</p>

      {/* SELECT DECANT */}
      <select
        className="w-full border rounded mt-3 p-2"
        value={selectedDecant.size}
        onChange={(e) =>
          setSelectedDecant(
            product.decants.find((d) => d.size === e.target.value)
          )
        }
      >
        {product.decants.map((decant) => (
          <option key={decant.size} value={decant.size}>
            {decant.size} - Gs. {decant.price.toLocaleString()}
          </option>
        ))}
      </select>

      <button
        onClick={() => addToCart(product, selectedDecant)}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
