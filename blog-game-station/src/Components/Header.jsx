import React from "react";
import { Link } from "react-router-dom";


const NavBar_Itens = [
    'Home',
    'Sobre',
    'Contato',
    'Notícias'
]

export default function Header(){
    return(
    
    //    <div className='flex justify-between items-center  bg-indigo-500 p-2 shadow-lg'>
    //     <img src={Logo} className='className= w-[180px]'/>
    //     <ul className=' md:flex gap-4 md:gap-14'>
    //         <li className='hover:font-bold cursor-pointer'>Home</li>
    //         <li className='hover:font-bold cursor-pointer'>About Us</li>
    //         <li className='hover:font-bold cursor-pointer'>Contact Us</li>
    //     </ul>
    //    <button 
    //         type="submit"
    //         className="text-white bg-green-500 text-center rounded-lg px-4 py-2 hover:bg-amber-400 transition-colors cursor-pointer font-bold">Cadastrar</button>
            
    // </div>

    <div className="
    fixed 
    bg-black flex justify-between
    items-center gap-16 py-3 px-20
    left-1/2 translate-x-[-50%] top-20
    rounded-full backdrop-blur-md bg-opacity-60
    text-white shadow-lg z-50">
       
      <ul className='flex gap-8 text-xl'>
           {NavBar_Itens.map((item)=>(
            <li className="relative group cursor-pointer">{item}
            <span className="absolute left-0
            bottom-[-5px] w-0 h-1 rounded-xl
            bg-cyan-400 transition-all duration-300
            group-hover:w-full"></span>
            </li>
           ))}
        </ul>


        <button 
           type="submit"
          className="text-white 
          rounded-3xl
          shadow-2xl
          py-1 px-6
          bg-green-500 
          text-center hover:bg-amber-400 transition-colors cursor-pointer font-bold"><Link to="/dashboard">Entrar</Link></button>

    </div>
    
    )
}