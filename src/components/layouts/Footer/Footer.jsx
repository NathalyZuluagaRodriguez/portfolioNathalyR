import React from 'react'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { PiInstagramLogoBold } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className='mt-auto'>
        <nav className="md:flex gap-x-8 text-lg flex justify-around items-center font-semibold bg-purple-400 list-none h-20">
          <p className='text-gray-700'>Elaborado por Nathaly Rodriguez Zuluaga</p>
        <div className="flex justify-end ">
              <ItemNavbar
                contents={
                  <PiInstagramLogoBold  className=" h-7 text-3xl text-white hover:text-purple-300 transition duration-300" />
                }
                href="https://www.instagram.com/nathyy_r_/profilecard/?igsh=MWdjbzNjaTc5YW5kdw=="
              />
              <ItemNavbar
                contents={
                  <LuGithub  className=" h-7 text-3xl text-white hover:text-purple-300 transition duration-300" />
                }
                href="https://github.com/NathalyZuluagaRodriguez"
              />
              <ItemNavbar
                contents={
                  <FaLinkedinIn  className=" h-7 text-3xl text-white hover:text-purple-300 transition duration-300" />
                }
                href="https://www.linkedin.com/in/nathaly-rodriguez-7848b92b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              />
          </div>
        </nav>
    </footer>
    
  )
}
