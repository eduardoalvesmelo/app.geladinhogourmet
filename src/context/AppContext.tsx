import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AppContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  score: number;
  level: string;
  addScore: (points: number) => void;
  completedRecipes: string[];
  markAsCompleted: (id: string) => void;
  isCompleted: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const calculateLevel = (score: number) => {
  if (score < 50) return 'Iniciante';
  if (score < 150) return 'Aprendiz';
  if (score < 300) return 'Geladeiro';
  if (score < 500) return 'Especialista';
  return 'Mestre Sorveteiro';
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Load from local storage or default
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('gelato_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('gelato_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [completedRecipes, setCompletedRecipes] = useState<string[]>(() => {
    const saved = localStorage.getItem('gelato_completed');
    return saved ? JSON.parse(saved) : [];
  });

  const level = calculateLevel(score);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('gelato_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('gelato_score', score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem('gelato_completed', JSON.stringify(completedRecipes));
  }, [completedRecipes]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const markAsCompleted = (id: string) => {
    if (!completedRecipes.includes(id)) {
      setCompletedRecipes(prev => [...prev, id]);
      addScore(25); // 25 points for completing a recipe
    }
  };

  const isCompleted = (id: string) => completedRecipes.includes(id);

  return (
    <AppContext.Provider value={{
      favorites,
      toggleFavorite,
      isFavorite,
      score,
      level,
      addScore,
      completedRecipes,
      markAsCompleted,
      isCompleted
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
