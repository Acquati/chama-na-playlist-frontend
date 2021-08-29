import styles from './Container.module.sass'

interface ContainerProps {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <>
    <div className={styles.container}>
      {children}
    </div>
  </>
}

export default Container
