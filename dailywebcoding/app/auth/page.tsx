import { KeyRound } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 h-96 rounded-md border p-5 space-y-5">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Next + Supabase</h1>
        </div>
        <p className="text-sm text-gray-300">Register / SignIn Today 👇</p>
      </div>
    </div>
  );
}

export default page;
