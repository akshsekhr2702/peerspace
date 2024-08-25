import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "./object/activities.obj";

export default function Activities() {
  const IMAGE_URL = 'https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <section className="w-full h-auto grid grid-cols-1 md:grid-cols-2 place-content-evenly py-10 md:py-20 bg-white text-black">
      <div className="flex flex-col justify-center px-6 md:px-10 gap-6 md:gap-10 text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            A space for <br />
            every moment
          </h1>
          <p className="mt-4 text-lg md:text-xl">Book a unique space for your activity</p>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center md:justify-start text-muted-foreground font-semibold gap-4 text-lg md:text-2xl">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
          <Button className="mt-6 md:mt-10 text-lg" variant="secondary">
            Browse all activities
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={IMAGE_URL}
          alt="Activity Image"
          height={300}
          width={300}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
