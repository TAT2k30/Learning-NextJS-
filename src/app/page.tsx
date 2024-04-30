'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [boolean, setBoolean] = useState(false);

  return (
    <section className="bg-dark-1 w-screen h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Awesome Website!</h1>
        <p className="text-gray-800 mb-6">Click the button below to toggle something:</p>
        <Button variant={"outline"} onClick={() => { setBoolean(!boolean) }}>
          {boolean ? "Hide Content" : "Show Content"}
        </Button>
        {boolean && (
          <div className="mt-4">
            <p className="text-gray-600">Here's some hidden content!</p>
          </div>
        )}
      </div>
    </section>
  );
}
