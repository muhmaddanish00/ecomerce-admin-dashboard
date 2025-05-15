'use client'
import { useProducts } from '@/context/ProductContext';
import React, { useState } from 'react'

export default function Add() {
    const { addProduct } = useProducts()
    const [form, setForm] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        image: ''
    })
    const [success, setSuccess] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addProduct({
            id:0,
            name:form.name,
            category:form.category,
            price: parseFloat(form.price),
            stock: parseFloat(form.stock),
            image:form.image

        })
        setSuccess(true)

        console.log('product added', form)
        setSuccess(true);
        setForm({
            name: '', category: '', price: '', stock: '', image: ''
        })

        setTimeout(() => {
            setSuccess(false)
        }, 3000);



    }




    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-gray-500 font-bold text-md'>
                Add New
            </h2>
            <div className='mb-4 flex flex-col'>
                <label className='block'>Product Name</label>
                <input type="text"
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded'
                    required />
            </div>
            <div className='mb-4 flex flex-col'>
                <label className='block'>Category</label>
                <input type="text"
                    name='category'
                    value={form.category}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded'
                    required />
            </div>
            <div className='mb-4 flex flex-col'>
                <label className='block'>Stock</label>
                <input type="number"
                    name='stock'
                    value={form.stock}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded'
                    required />
            </div>
            <div className='mb-4 flex flex-col'>
                <label className='block'>Price</label>
                <input type="number"
                    name='price'
                    value={form.price}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded text-black'
                    required />
            </div>
            <div className='mb-4 flex flex-col'>
                <label className='block'>Product Image</label>
                <input type="text"
                    name='image'
                    value={form.image}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded text-black'
                    required />
            </div>
           
            <button type='submit' className='bg-blue-600 hover:bg-blue-700 p-4 text-white rounded'>
                Add Product

            </button>
            {
                success && <p className='text-green-600 mt-4'>
                    Product is Added Successflly!

                </p>
            }

        </form>

    )
}
