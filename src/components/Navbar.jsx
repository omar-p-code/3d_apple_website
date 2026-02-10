import React from 'react'
import { navLinks } from '../constants'

function Navbar() {
   return (
      <header>
         <nav>
            <img src="/logo.svg" alt="Apple Logo" />

            <ul>
               {navLinks.map(({ label }) => (
                  <li key={label}>{label}</li>
               ))}
            </ul>

            <div className='flex-center gap-3'>
               <button>
                  <img src="/search.svg" alt="search" />
               </button>
               <button>
                  <img src="/cart.svg" alt="cart" />
               </button>
            </div>
         </nav>
      </header>
   )
}

export default Navbar