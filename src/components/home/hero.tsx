import Image from "next/image";
import SearchForm from "./search-form";

export default function Hero() {
    const imgAddress = 'https://images.unsplash.com/photo-1519214605650-76a613ee3245?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <main>
        <SearchForm />
        <section className="relative z-0  h-[65vh] w-screen  overflow-hidden ">
        <Image 
        src={imgAddress} 
        alt="" 
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Ensures the image covers the entire area
        quality={100} 
        className="z-10" 
        />
        
      </section>
      <section className="px-5 md:px-14 flex justify-between">
            <div><h1 className="md:text-8xl tracking-tighter text-5xl font-bold relative  z-10  -top-32 md:-top-14">
                Find a space. <br />
                Fulfill your vision.</h1>
        </div>
            <div className="hidden md:flex flex-col items-end px-10 py-5  ">
              <p>
                Production — Superb studio
               
              </p>
              <p className="text-sm font-thin">
              HOUSTON TX, US
              </p>
            </div>
        </section>
    </main>
  );
}
