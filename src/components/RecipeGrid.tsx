import React from 'react';
import RecipeCard from './RecipeCard';
import CategoryFilter from './CategoryFilter';
import { Recipe } from '../types/Recipe';

interface RecipeGridProps {
  recipes: Recipe[];
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onRecipeClick: (recipe: Recipe) => void;
}

export default function RecipeGrid({ 
  recipes, 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  onRecipeClick 
}: RecipeGridProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From quick breakfast ideas to gourmet dinners, find the perfect recipe for any occasion.
          </p>
        </div>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onRecipeClick(recipe)}
            />
          ))}
        </div>
        
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found. Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}