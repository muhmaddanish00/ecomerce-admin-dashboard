import { useState } from 'react'

import { useProducts } from '@/context/ProductContext';
import Image from 'next/image';



function ProductTable() {
    const { products } = useProducts();
    const [search,setSearch] = useState('');
    const filterProducts = products.filter(product =>product.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <div>
            <h2>Product Inventory</h2>
            <input type="text"
            placeholder='search name'
            value={search}
            className='border px-3 py-1 rounded border-green-500 shadow-2xl'
            onChange={e => setSearch(e.target.value)} />
        </div>
        <table className='w-full text-sm'>
            <thead>
                <tr className='bg-gray-100 text-left p-2'>
                    <th>name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>image</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterProducts.map(product =>(
                        <tr key={product.id}>
                            <td className='p-2'>{product.name}</td>
                            <td className='p-2'>{product.category}</td>
                            <td className='p-2'>{product.price}</td>
                            <td className='p-2'>{product.stock}</td>
                            <td className='p-2'>
                                <Image src={product.image} height={20} width={20} alt='product image' className='object-cover rounded'
                                  unoptimized
                                  />
                            </td>
                               
                                   
                            
                            <td className='p-2'>
                                {
                                product.stock < 5 ? 
                                (<span className='text-red-500 font-semibold'>Low Stock</span>):
                                <span className='text-green-500 font-semibold'>In stock</span>

                                }
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>

      
    </div>
  )
}

export default ProductTable
