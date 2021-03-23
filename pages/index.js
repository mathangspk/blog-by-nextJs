import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'

const Home = ({ movies }) => {
  console.log(movies)
  return (
    <Box variant="container">
      <h2>Last Movies</h2>
      {movies.map(movie =>
        (<Card key={movie.id} movie={movie} />))}
    </Box>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/videos`)
  const data = await res.json()
  return {
    props: {
      movies: data
    }
  }
}

export default Home