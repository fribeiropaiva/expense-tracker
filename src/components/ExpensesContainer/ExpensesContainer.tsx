import Expense from '../../App';
import { Container } from './styles';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

interface ExpensesContainerProps {
  expenses: Array<Expense>;
}

function ExpensesContainer({ expenses }: ExpensesContainerProps) {
  const months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return (
    <Container>
      <ExpensesFilter />
      <div className='expenses__graph'>
        {months.map(month => (
          <div className='expenses__graph--bar'>
            <div className='bar'></div>
            <span>{month}</span>
          </div>
        ))}
      </div>
      <div className='expenses__list'>
        {expenses.map(expense => {
          return (
            <div key={expense.id} className='expense-item'>
              <div className='expense-item__date'>
                {expense.date.toISOString()}
              </div>
              <p>{expense.title}</p>
              <span>{expense.amount}</span>
            </div>
          )
        }
        )}
      </div>
    </Container>
  )
}

export default ExpensesContainer;