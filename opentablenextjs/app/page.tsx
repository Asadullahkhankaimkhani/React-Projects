import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='m-auto bg-white max-w-screen-2xl'>
        {/* Navbar */}
        <nav className='flex justify-between p-2 bg-white'>
          <a href='#' className='text-2xl font-bold text-gray-700'>
            OpenTable
          </a>
          <div>
            <div className='flex space-x-2'>
              <button className='p-1 px-4 font-bold text-white rounded bg-emerald-800 hover:bg-emerald-700'>
                Sign In
              </button>
              <button className='p-1 px-4 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100'>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        {/* end Navbar */}
        {/* Header */}

        <div>
          <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='mt-10 text-center'>
              <h1 className='mb-2 text-5xl font-bold text-white'>
                Find the best restaurants, cafés, and bars
              </h1>
            </div>
            <div className='flex justify-center py-3 m-auto text-lg text-left'>
              <input
                type='text'
                className='rounded  mr-3 p-2 w-[450px]'
                placeholder='State, city or town'
              />
              <button className='p-2 px-4 font-semibold text-white bg-red-600 rounded hover:bg-red-500'>
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
