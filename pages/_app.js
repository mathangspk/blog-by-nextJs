import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
const theme = {
  colors: {
    primary: '#ff0000'
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <Header isDark/>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp