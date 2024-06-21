/** All the cards for graphic Design **/

import React from "react";
import '../index.css';
import { Link } from "react-router-dom";


export default function GraphicService(prop){
    //takes in an argument with the props
    const { id, title, images, alt, description, printing } = prop.prop; //for some reason prop.prop is working
    let imageId = 0;
    return(
        <>
        <div className="card-container w-[300px] rounded-xl text-white bg-white bg-opacity-15 shadow-md mx-auto sm:mx-2" id={id}>
            <div className="images-container w-full flex overflow-x-scroll rounded-xl rounded-b-none">
                {/* The images are rendered */}
                {images.map((item) => (<img className="graphic-image w-full rounded-xl rounded-b-none" src={`./src/assets/${item}`} alt={alt} id={id + imageId++}/>))}
            </div>
            <ul className="flex justify-between p-2">
                <li className=" block p-2 bg-main-400  font-bold rounded-md">{title}</li>
                <li className="block"><Link className="block p-2 font-bold" to='/Contacts'>Get Service</Link></li>
            </ul>
            <p className="text-black font-bold p-2">{description + printing}</p>
        </div>
        </>
    )
}