import type { CategoryItem } from "@/components/features/home/homeData";
import { HomeCategoryIcon } from "@/components/features/home/HomeCategoryIcon";

interface HomeCategoriesNavProps {
  categories: CategoryItem[];
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const HomeCategoriesNav = ({ categories, activeCategory, onSelectCategory }: HomeCategoriesNavProps) => {
  return (
    <nav
      aria-label="Filtros por categoría"
      className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
    >
      <div className="flex w-max min-w-max items-center gap-6 lg:mx-auto">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`group flex min-w-16 flex-col items-center gap-2 border-b-2 px-1 pb-3 pt-1 text-xs font-medium transition ${
                isActive
                  ? "border-zinc-950 text-zinc-950"
                  : "border-transparent text-zinc-400 hover:border-zinc-300 hover:text-zinc-700"
              }`}
              aria-pressed={isActive}
            >
              <HomeCategoryIcon categoryId={category.id} />
              <span className="whitespace-nowrap text-[0.8rem]">{category.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
