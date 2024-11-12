import { addToCart, removeFromCart } from '@/features/cart/cartSlice';
import { CartItem as CartItemType } from '@/features/cart/types';
import { useGetProductByIdQuery } from '@/features/product/productAPI';
import { useAppDispatch } from '@/hooks/redux';

interface Props {
  item: CartItemType;
}

function CartItem({ item }: Props) {
  const { isLoading, data: product } = useGetProductByIdQuery(item.id);
  const dispatch = useAppDispatch();

  if (isLoading) return <CartItem.Skeleton />;

  return (
    // Product row
    <div className="flex flex-row gap-5 items-center justify-between bg-white rounded-md p-5">
      <div className="flex flex-row items-center gap-5">
        <img src={product?.image} alt={product?.title} className="w-20 h-20 object-contain" />
        <div className="text-xs sm:text-sm lg:text-base">{product?.title}</div>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div className="text-xs sm:text-sm lg:text-base">${parseFloat((product!.price * item.quantity).toFixed(4))}</div>
        <div className="flex flex-row gap-2.5 items-center">
          <button onClick={() => dispatch(removeFromCart(item.id))} className="w-8 h-8 bg-light-gray rounded-md items-center justify-center">
            -
          </button>
          <div className="text-xs sm:text-sm lg:text-base">{item.quantity}</div>
          <button onClick={() => dispatch(addToCart(item.id))} className="w-8 h-8 bg-light-gray rounded-md items-center justify-center">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.Skeleton = () => (
  <div className="flex flex-row gap-5 items-center justify-start bg-white rounded-md p-5 animate-pulse w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] ">
    <div className="w-20 h-20 bg-light-gray rounded-md"></div>
    <div className="w-1/2 h-4 bg-light-gray rounded-md"></div>
    <div className="w-1/4 h-4 bg-light-gray rounded-md"></div>
  </div>
);

export default CartItem;
