'use client';

interface Props {
  category: string;
  active?: boolean;
  onClick: () => void;
}

function CategoryButton({ category, onClick, active = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={`mb-4 md:mb-0 px-3 py-1 shrink-0 whitespace-nowrap md:px-5 md:py-3 bg-light-gray rounded-md font-normal text-xs sm:text-sm lg:text-base transition-colors ease-in-out duration-500 hover:text-white hover:bg-accent-red  ${
        active ? 'text-white !bg-accent-red' : ''
      }`}
    >
      {category}
    </button>
  );
}

CategoryButton.Skeleton = () => <div className="w-14 h-12 sm:w-16 md:w-14 lg:w-20 bg-light-gray rounded-md animate-pulse"></div>;

export default CategoryButton;
