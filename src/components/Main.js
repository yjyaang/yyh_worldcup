import React, { useEffect, useState } from 'react'
import { images } from './Images'
import { Container, RoundCounter, FlexBox, BaseBtn, SelectArea } from '../styles/style'
import { useNavigate } from 'react-router-dom';


const Main = ({voteResult, setvoteResult}) => {

    const [clips, setClips] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);
    const [count, setCount] = useState('16강');

    console.log(voteResult);
    useEffect(() => {
        images.sort(() => Math.random() - 0.5);
        setClips(images);
        setDisplays([images[0], images[1]]);
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

    const navigate = useNavigate();

    const winnerClick = () => {
        // 통계 내기 위해 localstorage에 데이터 배열로 저장
        // result 페이지에서 사용
        // 필터 배열 길이/전체 배열 길이 해서 % 계산 -> 게이지바에도 활용
        localStorage.setItem("voteResult", JSON.stringify(displays[0]));
        setvoteResult([...voteResult, displays[0]]);
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
                            <BaseBtn onClick={winnerClick}>순위 보기</BaseBtn>
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
                {/* <img src={`images/${images[0].src}`} alt='test'/> */}
            </Container>
        </div>
    )
}

export default Main