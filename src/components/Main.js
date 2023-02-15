import React, { useEffect, useState } from 'react'
import { images } from './Images'
import { Container, RoundCounter, FlexBox, BaseBtn, SelectArea } from '../styles/style'
import { useNavigate } from 'react-router-dom';
import {database} from '../Firebase'
import { collection, addDoc } from "firebase/firestore";

const Main = () => {

    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [count, setCount] = useState('16강');
    const usersCollectionRef = collection(database, "result");
    const navigate = useNavigate();

    useEffect(() => {
        const randomTest = images.slice(0);
        randomTest.sort(() => Math.random() - 0.5);
        setClips(randomTest);
        setDisplays([randomTest[0], randomTest[1]]);
    }, [])

    const clickHandler = (clip) => () => {
        if (clips.length <= 2) {
            //최종우승 화면에 띄우기
            if (winners.length === 0) {
                setDisplays([clip])
                setCount(0);
                // 마지막 선택 후 다음 토너먼트로 넘어갈 때(예: 16강 -> 8강)
            } else {
                let updatedClip = [...winners, clip];
                setClips(updatedClip);
                setDisplays([updatedClip[0], updatedClip[1]]);
                setWinners([]);
                setCount(count === '4강' ? '결승' : `${parseInt(count) / 2}강`);
            }
            // 해당 토너먼트 진행 중
        } else if (clips.length > 2) {
            setWinners([...winners, clip])
            setDisplays([clips[2], clips[3]])
            setClips(clips.slice(2))
        }
    }


    const winnerClick = async() => {
        await addDoc(usersCollectionRef, {name: displays[0].name, src: displays[0].src});
        navigate('/result');
    }

    return (
        <div className='wrap'>
            <Container>
                <RoundCounter><h1>{count === 0 ? null : count}</h1></RoundCounter>
                <FlexBox>
                    {displays.length === 1
                        ?
                        <SelectArea className="flex-1">
                            <div className="winner-content">최고의 유영혁</div>
                            <img src={`images/${displays[0].src}`} alt='test' className='image'/>
                            <div className="winner-content">{displays[0].name}</div>
                            <BaseBtn onClick={winnerClick}>결과 보기</BaseBtn>
                        </SelectArea>
                        :
                        displays.map(item => {
                            return (
                                <SelectArea className="flex-1" key={item.name}>
                                    <img src={`images/${item.src}`} alt='test' className='image'/>
                                    <BaseBtn onClick={clickHandler(item)}>{item.name}</BaseBtn>
                                </SelectArea>
                            )
                        })}
                </FlexBox>
            </Container>
        </div>
    )
}

export default Main