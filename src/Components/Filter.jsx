// component that categories the news
import React from "react";

const categories = [
  "Business",
  "Technology",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
];

const CategoryFilter = ({ selectedCategory, onSelectCategory,onIsOpen }) => {

  return (

      <select
        value={selectedCategory}
        onChange={(e) => {
          onSelectCategory(e.target.value);
          onIsOpen(false)
        }}
        className="border-none outline-none rounded p-2 "
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option
            key={category}
            value={category}
            className="bg-transparent text-white"
           
          >
            {category}
          </option>
        ))}
      </select>
  );
};

export default CategoryFilter;
