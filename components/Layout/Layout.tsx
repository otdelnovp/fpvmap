import React, { ReactNode } from 'react'
import Head from 'next/head'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './Layout.module.scss'

interface ILayout {
    children: ReactNode;
    title?: string;
    description?: string;
}

const Layout = ({children, title, description = 'FPV points list'}: ILayout) => {
    return (
        <>
            <Head>
                <title>FPV map{title ? ` - ${title}` : ''}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.layout}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;