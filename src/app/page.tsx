
import Activities from "@/components/home/activities-page";
import Awards from "@/components/home/awards-page";
import Hero from "@/components/home/hero";
import Image from "next/image";

export default function Home() {

  
  return (
    <main className=" flex flex-col">
      <Hero />
      <Awards />
      <Activities />  
    </main>
  
  );
}
