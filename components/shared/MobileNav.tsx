import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { Separator } from '@/components/ui/separator'
import NavItems from './NavItems'

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <CiMenuFries className='ml-2 font-bold' size={32} />
        </SheetTrigger>
        <SheetContent className='flex flex-col bg-white md:hidden'>
          <Link href='/' className='w-36'>
            <Image src='/assets/images/logo.svg' width={128} height={38} alt='logo' />
          </Link>
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
