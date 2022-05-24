import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="https://fpvmap.vercel.app/">FPV map</a>
            <div className={styles.profile}>Войти</div>
        </header>
    )
}

export default Header;