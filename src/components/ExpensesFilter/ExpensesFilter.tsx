import { FilterContainer } from './styles';
import { ChangeEvent } from 'react';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

type FilterProps = {
  setFilteredYear: (year:string) => void;
  expenses: Expense[];
}

function ExpensesFilter({ setFilteredYear, expenses }: FilterProps) {
  const years = expenses.map(expense => new Date(expense.date).getFullYear());
  const uniqueYears = Array.from(new Set<number>(years)).sort((a, b) => b - a);

  return (
    <FilterContainer>
      <p>Filter by year</p>
      <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilteredYear(e.target.value)}>
        {uniqueYears.map(year => {
          return <option key={year}>{year}</option>
        })}
      </select>
    </FilterContainer>
  );
}

export default ExpensesFilter;