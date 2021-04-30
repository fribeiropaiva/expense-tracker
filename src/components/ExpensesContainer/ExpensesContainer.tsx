import { useState } from 'react';
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
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredExpenses = expenses.filter(expense => {
    const expenseYear = new Date(expense.date);
    return '' + expenseYear.getFullYear() == filteredYear;
  });

  return (
    <Container>
      <ExpensesFilter setFilteredYear={setFilteredYear} />
      <ExpensesGraph expenses={filteredExpenses} />
      <div className='expenses__list'>
        {filteredExpenses.length > 0 && filteredExpenses.map(expense => {
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