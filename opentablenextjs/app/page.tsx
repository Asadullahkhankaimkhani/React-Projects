import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <>
      <div className='max-w-screen-2xl m-auto bg-white'> 
        {/* Navbar */}
        <nav className='bg-white p-2 flex justify-between'>
        <a href="#" className='font-bold text-gray-700 text-2xl'>
          OpenTable
        </a>
        <div>
          <div className='flex space-x-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-1  px-4 rounded'>
            Sign In
          </button>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 px-4 border border-gray-400 rounded shadow'>
            Sign Up
          </button>
          </div>
        </div>
        </nav>
        {/* end Navbar */}
        {/* Header */}
    
      <div>
      <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
        <div className='text-center mt-10'>
          <h1 className='text-5xl font-bold text-white mb-2'>Find the best restaurants, cafés, and bars</h1>
        </div>
      </div>
      </div>
      </div>
     
     
        </>    
  )
}