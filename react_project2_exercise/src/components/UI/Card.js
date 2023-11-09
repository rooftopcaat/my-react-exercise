import './Card.css'
function Card (props) {
    const classes='Card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
// children은 예약어로 항상 사용자 지정 컴포넌트의 시작 및 종료 태그 사이에 있는 콘텐츠가 된다
export default Card;
