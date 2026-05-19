import { useApp } from '../context/AppContext';
import { MOCK_RECIPES } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favorites } = useApp();
  
  const favoriteRecipes = MOCK_RECIPES.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="section favorites-page pt-0">
      <div className="container">
        <h1 className="section-title fade-in-up" style={{ textAlign: 'left', marginBottom: '1rem' }}>Meus Favoritos</h1>
        <p className="fade-in-up stagger-1" style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          As receitas que você mais amou, todas em um só lugar.
        </p>

        {favoriteRecipes.length === 0 ? (
          <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', borderRadius: '20px' }}>
            <Heart size={48} color="var(--text-secondary)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Nenhum favorito ainda</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Navegue pelas receitas e clique no coração para salvá-las aqui.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 fade-in-up stagger-2">
            {favoriteRecipes.map(recipe => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
