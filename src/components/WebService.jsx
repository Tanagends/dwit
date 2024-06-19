import { Link } from 'react-router-dom'
import React from 'react';
import '../index.css';

export default function WebService(prop){
    console.log(prop.prop)
    const {id, title, pages, price} = prop.prop;
    console.log(title)
    return(
        <>
            <div className='w-full xs:w-[300px] flex-grow-0 text-white bg-white bg-opacity-15 p-3 rounded-2xl shadow-lg m-4 sm:m-0' id={id}>
                <h1 className='text-center font-bold text-2xl'>{title}</h1>
                <h4 className='my-4 text-slate-100'>{pages+" "}pages</h4>
                <h2 className='text-3xl font-bold'>${price}</h2>
                <Link to='/Contacts' className='p-2 block font-bold text-2xl rounded-full text-center transition-all duration-[0.6s] hover:text-black my-4 hover:bg-white'>Contact Us</Link>
                <ul className='p-3 list-disc-color-main-500'>
                    {prop.prop.description.map((item) => <li className='list-disc w-full'>{item}</li>)}
                </ul>
            </div>
        </>
    )
}