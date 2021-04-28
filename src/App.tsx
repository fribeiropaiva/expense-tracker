import { useState } from 'react';
import { GlobalStyles } from './globalStyles';
import Form from './components/AddExpenseForm/Form';
import ExpensesContainer from './components/ExpensesContainer/ExpensesContainer';
import { Expense } from './components/ExpensesContainer/ExpensesContainer';

function App() {
  const [expensesList, setExpensesList] = useState<Expense[]>([]);

  function updateExpensesList(newExpense: Expense) {
    setExpensesList((expensesList: Expense[]) => [...expensesList, newExpense]);
  }

  function handleRemove(id: string) {
    const updatedExpensesList = expensesList.filter(expense => expense.id !== id);
    setExpensesList(updatedExpensesList);
  }

  return (
    <>
      <main className='expense-tracker__container'>
        <Form expensesList={expensesList} updateExpensesList={updateExpensesList}/>
        <ExpensesContainer handleRemove={handleRemove} expenses={expensesList} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default App;
