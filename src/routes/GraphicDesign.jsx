import React from 'react';
import GraphicService from '../components/GraphicService';
import Graphic from '../assets/Graphic';

export default function GraphicDesign(){
    return(
            <section>
                <h1 className='text-center font-bold text-2xl sm:text-4xl text-main-700'>Graphic<i className='text-white'>{' '+'Design'}</i></h1>
                <article id="graphic-hero" className='p-2'>
                    <img src="./src/assets/images-background.jpg" alt="graphic design" className='w-full -translate-x-28 opacity-0 hero-1' />
                    <div className='absolute top-[20%] -translate-x-96 opacity-0 hero-2 sm:space-y-2 sm:ml-4 ml-1'>
                        <h1 className='font-bold text-white text-xl sm:text-4xl md:text-5xl'>Seductive designs</h1>
                        <h1 className='font-bold text-white text-xl sm:text-4xl md:text-5xl'>for</h1>
                        <h1 className='font-bold text-magnify text-2xl sm:text-5xl md:text-6xl'>Top notch firms</h1>
                    </div>
                    <p className='text-main-700 mt-2 text-md font-bold text-center sm:text-lg'>We take advantage of our knowledge in the psychology of color and shapes to make designs that bring out the best</p>
                </article>
                <article id='graphic-cards' className='graphic-cards flex flex-col sm:flex-row gap-2 flex-wrap justify-center'>
                    {Graphic.map((item) => (<GraphicService prop={item} />))}
                </article>
            </section>
    )
}
