import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    width: 100%;
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
            width: 55%;
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

export const ResultImg = styled.img`
        width: 100px;
        @media only screen and (max-width: 420px) {
            width: 70px;
        }
    `

export const ResultLi = styled.li`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgba(160, 160, 160, 0.5);
    font-size: 16px;
    @media only screen and (max-width: 420px) {
            width: 85%;
            font-size: 14px;
        }
`

export const ResultDiv = styled.div`
    overflow: auto;
    ::-webkit-scrollbar{
    display:none;
}
`

export const GraphDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    padding-left: 10px;
    .text {
        padding: 5px;
    }
`
export const votechart = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: ${(props) => props.dealt + "%"};
    }
`

export const ResultUl = styled.ul`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Progress = styled.div`
    width: 180px;
    height: 20px;
    background-color: white;
    border: 1px solid #bababa;
    border-radius: 20px;
    margin: 5px;
    @media only screen and (max-width: 420px) {
            width: 100px;
            height: 15px;
        }
`;
export const Dealt = styled.div`
    background-color: #324bdb;
    width: ${(props) => props.dealt + "%"};
    height: 100%;
    border-radius: 20px;
    animation: ${votechart} 1s 1;
`;