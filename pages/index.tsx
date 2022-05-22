import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>FPV map</title>
                <meta name="description" content="FPV points list" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <Link href="/">FPV map</Link>
                </h1>
            </main>

            <footer className={styles.footer}>
                Dev: Pavel Otdelnov
            </footer>
        </div>
    )
}

export default Home
