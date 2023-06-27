import styled from "styled-components";

const Logo = styled.span`
    color: var(--primary-grey);
    font-weight: bold;
    margin:0;
    font-size: 70px;
    mark {
        color: var(--primary-500);
        background: none;
    }
`

export const PageLogo = () => {
    return (
        <Logo>e<mark>Ti</mark>i</Logo>
    )
}