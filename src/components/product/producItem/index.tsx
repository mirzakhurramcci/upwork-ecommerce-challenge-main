'use client';

import Image from 'next/image';
import { useAppDispatch } from '@/hooks/redux';
import star from '@/assets/images/svg/star.svg';
import { Product } from '@/features/product/types';
import { addToCart } from '@/features/cart/cartSlice';

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-between gap-2.5 p-5 bg-white rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="w-40 h-40 object-contain" />
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
      <button
        onClick={() => dispatch(addToCart(product.id))}
        className="w-full px-10 py-3 hover:text-white hover:bg-accent-blue text-accent-blue border-2 border-solid border-accent-blue rounded-md font-normal text-base transition-colors ease-in-out duration-500"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;
