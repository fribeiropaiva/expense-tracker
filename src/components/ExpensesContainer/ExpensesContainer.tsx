import Expense from '../../App';
import { Container } from './styles';

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
      <div className='expenses__filter'>
        <p>Filter by year</p>
        <select>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
      <div className='expenses__graph'>
        {months.map(month => (
          <div className='expenses__graph--bar'>
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