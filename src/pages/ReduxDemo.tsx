import { useEffect } from 'react';
import { Filter } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchProducts, setFilter } from '../store/slices/productSlice';
import { ProductCard } from '../components/ProductCard';
import { Cart } from '../components/Cart';

export const ReduxDemo = () => {
  const dispatch = useAppDispatch();
  const { items: products, loading, filter } = useAppSelector(state => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <section className="section">
      <div className="section-header">
        <h2>Redux Toolkit Demo</h2>
        <p className="section-description">
          Advanced state management with Redux Toolkit and async thunks
        </p>
      </div>

      <div className="redux-content">
        <div className="products-section">
          <div className="filter-section">
            <Filter size={16} />
            <span>Filter:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => dispatch(setFilter(category))}
                className={`filter-button ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="loading">Loading products...</div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        <Cart />
      </div>
    </section>
  );
};
