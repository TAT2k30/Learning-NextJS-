'use client'
import { Button } from "@/components/ui/button";
import Card from "./Card";
import { useState } from "react";
import Images from "./Image/Image";
export default function Home() {
  const [boolean , setBoolean] = useState(false);
  return (
    <section className="bg-dark-1 w-[100vw] h-[100vh]">
      <Button variant={"outline"} onClick={() => {setBoolean(!boolean)}}>Click me</Button>
      <Card setStyle={boolean}/>
      <Images setStyle={boolean}/>
    </section>
  );
}
