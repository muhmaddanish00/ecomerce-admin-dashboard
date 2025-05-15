'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'



function Sidebar() {
     const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
    
  

    return (
        <>
         {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
        >
          ☰
        </button>
      )}
     
        <div className={`fixed z-40 top-0 left-0 min-h-screen w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:block`}>
            <div>
                <div className='flex m-2 gap-4'>
                    
                        <Link href='/home'>
                        <Image src='/dani.jpg' height={40} width={40} alt='profile' className='rounded-full'/>
                      
                        </Link>
                   
                <Link href='/home'  className='block hover:text-yellow-400'>Home</Link>
                </div>


            {/* <h2 className='text-2xl font-bold mb-8'>Admin</h2> */}
            </div>
            <nav className='space-y-4'>
                <Link href='/dashboard' className='block hover:text-yellow-400'>Dashboard</Link>
                <Link href='/Inventory'  className='block hover:text-yellow-400'>Inventory</Link>
                <Link href='/add-product'  className='block hover:text-yellow-400'>Add-Product</Link>

            </nav>


        </div>
           </>
    )
}

export default Sidebar
