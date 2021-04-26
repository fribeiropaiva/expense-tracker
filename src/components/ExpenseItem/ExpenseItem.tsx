import { Container } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

interface ExpenseItemProps {
 expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {
  const month = expense.date.toLocaleString('en-US', { month: 'long'});
  const day = expense.date.toLocaleString('en-US', { day: '2-digit'});
  const year = expense.date.getFullYear();

  return (
    <Container key={expense.id}>
      <div className='expense-item__date'>
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
      <p className='expense-item__title'>{expense.title}</p>
      <span className='expense-item__amount'>${expense.amount}</span>
    </Container>
  )
}

export default ExpenseItem;