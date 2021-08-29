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
      <h1 style={{ marginTop: 0 }}>Home Page</h1>
    </Layout>
  </>
}

export default HomePage