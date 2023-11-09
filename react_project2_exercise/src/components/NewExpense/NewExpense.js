import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <form>
                <ExpenseForm />
            </form>
        </div>
    )
};

export default NewExpense;