import React, { useState, useEffect } from 'react'
import { Container } from '../styles/style'
import { images } from './Images'
import { database } from '../Firebase'
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { collection, getDocs } from "firebase/firestore";
import {ResultImg, ResultLi, ResultDiv, GraphDiv, ResultUl, Progress, Dealt } from '../styles/style'


const Result = () => {
    const [resultTest, setResultTest] = useState([]);
    const usersCollectionRef = collection(database, "result");

    useEffect(() => {
        // 비동기로 데이터 받을준비
        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
            setResultTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers();
    }, [])

    console.log(resultTest);
    console.log(images);


    return (
        <ResultDiv className='wrap'>
            <Container>
                <ResultUl>
                    {images.map(el => {
                        // 얻은 득표수: 
                        let votes = resultTest.filter(item => el.name === item.name);
                        return (
                            <ResultLi key={el.id}>
                                <ResultImg src={`images/small/${el.src}`} alt='test' className='image' />
                                <GraphDiv>
                                    <div className='text'>
                                        {el.name}
                                    </div>
                                    <Progress>
                                        <Dealt dealt={resultTest.length !== 0 ? (votes.length / resultTest.length) * 100 : 0} />
                                    </Progress>
                                </GraphDiv>
                                <div>{resultTest.length !== 0 ? parseInt((votes.length / resultTest.length) * 100) : 0}%</div>
                            </ResultLi>
                        )
                    })}
                </ResultUl>
            </Container>
        </ResultDiv>
    )
}

export default Result