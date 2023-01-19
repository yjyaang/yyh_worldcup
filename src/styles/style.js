import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const StartContainer = styled(Container)`
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
    @media only screen and (max-width: 420px) {
            font-size: 24px;
        }
`

export const StartMain = styled.div`
    font-size: 20px;
    margin: 20px;
    @media only screen and (max-width: 420px) {
            font-size: 14px;
        }
`

export const BaseBtn = styled.button`
    width: 200px;
    height: 50px;
    margin: 15px;
    background-color: #324bdb;
    color: #fff;
    font-size: 16px;
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
    @media only screen and (max-width: 420px) {
            width: 160px;
            height: 40px;
            font-size: 14px;
        }
`

export const RoundCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    margin-bottom: 10px;

    h1 {
        font-size: 24px;
        @media only screen and (max-width: 420px) {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 380px) {
            margin-bottom: 0;
        }
`

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    .flex-1 {
        flex: 1;
    }
`

export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    .image {
        width: 400px;
        @media only screen and (max-width: 420px) {
            width: 70%;
        }
        @media only screen and (max-width: 380px) {
            width: 57%;
        }
    }

    .winner-content {
        font-size: 20px;
        padding: 20px;
    }
    @media only screen and (max-width: 420px) {
            margin: 10px;
        }
`