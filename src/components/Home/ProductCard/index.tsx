import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/features/product/types';
import star from '@/assets/images/svg/star.svg';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className="flex flex-col items-center justify-between gap-2.5 p-5 bg-white rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="w-40 h-40 object-contain" />
      <div className="flex flex-col items-center gap-1">
        <div className="text-center">
          <div className="text-sm font-normal">{product.title}</div>
          <div className="text-sm font-normal">{product.category}</div>
          <div className="text-sm font-normal">${product.price}</div>
        </div>
        <div className="flex items-center text-center gap-1.5">
          <div className="">
            <Image src={star} alt="star" className="w-4 h-4 text-yellow-300" />
          </div>
          <p className="text-sm font-bold text-black">{product.rating.rate}</p>
          <span className="w-1 h-1 bg-dark-grey rounded-full"></span>
          <a href="#" className="text-sm font-medium text-black underline hover:no-underline">
            {product.rating.count} reviews
          </a>
        </div>
      </div>
    </Link>
  );
};

ProductCard.Skeleton = () => (
  <div className="flex flex-col items-center justify-between gap-2.5 p-5 bg-white rounded-md shadow-md animate-pulse">
    <div className="w-40 h-40 bg-light-gray rounded-md"></div>
    <div className="w-full h-4 bg-light-gray rounded-md"></div>
    <div className="w-3/4 h-4 bg-light-gray rounded-md"></div>
    <div className="w-1/2 h-4 bg-light-gray rounded-md"></div>
    <div className="w-1/4 h-4 bg-light-gray rounded-md"></div>
  </div>
);
export default ProductCard;
