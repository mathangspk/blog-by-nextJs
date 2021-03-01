import styled from '@emotion/styled'

function Card({ movie }) {
    return (
        <CardStyled>
            {movie.name}
        </CardStyled>
    )
}

const CardStyled = styled.div`

`

export default Card