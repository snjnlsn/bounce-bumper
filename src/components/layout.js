import Head from "next/head"
import styles from "../styles/styles.module.css"
export const siteTitle = "Bounce Bumper"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  )
}
