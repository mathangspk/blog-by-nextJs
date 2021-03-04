import styled from '@emotion/styled'

function Card({ movie }) {
    const { API_URL } = process.env
    return (
        <CardStyled>
            <div className="poster">
                <img src={API_URL + movie.poster.url} alt="" />
            </div>
            <div className="body">
                <h3>
                    {movie.name}
                </h3>
                <p dangerouslySetInnerHTML={{__html: movie.content}}/>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`

`

export default Card