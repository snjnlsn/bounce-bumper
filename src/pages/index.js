import Layout from "../components/layout"
import styles from "../styles/styles.module.css"
import { getAudioFiles } from "../lib/audio"

export async function getStaticProps(_context) {
  return {
    props: {
      bounces: getAudioFiles(),
    },
  }
}
export default function Home({ bounces }) {
  return (
    <Layout>
      <header className={styles.header}>
        <h1 data-testid="header">Bounce Bumper!!</h1>
      </header>
      {bounces.map((bounce) => {
        return (
          <audio key={bounce} controls src={bounce}>
            Bummer
          </audio>
        )
      })}
    </Layout>
  )
}
