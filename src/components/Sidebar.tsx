'use client'
import Image from 'next/image'
import Link from 'next/link'



function Sidebar() {
    return (
        <div className='w-64 bg-gray-900 text-white min-h-screen p-4'>
            <div>
                <div className='flex m-2 gap-4'>
                    
                        <Link href='/home'>
                        <Image src='/dani.jpg' height={40} width={40} alt='profile' className='rounded-full'/>
                      
                        </Link>
                   
                <Link href='/home'  className='block hover:text-yellow-400'>Home(MD)</Link>
                </div>


            {/* <h2 className='text-2xl font-bold mb-8'>Admin</h2> */}
            </div>
            <nav className='space-y-4'>
                <Link href='/dashboard' className='block hover:text-yellow-400'>Dashboard</Link>
                <Link href='/Inventory'  className='block hover:text-yellow-400'>Inventory</Link>
                <Link href='/add-product'  className='block hover:text-yellow-400'>Add-Product</Link>

            </nav>


        </div>
    )
}

export default Sidebar
