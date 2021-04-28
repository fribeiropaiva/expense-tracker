import { FilterContainer } from './styles';
import { ChangeEvent } from 'react';

type FilterProps = {
  setFilteredYear: (year:string) => void;
}

function ExpensesFilter({ setFilteredYear }: FilterProps) {
  return (
    <FilterContainer>
      <p>Filter by year</p>
      <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilteredYear(e.target.value)}>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </FilterContainer>
  );
}

export default ExpensesFilter;