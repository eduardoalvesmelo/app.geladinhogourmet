import { Link } from 'react-router-dom';
import { Clock, Star, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './RecipeCard.css';

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  category: string;
  rating: number;
}

const RecipeCard = ({ id, title, image, prepTime, category, rating }: RecipeCardProps) => {
  const { toggleFavorite, isFavorite } = useApp();
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the recipe page
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <Link to={`/recipe/${id}`} className="recipe-card glass-panel fade-in-up">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" loading="lazy" />
        <span className="card-category">{category}</span>
        <button 
          className="favorite-btn" 
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart size={20} fill={favorite ? "var(--primary)" : "transparent"} color={favorite ? "var(--primary)" : "white"} />
        </button>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
        <div className="card-meta">
          <div className="meta-item">
            <Clock size={16} className="meta-icon" />
            <span>{prepTime}</span>
          </div>
          <div className="meta-item rating">
            <Star size={16} fill="currentColor" className="meta-icon" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
