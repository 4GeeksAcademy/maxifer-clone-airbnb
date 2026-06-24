import { HomeBrand } from "@/components/features/home/HomeBrand";
import { HomeSearchBar } from "@/components/features/home/HomeSearchBar";
import { HomeUserActions } from "@/components/features/home/HomeUserActions";

interface HomeHeaderProps {
  searchText: string;
  catalogHref: string;
  onSearchChange: (value: string) => void;
}

export const HomeHeader = ({ searchText, catalogHref, onSearchChange }: HomeHeaderProps) => {
  return (
    <header className="border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <HomeBrand />
          <HomeUserActions />
        </div>

        <HomeSearchBar searchText={searchText} catalogHref={catalogHref} onSearchChange={onSearchChange} />
      </div>
    </header>
  );
};
