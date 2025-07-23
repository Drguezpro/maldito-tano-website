// src/components/sections/MenuPage.jsx
import React from 'react';
import menuData from '../../data/menu.json';
import MenuNav from '../sections/MenuNav';
import MenuSection from '../sections/MenuSection';

export default function MenuPage() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-4">
      {/* Navegación lateral en desktop */}
      <MenuNav sections={menuData} />

      {/* Secciones del menú */}
      <div className="flex-1">
        {Object.entries(menuData).map(([category, items]) => (
          <MenuSection
            key={category}
            id={category}
            title={category}
            items={items.map(item => ({
              name: item.name,
              description: item.description,
              price: item.price
            }))}
          />
        ))}
      </div>
    </div>
  );
}
