import { Link } from 'react-router-dom'
import React from 'react';
import '../index.css';
import './../../bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

export default function Home(){
    let punchlines = ['Dylan','Worship', 'Strength', 'Visibility']
    //creating divs for the punchlines
    var punchline = punchlines.map((punch) => {
        let items = []
        items.length = punch.length
        let i = 0 
        for (i; i < punch.length; i++){
            let letterNum = 'letter-' + (i + 1)
            items[i] = <div className={letterNum}>{punch[i]}</div>
        }
        return <div className="font-extrabold text-7xl text-magnify flex flex-row gap-2">{items}<div className="cursor text-white font-normal">|</div></div>;
    })
    return(
        <>
    <section className="m-2 p-0 flex flex-col flex-wrap">
      <article className="w-[50%] flex flex-col gap-2">
        <div className="ready font-extrabold text-6xl text-white flex">
          <h1 className="ready-child">R</h1>
          <h1 className="ready-child">e</h1>
          <h1 className="ready-child">a</h1>
          <h1 className="ready-child">d</h1>
          <h1 className="ready-child">y</h1>
        </div>
        <h1 className="font-bold text-3xl text-white">for</h1>
        <h1 className="font-bold text-3xl text-white">your corporate</h1>
        <h1>Nothing Yet</h1>
        <Link className="action scale-[0.4] font-extrabold p-4 text-white border-4 border-white rounded-2xl font-mono text-center text-2xl w-1/2 ml-4 mt-8" to="/Contacts">Get in touch!<i className="bi bi-phone"></i></Link>
        <div className='w-6 h-6 bg-main-600 rounded-full absolute left-4 top-[445px] m-0 p-0 animate-ping'></div><div className='w-6 h-6 bg-main-600 rounded-full absolute left-4 top-[445px] m-0 p-0'></div>
      </article>
      <article className="w-[50%] flex flex-col gap-4 justify-center items-center">
        <div className="p-2  w-[70%] rounded-2xl shadow-lg text-white bg-white -z-1 bg-opacity-5 translate-x-[100%] opacity-0 hero-1">
          <h1 className="font-sans font-bold">Why work with us?</h1>
          <p>You provide top notch services and products, so why are you not getting customers?
            Nobody knows about your product. Customers search for your services online and they don't even see your website because of bad SEO.
            If they are lucky enough to find it they see this old fashioned website that doesn't portray your excellence at all.
            Allow us the pleasure of designing you a website that matches your brilliance.
          </p>
        </div>
        <div className="w-[70%] p-2 rounded-2xl shadow-lg text-white bg-white -z-1 bg-opacity-15 translate-x-[100%] opacity-0 hero-2">
          <h1 className="font-bold">Step into the Future...</h1>
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
