import errorImg from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ErrorPage = styled.section`
    text-align: center;
`

const ErrorImg = styled.img`
    max-width: 50%;
    margin: 2rem 0;
`

export const Error = () => {

    return (
        <ErrorPage>
            <ErrorImg src={errorImg} alt="Error" />
            <h1>Page not found</h1>
            <p>We can't find the page you are looking for</p>
            <Link to="/landing">Go home</Link>
        </ ErrorPage>
    );
}