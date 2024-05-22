import React from "react";
import Image from "next/image";

export default function NavIcons() {
  return (
    <div className="flex gap-4">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="notification"
      />
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="notification"
      />
      <Image
        src="/cart.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt="notification"
      />
    </div>
  );
}
