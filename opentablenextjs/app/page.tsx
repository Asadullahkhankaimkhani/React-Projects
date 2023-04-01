import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-emerald-400">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
        </main>
  )
}
