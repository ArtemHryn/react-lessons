import styled from "styled-components"

const NotFoundStyle = styled.div`
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NotFound = () => {
    return <NotFoundStyle>Sorry, we didn't find your page</NotFoundStyle>
}