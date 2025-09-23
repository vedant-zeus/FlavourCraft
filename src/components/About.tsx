import React from 'react';
import { ChefHat, Heart, Users, Award, Clock, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Cooks', value: '50K+' },
    { icon: ChefHat, label: 'Recipes', value: '1,200+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: Globe, label: 'Countries', value: '25' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Chef & Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years of culinary experience, Sarah brings passion and expertise to every recipe.'
    },
    {
      name: 'Marcus Chen',
      role: 'Recipe Developer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marcus specializes in fusion cuisine and creates innovative recipes that blend cultures.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Nutrition Expert',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Elena ensures all our recipes are not only delicious but also nutritionally balanced.'
    }
  ];

  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About FlavorCraft
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing people together through the joy of cooking. 
            Our mission is to make delicious, home-cooked meals accessible to everyone, 
            regardless of their skill level or experience in the kitchen.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                FlavorCraft was born from a simple belief: that everyone deserves to enjoy 
                amazing food, whether you're a seasoned chef or just starting your culinary journey. 
                Founded in 2020, we started as a small blog sharing family recipes and have grown 
                into a community of food lovers from around the world.
              </p>
              <p>
                Our team of experienced chefs, food writers, and nutrition experts work tirelessly 
                to create recipes that are not only delicious but also approachable. We test every 
                recipe multiple times to ensure they work perfectly in your home kitchen.
              </p>
              <p>
                Today, we're proud to serve over 50,000 home cooks with fresh, seasonal recipes 
                that celebrate flavors from every corner of the globe. From quick weeknight dinners 
                to show-stopping holiday feasts, we're here to inspire your next great meal.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our kitchen"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-semibold">Made with Love</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            FlavorCraft by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Believe In
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                Every recipe is carefully tested and refined to ensure the best possible results 
                in your kitchen. We never compromise on quality or flavor.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Driven</h3>
              <p className="text-gray-600">
                Our community of home cooks inspires us every day. We listen to feedback 
                and create content that truly serves your needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Life Friendly</h3>
              <p className="text-gray-600">
                We understand busy schedules. Our recipes are designed to fit into real life, 
                with practical tips and time-saving techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        
      </div>
    </main>
  );
}