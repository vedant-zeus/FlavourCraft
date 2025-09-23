import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { recipes } from './data/recipes';
import { Recipe } from './types/Recipe';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert', 'snack'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNavigation = (page: 'home' | 'about' | 'contact') => {
    setCurrentPage(page);
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onBackToHome={() => {
            setSelectedRecipe(null);
            setCurrentPage('home');
          }}
          onNavigate={handleNavigation}
          showBack={true}
        />
        <RecipeDetail recipe={selectedRecipe} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onBackToHome={() => setCurrentPage('home')}
          onNavigate={handleNavigation}
          showBack={false}
        />
        <About />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onBackToHome={() => setCurrentPage('home')}
          onNavigate={handleNavigation}
          showBack={false}
        />
        <Contact />
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onBackToHome={() => setCurrentPage('home')}
        onNavigate={handleNavigation}
        showBack={false}
      />
      <Hero featuredRecipe={recipes[0]} onViewRecipe={setSelectedRecipe} />
      <RecipeGrid 
        recipes={filteredRecipes}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onRecipeClick={setSelectedRecipe}
      />
      <Footer />
    </div>
  );
}

export default App;