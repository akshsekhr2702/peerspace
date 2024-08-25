import Link from "next/link";
import { categories } from "../home/object/activities.obj";
import Image from "next/image";
import { BedIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col p-4 md:p-10 ">
      <div className="flex flex-col md:flex-row md:justify-evenly items-start">
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <Image src={'/peer.svg'} alt="Peer logo" height={100} width={100} />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
          {categories.map((category, index) => (
            <div key={index} className="w-full md:w-auto">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{category.category}</h3>
              <ul className="text-muted-foreground list-none p-0">
                {category.items.map((item, idx) => (
                  <li className="p-1 md:p-2" key={idx}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 py-4 flex flex-col gap-2  mt-4">
        <p className="text-sm text-center md:text-end border-b-2 py-2 border-gray-300">©️ Peerspace</p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">🌐 English | United States</div>
          <div className="flex gap-1 mt-2 md:mt-0">
            <BedIcon className="text-gray-600" />
            <BedIcon className="text-gray-600" />
            <BedIcon className="text-gray-600" />
            <BedIcon className="text-gray-600" />
            <BedIcon className="text-gray-600" />
            <BedIcon className="text-gray-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}
