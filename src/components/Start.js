import React from 'react'
import { Link } from 'react-router-dom';
import { StartContainer, StartMain, Title, BaseBtn } from '../styles/style';


const Start = () => {
    const titleContent = '유영혁 월드컵'
    return (
        <div className='wrap'>
            <StartContainer>
                <Title>{titleContent}</Title>
                <img src='yyh_portrait.png' className="yyh_portrait" alt="자화상" />
                <StartMain>최고의 유영혁에게 투표해 주세요</StartMain>
                <Link to="/main"><BaseBtn>Start</BaseBtn></Link>
            </StartContainer>
        </div>
    )
}

export default Start