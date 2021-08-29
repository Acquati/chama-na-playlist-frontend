import Head from 'next/head'
import NavBar from '../NavBar'
import Container from '../Container'

interface LayoutProps {
  children?: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({
  children,
  title = 'Chama Na Playlist',
  description = 'Suas playlists preferidas em um só lugar.'
}: LayoutProps) => {
  return <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <NavBar />
    <Container>
      {children}
    </Container>
  </>
}

export default Layout