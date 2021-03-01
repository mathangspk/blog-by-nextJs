import styled from '@emotion/styled'
import {rem} from 'polished'

function Header({isDark}) {
    return (
        <HeaderStyled isDark = {isDark}>
            <div>
                <div className="logo">
                    <img src="images/logo.svg" alt="sites logo"></img>
                    <span className="logo-text">Next Movies</span>
                </div>
            </div>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.header`
background: ${props => props.isDark ? '#000000': '#efefef'};
padding:20px;
.logo {
    display:flex;
    align-items: center;
    .logo-text{
        color: #333333;
        font-weight:bold;
        font-size: ${rem(20)};
        margin-left: 20px;
    }
}
`

export default Header