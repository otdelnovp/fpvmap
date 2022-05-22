import React from 'react'
import { YMaps, Map } from 'react-yandex-maps';

import styles from './MapView.module.scss'

const MapView = () => {
    return (
        <>
            <YMaps className={styles.mapview}>
                <Map className={styles.map} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </YMaps>
        </>
    )
}

export default MapView;