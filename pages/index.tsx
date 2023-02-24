import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function Header () {
  return (
    <Head>
        <title>Júlio's Linker</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default function Home() {
  return (
    <>
      <Header/>
    </>
  )
}
