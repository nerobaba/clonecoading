"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        width={28}
        height={28}
        alt="menu"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute w-full bg-black left-0 top-20 h-[calc(100vh-80px)] text-white text-xl flex flex-col gap-8 items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/">Shops</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
