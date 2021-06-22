import React, { useState } from 'react';

const Say = () => {
    const [text, setText] = useState('');
    const onClickEnter =()=> setText('안녕하세요!');
    const onClickLeave =()=> setText('안녕히 가세요!');

    const [ color,setColor] = useState('black');
    return (
        <div>
            <button onClick={onClickEnter}>입 장</button>
            <button onClick={onClickLeave}>퇴 장</button>
            <h1 style={{color}}>{text}</h1>
            <button style={{color: 'red'}} onClick={()=> setColor('red')}>
            노란색
            </button>
            <button style={{color: 'green'}} onClick={()=> setColor('green')}>
            초록색
            </button>
            <button style={{color: 'blue'}} onClick={()=> setColor('blue')}>
            파란색
            </button>
        </div>
    );
};
export default Say;