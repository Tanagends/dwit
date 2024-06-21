import { Link } from 'react-router-dom'
import React from 'react';
import '../index.css';

export default function Home(){
    return(
        <>
    <section className="m-2 p-0 flex flex-col flex-wrap w-full md:flex-row">
      <article className="hero w-full flex flex-col md:w-[50%] md:rounded-xl">
      <img src="./src/assets/images-background.jpg" alt="graphic design" className='md:rounded-xl w-full -translate-x-28 opacity-0 hero-1' />
        <div className='absolute top-[10%] sm:space-y-2 sm:ml-4 ml-1 flex flex-col' id='all-div-writing'>
        <div className="ready font-extrabold text-4xl md:text-5xl text-white flex">
          <h1 className="ready-child">R</h1>
          <h1 className="ready-child">e</h1>
          <h1 className="ready-child">a</h1>
          <h1 className="ready-child">d</h1>
          <h1 className="ready-child">y</h1>
        </div>
        <h1 className="font-bold opacity-0 hero-1 text-xl md:text-2xl text-white">for</h1>
        <h1 className="font-bold opacity-0 hero-1 text-xl md:text-2xl text-white">your corporate</h1>
        <h1 className='text-5xl opacity-0 hero-2 font-bold text-magnify md:text-6xl'>Strength</h1>
        <Link className="font-extrabold p-2 block opacity-0 hero-2 text-white border-2 border-white rounded-2xl font-mono text-center text-xl w-fit m-4 relative top-5" to="/Contacts">Get in touch!<i className="bi bi-phone-vibrate animate-bounce inline-block"></i></Link>
        </div>
      </article>
      <article className="flex flex-col gap-4 justify-center items-center md:w-[50%]">
        <div className="p-2  w-[85%] rounded-2xl shadow-lg text-white bg-white -z-1 bg-opacity-5 translate-x-[100%] opacity-0 hero-1 mt-2 min-h-[300px] max-w-[400px]">
          <h1 className="font-sans font-bold text-main-700 text-center">Why work with us?</h1>
          <p>You provide top notch services and products, so why are you not getting customers?
            Nobody knows about your product. Customers search for your services online and they don't even see your website because of bad SEO.
            If they are lucky enough to find it they see this old fashioned website that doesn't portray your excellence at all.
            Allow us the pleasure of designing you a website that matches your brilliance.
          </p>
        </div>
        <div className="w-[85%] p-2 rounded-2xl shadow-lg text-white bg-white -z-1 bg-opacity-15 translate-x-[100%] opacity-0 hero-2 min-h-[300px] max-w-[400px]">
          <h1 className="font-bold text-main-700 text-center">Step into the Future...</h1>
          <p>We provide mordenised websites, utilizing 3D graphics and mind blowing animations.
            Since we provide graphic design services, we also have the advantage of using those services for free to make your site super.
            We have trained software developers dedicated to making your website efficient with the loading time at 3 seconds at most. They provide
            a creative user experience that forces your cutomers to come back again.
          </p>
        </div>
      </article>
    </section>
        </>
    )
}
