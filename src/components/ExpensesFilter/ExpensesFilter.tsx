import { FilterContainer } from './styles';

function ExpensesFilter() {
  return (
    <FilterContainer>
      <p>Filter by year</p>
      <select>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </FilterContainer>
  );
}

export default ExpensesFilter;