import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <Header/>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
