'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './header.module.css';
import logo from '@/assets/images/logo.jpg';
import { useAppSelector } from '@/hooks/redux';
import { totalCartItems } from '@/features/cart/cartSlice';

function Header() {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    // header is sticky when scrolled out of viewport
    const handleScroll = () => {
      const offset = window.scrollY;
      const thresholdPassed = offset > (window.innerWidth < 768 ? 70 : 100);
      setSticky(thresholdPassed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const totalItemsCount = useAppSelector(totalCartItems);
  return (
    <nav
      className={`bg-bg absolute top-0 left-0 flex flex-row w-full py-2.5 px-5 md:px-10 md:py-[1.875rem] lg:py-8 justify-between items-center gap-5 transition-all duration-300 ease-in z-50  ${
        isSticky ? `${styles['active_sticky']} drop-shadow-xl` : ''
      }`}
    >
      <Link href={'/'}>
        <img
          src={logo.src}
          alt="logo"
          className={
            isSticky
              ? 'transition-all ease-in-out w-[1.4375rem] lg:w-[1.7875rem] xl:w-[2.5rem] 2xl:w-[3.5rem]'
              : 'transition-all ease-in-out w-[1.4375rem] sm:w-[1.7875rem] md:w-[2.5rem] lg:w-[3.5rem] flex-shrink-0'
          }
        />
      </Link>
      <Link href={'/cart'} className="px-10 py-3 bg-white rounded-[3.125rem] justify-center items-center gap-2.5 inline-flex">
        <div className="text-black text-xs sm:text-sm lg:text-base font-normal whitespace-nowrap shrink-0">CART ({totalItemsCount})</div>
      </Link>
    </nav>
  );
}

export default Header;
