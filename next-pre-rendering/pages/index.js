import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>
      Here are the List Concepts
    </h1>
    <Link href="/users"> 
      <a>
        Users
      </a>
    </Link>
    <br/>
    <br/>
    <Link href="/Posts"> 
      <a>
        Posts
      </a>
      </Link>
      <br/>
      <br/>
    <Link href="/Products"> 
      <a>
        Products
      </a>
    </Link>
    <br/>
    <br/>
    <Link href="/News"> 
      <a>
        News
      </a>
    </Link>
    <br/>
    <br/>
    <Link href="dashboard"> 
      <a>
        Dashboard
      </a>
    </Link>
    <br/>
    <br/>
    <Link href="dashboard"> 
      <a>
        Dashboard-swr
      </a>
    </Link>
    </>
  )
}
