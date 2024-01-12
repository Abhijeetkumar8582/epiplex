import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
export default function Home() {
  return (
    <div style={{width:'100vw',height:'100vh'}}>
      <Head>
            <title>FlipfolioHub - Abhijeet</title>
        </Head>
      <img src='/epiplex.png' style={{width:'100%'}}/>
    </div>
  )
}
