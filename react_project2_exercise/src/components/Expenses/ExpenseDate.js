import './ExpenseDate.css';
function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-KO', {month: 'long'});
    const day = props.date.toLocaleString('en-KO', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            {/*toLocaleString()은 JavaScript 모든 객체 엑세스 가능한 내장 메서드*/}
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;