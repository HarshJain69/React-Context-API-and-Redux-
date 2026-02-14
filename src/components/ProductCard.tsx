import { Plus } from 'lucide-react';
import { useAppDispatch } from '../store';
import { addToCart } from '../store/slices/cartSlice';
import type { Product } from '../store/slices/productSlice';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const { t } = useLanguage();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    }));
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <button onClick={handleAddToCart} className="add-button">
        <Plus size={16} />
        <span>{t('addToCart')}</span>
      </button>
    </div>
  );
};
