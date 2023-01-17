import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Title = styled.div`
    text-align: center;
    color: #000;
    font-size: 1.6vh;
    padding: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    height: 100px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <StyledLink to={"/"}><Title>GO TO MAIN <i class="fa-solid fa-house"></i></Title></StyledLink>
    )
}

export default Header