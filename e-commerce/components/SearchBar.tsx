"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between bg-gray-100 gap-4 rounded-md p-2 flex-1"
      onSubmit={() => handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="outline-none flex-1 bg-transparent"
      />
      <button>
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
}
