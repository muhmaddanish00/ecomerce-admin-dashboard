'use client'
import React from 'react'
import {LineChart,Line,XAxis,YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import salesData from '../data/sales.json'
function RevenueCharts() {
  return (
    <div className='bg-white p-2 rounded-2xl shadow-sm shadow-amber-300'>
        <ResponsiveContainer width= '100%' height= {300} >
            <LineChart data={salesData}>
                <XAxis dataKey= 'date'/>
                <YAxis/>
                <Tooltip/>
                <Line type='monotone' dataKey = 'amount' stroke = '#6366f1' strokeWidth={2}/> 
            </LineChart>


        </ResponsiveContainer>
      
    </div>
  )
}

export default RevenueCharts
