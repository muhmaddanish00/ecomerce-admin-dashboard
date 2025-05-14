import RevenueCharts from '@/components/RevenueCharts'
import React from 'react'

function dashboardPage() {
  return (

       <div className='space-y-8'>
        {/* cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='bg-white p-4 rounded shadow text-center'>
                <p className='text-sm text-gray-500'>Total Orders</p>
                <h3 className='text-2xl font-bold'>210</h3>

            </div>
            <div className='bg-white text-center rounded shadow p-4'>
                <p className='text-sm text-gray-500'>
                    Total Sales
                </p>
                <h3 className='text-2xl font-bold'>$7,250</h3>
            </div>
            <div className='bg-white p-4 rounded shadow text-center'>
                <p className='text-sm text-gray-500'>
                    Product in Stock
                </p>
                <h3 className='text-2xl font-bold'>
                    85
                </h3>

            </div>
            <div className='bg-white p-4 rounded shadow text-center'>
                <p className='text-sm text-gray-500'>
                    Low Inventory
                </p>
                <h3 className='text-2xl font-bold'>
                    5
                </h3>

            </div>
        </div>
        {/* chart */}
        <RevenueCharts/>
       </div>
      
    
  )
}

export default dashboardPage
