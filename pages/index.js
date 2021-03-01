import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'


const Home = ({ movies }) => {
  console.log(movies)
  return (
    <div>

      <h1>This is our Front Page</h1>
      {movies.map(movie => (<Card key={movie.id} movie={movie} />))}
    </div>
  )
}

export async function getStaticProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/movies`)
  const data = await res.json()
  return {
    props: {
      movies: data
    }
  }
}

export default Home