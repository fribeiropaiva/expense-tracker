import Expense from '../../App';
import { Container } from './styles';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesGraph from '../ExpensesGraph/ExpensesGraph';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export interface Expense {
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
            <ExpenseItem expense={expense} />
          )
        }
        )}
      </div>
    </Container>
  )
}

export default ExpensesContainer;