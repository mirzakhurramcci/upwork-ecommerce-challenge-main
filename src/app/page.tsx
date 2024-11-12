'use client';
import ProductCard from '@/components/Home/ProductCard';
import CategoryButton from '@/components/Home/categoryButton';
import { useGetAllCategoriesQuery, useGetAllProductsQuery, useGetProductsInCategoryQuery } from '@/features/product/productAPI';
import { selectCategory } from '@/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

export default function Home() {
  const { selectedCategory } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { isLoading, data: allCategories } = useGetAllCategoriesQuery();
  const { data: categoryProducts, isFetching: isCategoryProductsFetching } = useGetProductsInCategoryQuery(selectedCategory!, {
    skip: !selectedCategory || selectedCategory === 'All',
  });
  const { data: allProducts, isFetching: allProductsFetching } = useGetAllProductsQuery();

  return (
    <main className="flex min-h-screen flex-col home-padding gap-5 py-2">
      <div className="text-sm sm:text-base md:text-lg xl:text-xl 3xl:text-2x">Available Categories</div>
      <div className="flex gap-2 items-center overflow-auto">
        {isLoading ? (
          Array.from(Array(6).keys()).map((e) => <CategoryButton.Skeleton key={e} />)
        ) : (
          <>
            {['All', ...allCategories!].map((category, idx) => (
              <CategoryButton
                key={idx}
                category={category}
                active={category === selectedCategory}
                onClick={() => dispatch(selectCategory(category))}
              />
            ))}
          </>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isCategoryProductsFetching || allProductsFetching
          ? Array.from(Array(8).keys()).map((e) => <ProductCard.Skeleton key={e} />)
          : (selectedCategory === 'All' ? allProducts : categoryProducts)!.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </main>
  );
}
