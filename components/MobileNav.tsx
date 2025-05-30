'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Footer from './Footer'

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[104px]'>
      <Sheet>
  <SheetTrigger>
    <Image 
     src='/icons/hamburger.svg'
     width={30}
      height={30}
      alt='Menu Icon'
      className='cursor-pointer'
    />
  </SheetTrigger>
  <SheetContent side='left' className='border-none bg-white'>
  <Link href='/'
        className=' cursor-pointer flex items-center gap-1 px-4'
       >
        <Image 
        src='/icons/logo.svg'
        width={34}
        height={34}
        alt='Horizion Logo'
        />
        <h1 className='text-26 ibm-plex-serif font-bold text-black-'>Horizion</h1>
        </Link>
            <div className="mobilenav-sheet">
                <SheetClose asChild>
                  <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
                return (
                  <SheetClose asChild key={item.route}>
            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-blue-400':isActive})}>
                               
                                <Image 
                                src={item.imgURL}
                                  alt={item.label}
                                  width={20}
                                  height={20}
                                  className={cn({
                                    'brightness-[1] invert-0':isActive
                                  })}
                                />
                                <p className={cn({'text-16 font-semibold text-blue-950': 'text-white',
                                  isActive})}>
                                  {item.label}
                                </p>
                              
                              </Link>
                  </SheetClose>
                  
                )
              })} 

                USER 
                  </nav>
                </SheetClose>
                <Footer user={user} type="mobile"/>
            </div>
        

  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav
