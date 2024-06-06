"use client";
import Image from "next/image";
import React, { useState } from "react";

const lists = [
  {
    id: "1",
    src: "https://images.pexels.com/photos/18888400/pexels-photo-18888400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    src: "https://images.pexels.com/photos/21937089/pexels-photo-21937089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    src: "https://images.pexels.com/photos/18082156/pexels-photo-18082156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    src: "https://images.pexels.com/photos/18454473/pexels-photo-18454473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ProductImages() {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={lists[imgIndex].src}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4 mt-8 justify-between">
        {lists.map((item, index) => (
          <div
            key={item.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setImgIndex(index)}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
