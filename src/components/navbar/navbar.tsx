"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ModeToggle } from '../mode-toggle'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:px-14 md:py-6 font-semibold  bg-opacity-40 bg-black z-50' >
      
      {/* Logo Section */}
      <section>
        <Image src={'/peerspace.svg'} alt='logo' height={80} width={180} />
      </section>
      
      {/* Navigation */}
      <nav className='flex items-center gap-6 text-lg'>
        
        {/* Desktop Menu */}
        <section className='hidden gap-8 items-center md:flex'>
          <Link href={'#'}>🌐</Link>
          <Link href={'#'}>Browse Spaces</Link>
          <Link href={'#'}>List Your Space</Link>
          <Button className='font-semibold text-lg' variant={'link'}>Log In</Button>
          <Button className='rounded-[2px] font-semibold text-lg' variant={'secondary'}>Sign Up</Button>
        </section>

        {/* Mobile Menu Button */}
        <Button
          className='md:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label='Toggle menu'
          variant={'outline'}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <section className='absolute top-[90px] right-0 left-0 z-50 shadow-lg bg-black text-white p-5 flex flex-col items-center md:hidden gap-2 bg-transparent'>
          <Link href={'#'}>🌐</Link>
          <Link href={'#'}>Browse Spaces</Link>
          <Link href={'#'}>List Your Space</Link>
          <Button className='font-semibold text-md w-full text-white hover:text-muted-foreground' variant={'link'}>Log In</Button>
          <Button className='rounded-[2px] font-semibold text-md' variant={'default'}>Sign Up</Button>
          <ModeToggle />
        </section>
      )}
    </header>
  )
}
