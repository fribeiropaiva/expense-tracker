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
  handleRemove: (id:string) => void;
}

function ExpensesContainer({ expenses, handleRemove }: ExpensesContainerProps) {
  return (
    <Container>
      <ExpensesFilter />
      <ExpensesGraph />
      <div className='expenses__list'>
        {expenses.length > 0 && expenses.map(expense => {
          return (
            <ExpenseItem key={`${expense.id} - ${expense.date}`} handleRemove={handleRemove} expense={expense} />
          )
        }
        )}
      </div>
    </Container>
  )
}

export default ExpensesContainer;