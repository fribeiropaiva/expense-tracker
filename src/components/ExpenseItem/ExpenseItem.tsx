import { Container } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

interface ExpenseItemProps {
 expense: Expense;
 handleRemove: (id: string) => void;
}

function ExpenseItem({ expense, handleRemove }: ExpenseItemProps) {
  const expenseDate = new Date(expense.date);
  const month = expenseDate.toLocaleString('en-US', { month: 'long'});
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit'});
  const year = expenseDate.getFullYear();

  return (
    <Container >
      <div className='expense-item__date'>
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
      <p className='expense-item__title'>{expense.title}</p>
      <button className='expense-item__removeBtn' onClick={() => handleRemove(expense.id)}>X</button>
      <span className='expense-item__amount'>${expense.amount}</span>
    </Container>
  )
}

export default ExpenseItem;