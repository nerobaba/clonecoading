"use client";
import React from "react";
import Image from "next/image";

export default function CartModal() {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart Is Empty</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/24375085/pexels-photo-24375085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Item"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div>
              {/* TITLE */}
              <div>
                <h3>Product Name</h3>
                <div>$49</div>
              </div>
              {/* DESC */}
              <div>available</div>
            </div>
            {/* BOTTOM */}
            <div>
              <span>Qty. 2</span>
              <span>Remove </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
