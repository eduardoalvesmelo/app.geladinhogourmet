import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IceCream2, Search, Menu, X, Bell, Heart, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { score, level } = useApp();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar glass-panel">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <IceCream2 className="logo-icon" size={28} />
          <span>Gelato<span className="logo-accent">Gourmet</span></span>
        </Link>
        
        <nav className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>Início</Link>
          <Link to="/#categories" className="nav-link" onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => {
              document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>Categorias</Link>
          <Link to="/#dicas" className="nav-link" onClick={() => {
            setIsMenuOpen(false);
            setTimeout(() => {
              document.getElementById('dicas')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}>Dicas</Link>
          <Link to="/favorites" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Heart size={16} /> Favoritos
            </span>
          </Link>
        </nav>
        
        <div className="navbar-actions">
          {/* User Profile Stub */}
          <div className="user-profile hide-mobile">
            <div className="user-info">
              <span className="user-level">{level}</span>
              <span className="user-score">🌟 {score} pts</span>
            </div>
            <div className="user-avatar">
              <User size={20} />
            </div>
          </div>

          {/* Notifications Stub */}
          <div className="notifications-wrapper">
            <button 
              className="btn-icon relative" 
              aria-label="Notifications"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} />
              <span className="notification-badge"></span>
            </button>
            
            {showNotifications && (
              <div className="notifications-dropdown glass-panel">
                <h4>Notificações</h4>
                <div className="notification-item unread">
                  <p><strong>Bem-vindo!</strong></p>
                  <p>Comece a explorar e ganhe pontos.</p>
                </div>
                <div className="notification-item">
                  <p>Nova receita de Morango adicionada!</p>
                </div>
              </div>
            )}
          </div>

          <button className="btn-icon" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="btn-icon mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
