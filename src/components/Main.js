import React, {useEffect, useState} from 'react'
import { images } from './Images'
import { Container } from '../styles/style'


const Main = () => {

    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [count, setCount] = useState('16강');

    useEffect(() => {
        images.sort(() => Math.random() - 0.5);
        setClips(images);
        setDisplays([images[0], images[1]]);
    }, [])

    const clickHandler = (clip) => () => {
        if(clips.length <= 2) {
            //최종우승 화면에 띄우기
            if(winners.length === 0) {
                setDisplays([clip])
                setCount(0);
            // 마지막 선택 후 다음 토너먼트로 넘어갈 때(예: 16강 -> 8강)
            } else {
                let updatedClip = [...winners, clip];
                setClips(updatedClip);
                setDisplays([updatedClip[0], updatedClip[1]]);
                setWinners([]);
                setCount(count === '4강' ? '결승' : `${parseInt(count)/2}강`);
            }
            // 해당 토너먼트 진행 중
        } else if(clips.length > 2) {
            setWinners([...winners, clip])
            setDisplays([clips[2], clips[3]])
            setClips(clips.slice(2))
        }
    }
    return (
        <div className='wrap'>
            <Container>
                Main
                {/* <img src={`images/${images[0].src}`} alt='test'/> */}
            </Container>
        </div>
    )
}

export default Main