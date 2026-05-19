import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import TipCard from '../components/TipCard';
import { MOCK_RECIPES } from '../data/recipes';
import { MOCK_TIPS } from '../data/tips';
import './Home.css';

const CATEGORIES = ['Todas', 'Frutas', 'Cremosos', 'Alcoólicos', 'Fitness', 'Infantil', 'Premium'];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredRecipes = activeCategory === 'Todas' 
    ? MOCK_RECIPES 
    : MOCK_RECIPES.filter(recipe => recipe.category === activeCategory);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content fade-in-up stagger-1">
            <h1 className="hero-title">
              Descubra os Melhores <span className="text-gradient">Geladinhos Gourmet</span>
            </h1>
            <p className="hero-subtitle">
              Receitas fáceis, lucrativas e deliciosas para você se refrescar ou criar o seu próprio negócio de sucesso.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Receitas <ArrowRight size={20} />
              </button>
              <button className="btn glass-panel btn-outline" onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
                Explorar Categorias
              </button>
            </div>
          </div>
          <div className="hero-image-container fade-in-up stagger-2">
            <div className="hero-image-wrapper">
              <img src="/geladinho1.png" alt="Geladinho Gourmet" className="hero-image" />
              <div className="floating-badge">
                <span className="badge-text">+50 Receitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section glass-panel" id="categories">
        <div className="container">
           <h2 className="section-title">Encontre por Categoria</h2>
           <div className="categories-grid">
              {CATEGORIES.map((cat, idx) => (
                <div 
                  key={idx} 
                  className={`category-card ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <h3>{cat}</h3>
                  {activeCategory === cat && <Sparkles size={16} className="active-icon" />}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="section" id="popular">
        <div className="container">
          <h2 className="section-title fade-in-up">
            {activeCategory === 'Todas' ? 'Receitas Populares' : `Receitas de ${activeCategory}`}
          </h2>
          {filteredRecipes.length === 0 ? (
            <div className="glass-panel text-center fade-in-up" style={{ padding: '3rem', borderRadius: '20px' }}>
              <p style={{ color: 'var(--text-secondary)' }}>Nenhuma receita encontrada para esta categoria ainda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 fade-in-up stagger-2">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="section" id="dicas">
        <div className="container">
          <h2 className="section-title fade-in-up">Dicas de Ouro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 fade-in-up stagger-2">
            {MOCK_TIPS.map(tip => (
              <TipCard key={tip.id} title={tip.title} content={tip.content} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
