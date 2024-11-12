'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import suchEmpty from '@/assets/images/empty.jpg';
import CartItem from '@/components/cart/CartItem';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { checkout, selectCartItems } from '@/features/cart/cartSlice';

function Cart() {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const completeCheckout = () => {
    alert('Yay! Checkout complete! Your cart will be empty now.');
    router.push('/');
    dispatch(checkout());
  };

  return (
    <main className="flex flex-col home-padding gap-5 py-2 w-full items-center">
      <div className="text-2xl">Your Cart</div>
      <div className="grid grid-cols-1 gap-3">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, idx) => (
              <CartItem key={idx} item={item} />
            ))}
            <button
              onClick={completeCheckout}
              className={`px-5 py-3 bg-accent-blue text-white rounded-md font-normal text-base transition-opacity ease-in-out duration-500 hover:opacity-75`}
            >
              Checkout
            </button>
          </>
        ) : (
          <Image alt="empty" src={suchEmpty} className="w-[31.25rem]" />
        )}
      </div>
    </main>
  );
}

export default Cart;
