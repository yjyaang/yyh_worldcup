import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    text-align: center;
    color: #000;
    font-size: 14px;
    padding: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <StyledLink to={"/"}><Title>다시 투표하기 <i className="fa-solid fa-house"></i></Title></StyledLink>
        </HeaderDiv>
    )
}

export default Header