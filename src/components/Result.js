import React from 'react'
import { Container } from '../styles/style'
import { images } from './Images'
import styled from 'styled-components';

const ResultImg = styled.img`
        width: 70px;
    `

const ResultLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ResultDiv = styled.div`
    overflow: auto;
    ::-webkit-scrollbar{
    display:none;
}
`

const ResultUl = styled.ul`
    height: calc(100vh - 50px);
`

const Result = ({ voteResult }) => {
    // voteResult -> 투표된 값들이 배열 형태로 들어옴
    // % -> 필터된 배열 길이 / 전체 배열 길이(전체 투표수)

    return (
        <ResultDiv className='wrap'>
            <Container>
                <ResultUl>
                    {images.map(el => {
                        // 얻은 득표수: 
                        let votes = voteResult.filter(item => el.name === item.name);
                        return (
                            <ResultLi>
                                <ResultImg src={`images/${el.src}`} alt='test' className='image' />
                                <div>{el.name}</div>
                                <div>{votes.length}표</div>
                            </ResultLi>
                        )
                    })}
                </ResultUl>
            </Container>
        </ResultDiv>
    )
}

export default Result