import { Minus, Trash2 } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import { useLanguage } from '../context/LanguageContext';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const { t } = useLanguage();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-section">
        <h2>{t('cart')}</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <div className="cart-header">
        <h2>{t('cart')}</h2>
        <button onClick={() => dispatch(clearCart())} className="clear-button">
          <Trash2 size={16} />
          <span>Clear</span>
        </button>
      </div>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
            </div>
            <div className="cart-item-controls">
              <span className="cart-item-quantity">×{item.quantity}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="remove-button"
                aria-label="Remove item"
              >
                <Minus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <span>{t('total')}</span>
        <span className="total-amount">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
