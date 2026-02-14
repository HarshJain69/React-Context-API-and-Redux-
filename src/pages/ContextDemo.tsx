import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const ContextDemo = () => {
  const { user, login, isAuthenticated } = useAuth();
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2>Context API Demo</h2>
        <p className="section-description">
          Global state management using React Context API
        </p>
      </div>

      <div className="context-grid">
        <div className="context-card">
          <h3>Authentication Context</h3>
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="email"
                placeholder={t('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                required
              />
              <input
                type="password"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                required
              />
              <button type="submit" className="button">
                <LogIn size={16} />
                <span>{t('login')}</span>
              </button>
            </form>
          ) : (
            <div className="status-info">
              <p>Status: Authenticated</p>
              <p>User: {user?.name}</p>
              <p>Email: {user?.email}</p>
            </div>
          )}
        </div>

        <div className="context-card">
          <h3>Theme Context</h3>
          <div className="status-info">
            <p>Current theme: {theme}</p>
            <p>Persisted in localStorage</p>
            <p>Toggle using moon/sun icon</p>
          </div>
        </div>

        <div className="context-card">
          <h3>Language Context</h3>
          <div className="status-info">
            <p>Current language: {language.toUpperCase()}</p>
            <p>Translations: {t('welcome')}</p>
            <p>Switch using language selector</p>
          </div>
        </div>
      </div>
    </section>
  );
};
