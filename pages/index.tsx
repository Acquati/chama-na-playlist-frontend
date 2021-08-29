import type { NextPage } from 'next'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import styles from './HomePage.module.sass'

const HomePage: NextPage = () => {
  return <>
    <Layout>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <h2 style={{ marginTop: 0 }}>Playlists Recentes</h2>
    </Layout>
  </>
}

export default HomePage