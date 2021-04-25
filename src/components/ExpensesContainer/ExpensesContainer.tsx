import Expense from '../../App';
import { Container } from './styles';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesGraph from '../ExpensesGraph/ExpensesGraph';

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

  return (
    <Container>
      <ExpensesFilter />
      <ExpensesGraph />
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