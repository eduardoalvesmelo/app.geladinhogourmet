import { useParams, Link } from 'react-router-dom';
import { Clock, Star, ArrowLeft, CheckCircle2, Heart, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MOCK_RECIPES } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const { isFavorite, toggleFavorite, isCompleted, markAsCompleted } = useApp();
  
  // Use the actual ID from params or default to '1' if not found
  const recipe = MOCK_RECIPES.find(r => r.id === id) || MOCK_RECIPES[0];

  const favorite = isFavorite(recipe.id);
  const completed = isCompleted(recipe.id);

  // Sugestões inteligentes (mesma categoria, excluindo a atual)
  const suggestions = MOCK_RECIPES
    .filter(r => r.category === recipe.category && r.id !== recipe.id)
    .slice(0, 4);

  return (
    <div className="recipe-detail-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          Voltar para Início
        </Link>
        
        <div className="recipe-header fade-in-up">
          <div className="recipe-image-wrapper">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <button 
              className="favorite-btn" 
              onClick={() => toggleFavorite(recipe.id)}
              style={{ width: '48px', height: '48px', top: '1.5rem', left: '1.5rem' }}
            >
              <Heart size={28} fill={favorite ? "var(--primary)" : "transparent"} color={favorite ? "var(--primary)" : "white"} />
            </button>
          </div>
          
          <div className="recipe-info glass-panel">
            <span className="badge">{recipe.category}</span>
            <h1 className="recipe-title">{recipe.title}</h1>
            
            <div className="recipe-meta">
              <div className="meta-item">
                <Clock className="meta-icon" />
                <div>
                  <span className="meta-label">Preparo</span>
                  <span className="meta-value">{recipe.prepTime}</span>
                </div>
              </div>
              <div className="meta-item">
                <Star fill="currentColor" className="meta-icon rating-icon" />
                <div>
                  <span className="meta-label">Avaliação</span>
                  <span className="meta-value">{recipe.rating} / 5</span>
                </div>
              </div>
              <div className="meta-item">
                <CheckCircle2 className="meta-icon" />
                <div>
                  <span className="meta-label">Rendimento</span>
                  <span className="meta-value">{recipe.yield}</span>
                </div>
              </div>
            </div>
            
            <button 
              className={`btn w-full mt-4 ${completed ? 'btn-outline' : 'btn-primary'}`}
              onClick={() => markAsCompleted(recipe.id)}
              disabled={completed}
              style={completed ? { backgroundColor: '#f0fdf4', borderColor: 'var(--accent)', color: 'var(--accent)' } : {}}
            >
              {completed ? (
                <>
                  <Award size={20} /> Receita Concluída (+25 pts)
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} /> Marcar como Feito!
                </>
              )}
            </button>
          </div>
        </div>

        <div className="recipe-content grid grid-cols-1 md:grid-cols-3 fade-in-up stagger-2">
          <div className="ingredients-section glass-panel">
            <h2 className="section-heading">Ingredientes</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="ingredient-item">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="instructions-section glass-panel md:col-span-2">
            <h2 className="section-heading">Modo de Preparo</h2>
            <div className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="instruction-step">
                  <div className="step-number">{index + 1}</div>
                  <p className="step-text">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sugestões Inteligentes */}
        {suggestions.length > 0 && (
          <div className="suggestions-section fade-in-up stagger-3" style={{ marginTop: '5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              Você também pode gostar...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {suggestions.map(suggestion => (
                <RecipeCard key={suggestion.id} {...suggestion} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
