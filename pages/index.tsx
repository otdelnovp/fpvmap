import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout/Layout'

const MapView = dynamic(() => import('../components/MapView/MapView'))

import dbConnect from '../utils/dbConnect'

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <MapView />
            </Layout>
        </>
    )
}

export default Home

export const getServerSideProps = async () => {
    dbConnect()
    return {
        props: {},
    }
}