"use client";

import { categories } from "@/constants/CategoriesData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
  // Handle the change of category by updating the URL search parameters
  const params = new URLSearchParams(searchParams); // Create a new URLSearchParams object from the current search parameters
  params.set("category", value || "all"); // Set the 'category' parameter to the new value, or 'all' if the value is null
  router.push(`${pathname}?${params.toString()}`, { scroll: false }); // Push the new URL with updated search parameters to the router without scrolling to the top
};

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg text-sm mb-4">
      {categories.map((category) => (
        <button
          className={`flex items-center justify-center gap-2 px-2 py-1 rounded-md cursor-pointer border ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
