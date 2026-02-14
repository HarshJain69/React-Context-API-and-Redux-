import { Moon, Sun, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAppSelector } from '../store';

export const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const cartItems = useAppSelector(state => state.cart.items);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="logo">State Management</h1>
        </div>
        
        <div className="header-right">
          {isAuthenticated && (
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
            </div>
          )}
          
          <div className="header-controls">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'fr')}
              className="language-select"
              aria-label="Select language"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            
            <button onClick={toggleTheme} className="icon-button" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <div className="cart-badge">
              <ShoppingCart size={18} />
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </div>
            
            {isAuthenticated && (
              <button onClick={logout} className="icon-button" aria-label="Logout">
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
