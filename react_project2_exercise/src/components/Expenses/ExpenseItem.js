import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // function clickHandler()
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    // 훅은 컴포넌트 함수 안에서 direct inside로 호출되어야 하며 초기값을 필요로 한다
    // const [title, setTitle] title은 초기의 props고 setTitle은 새 상품 설정시에 호출할 함수다
    // 함수명은 일반적으로 버튼이면 Handler를 붙이는 것을 추천
    // 리액트는 일반적으로 함수를 한번만 실행한다
    // 재실행을 위해서는 named import를 사용해야 한다
    // useState를 사용해 보자, useState는 리액트 내장 훅으로 값을 상태로 정의할 수 있도록 해주어
    // 변화가 생기면 재호출되어 컴포넌트 함수에 반영된다
    const clickHandler = (props) => {
        setTitle('Updated!');
        console.log(title);
    };

    // 값을 덧씌우는것이 아니라 함수 자체를 재호출한다. 이게 핵심이다.

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/*React에서 이벤트리스너는 모든 기본 이벤트를 on으로 시작하는 프로퍼티로 노출한다*/}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;