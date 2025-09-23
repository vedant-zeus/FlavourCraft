import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface HeroProps {
  featuredRecipe: Recipe;
  onViewRecipe: (recipe: Recipe) => void;
}

export default function Hero({ featuredRecipe, onViewRecipe }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                Featured Recipe
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {featuredRecipe.title}
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                {featuredRecipe.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-orange-100">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{featuredRecipe.cookTime + featuredRecipe.prepTime} mins</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>{featuredRecipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current" />
                <span>{featuredRecipe.rating}</span>
              </div>
            </div>
            
            <button
              onClick={() => onViewRecipe(featuredRecipe)}
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View Recipe
            </button>
          </div>
          
          <div className="relative">
            <img
              src={featuredRecipe.image}
              alt={featuredRecipe.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
              <span className="text-sm font-semibold text-gray-800">{featuredRecipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}