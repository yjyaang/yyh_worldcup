import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(200, 200, 200, 0.4);
`

const Title = styled.div`
    text-align: center;
    color: #000;
    font-size: 14px;
    padding: 10px;
`

const Footer = () => {
    return (
        <FooterDiv>
            <Title>
            <i class="fa-brands fa-twitter"></i> @ftodttf_
            </Title>
        </FooterDiv>
    )
}

export default Footer