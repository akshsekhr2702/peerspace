import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Awards() {
  const IMAGE_URL = 'https://img.peerspace.com/image/upload/f_auto,q_auto,dpr_auto,w_1920/1r5qm85fc3feyc1frsij_wjnlrn';
  
  return (
    <section className='bg-gradient-to-b from-[#0c3b45] to-[#041a1f] h-auto min-h-[90vh] w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-10 py-8'>
      <div className='flex justify-center'>
        <Image 
          src={IMAGE_URL} 
          alt='AWARDS' 
          height={800} 
          width={800} 
        />
      </div>
      <div className='flex flex-col justify-center text-center md:text-left'>
        <h4 className='text-xl md:text-lg lg:text-lg py-4'>
          Announcing the 2024
        </h4>
        <Image 
          src={'/open.svg'} 
          alt='award' 
          height={200} 
          width={200} 
          className='mx-auto md:mx-0'
        />
        <h5 className='text-xl md:text-lg lg:text-lg py-4'>
          Discover the best in space rentals{' '}
          <Link href={'/'}>
            <MoveRightIcon className='inline-block ml-2' />
          </Link>
        </h5>
      </div>
    </section>
  );
}
