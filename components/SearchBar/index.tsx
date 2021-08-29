import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchBar.module.sass'

const SearchBar = () => {
  return <>
    <div className={styles.container}>
      <input type="text" placeholder="Buscar" />
      <div className={styles.searchIcon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  </>
}

export default SearchBar
