"use client"

import { categories } from "@/constants/CategoriesData";

const Categories = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg text-sm mb-4'>
      {categories.map(category => (
        <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-md cursor-pointer border" key={category.name}>
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default Categories;