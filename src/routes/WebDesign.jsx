import React from 'react';
import '../index.css';
import WebService from '../components/WebService';
import Services from '../assets/Services';

export default function WebDesign(){
    return(
        <>
            <section className="something">
            <h1 className='text-center font-bold text-2xl sm:text-4xl text-main-700'>Web<i className='text-white'>{' '+'Design'}</i></h1>
                <article className='flex flex-wrap gap-4 justify-center'>
                    <WebService prop={Services[0]} />                
                    <WebService prop={Services[1]} />                
                    <WebService prop={Services[2]} />                
                    <WebService prop={Services[3]} />                
                    <WebService prop={Services[4]} />                
                    <WebService prop={Services[5]} />                
                    <WebService prop={Services[6]} />                
                </article>
            </section>
        </>
    )
}
