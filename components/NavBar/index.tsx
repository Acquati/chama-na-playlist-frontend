import styles from './NavBar.module.sass'

const NavBar = () => {
  return <>
    <div className={styles.navBar}>
      <div className={styles.container}>
        <h1><span>Chama</span>Na<span>Playlist</span></h1>

        <div>
          <div className={styles.menuToggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default NavBar
