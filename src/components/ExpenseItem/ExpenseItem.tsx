import { Container } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

interface ExpenseItemProps {
 expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {
  const expenseDate = new Date(expense.date);
  console.log(expenseDate)
  const month = expenseDate.toLocaleString('en-US', { month: 'long'});
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit'});
  const year = expenseDate.getFullYear();

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