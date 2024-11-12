import { Product } from "@/features/product/types";
import ProductItem from "@/components/product/producItem";
export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <main className="flex flex-col home-padding gap-5 py-2 w-full items-center">
      <div className="text-2xl">Product Detail</div>
      <div className="grid grid-cols-1">
        <ProductItem product={product} />
      </div>
    </main>
  );
}

export const getProduct = async (productId: string) => {
  // SSR
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Error fetching product");
  }
  const product: Product = await res.json();

  return product;
};
