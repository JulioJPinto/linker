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

export interface ILink {
  id: string;
  title: string;
  icon: string;
  link: string;
}

const Link = new Schema<ILink>(
  {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

function LinkerBox (
  {{title , icon , title}: ILink} 
) {
  return (
    <div href={link} className='px-1 py-2'>
      <img src={icon}/>
      <a className='text-bold'></a>{title}
    </div>
  )
}

function Layout (
  {Layout : LinkerBox[]}
) {
  return (
    <div>

    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header/>
      <LinkerBox/>
    </>
  )
}
