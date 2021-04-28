import Expense from '../../App';
import { Container } from './styles';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesGraph from '../ExpensesGraph/ExpensesGraph';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
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
        {expenses.length > 0 && expenses.map(expense => {
          return (
            <ExpenseItem expense={expense} />
          )
        }
        )}
      </div>
    </Container>
  )
}

export default ExpensesContainer;