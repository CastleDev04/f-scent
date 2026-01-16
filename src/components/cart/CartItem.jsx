import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const price = item.selectedDecant.price;

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1 ml-4">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">
          Decant: {item.selectedDecant.size}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}>
            <Minus size={16} />
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}>
            <Plus size={16} />
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-semibold">
          Gs. {(price * item.quantity).toLocaleString()}
        </p>
        <p className="text-xs text-gray-500">
          Gs. {price.toLocaleString()} c/u
        </p>

        <button
          onClick={() => removeFromCart(item.cartId)}
          className="text-red-500 mt-2"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
