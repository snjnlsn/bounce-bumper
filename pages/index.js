import Layout from "../components/layout"
import styles from "../styles/styles.module.css"

export default function Home() {
  return (
    <Layout>
      <header className={styles.header}>
        <h1 data-testid="header">Bounce Bumper!!</h1>
      </header>
    </Layout>
  )
}
