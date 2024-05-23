"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="notification"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-xl z-20">
          <Link href="/">Profiel</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="notification"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          className="cursor-pointer"
          alt="notification"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-shu rounded-full text-white flex items-center justify-center text-xs">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
