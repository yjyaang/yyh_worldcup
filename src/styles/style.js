import styled from "styled-components";

export const StartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    img {
        width: 500px;
        margin: 10px;
        @media only screen and (max-width: 820px) {
            width: 300px;
        }
    }
`

export const Title = styled.div`
    font-size: 36px;
    margin: 20px;
    @media only screen and (max-width: 400px) {
            font-size: 24px;
        }
`

export const StartMain = styled.div`
    font-size: 20px;
    margin: 20px;
    @media only screen and (max-width: 400px) {
            font-size: 14px;
        }
`

export const BaseBtn = styled.button`
    width: 200px;
    height: 50px;
    background-color: #5ea3db;
    border-style: none;
    border-radius: 30px;
    box-shadow: 0 4px 15px 0 rgba(160, 160, 160, 0.75);
    cursor: pointer;
    position: relative;
    &:hover {
        opacity: .8;
        transition: 0.2s;
        bottom: 2px;
    }
    &:active {
        top: 4px;
    }
`