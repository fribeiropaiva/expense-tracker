import { useState, useEffect } from 'react';
import { GlobalStyles } from './globalStyles';
import Form from './components/AddExpenseForm/Form';
import ExpensesContainer from './components/ExpensesContainer/ExpensesContainer';
import { Expense } from './components/ExpensesContainer/ExpensesContainer';

function App() {
  const [expensesList, setExpensesList] = useState<Expense[] | []>([]);

  useEffect(() =>{
    let cachedData = null;

    try {
      cachedData = localStorage.getItem('expense-tracker');
    } catch(e) {
      console.error('Error in getting data from cache.', e);
    }

    if (cachedData) setExpensesList(JSON.parse(cachedData));
  }, []);

  function updateLocalStorage(updatedData: Expense[]) {
    const cacheKey = 'expense-tracker';

    try {
      localStorage.setItem(cacheKey, JSON.stringify(updatedData));
    } catch(e) {
      console.error('Error in caching data.', e);
    }
  }

  function updateExpensesList(newExpense: Expense) {
    setExpensesList((expensesList: Expense[]) => [...expensesList, newExpense]);
    updateLocalStorage([...expensesList, newExpense]);
  }

  function handleRemove(id: string) {
    const updatedExpensesList = expensesList.filter(expense => expense.id !== id);
    setExpensesList(updatedExpensesList);
    updateLocalStorage(updatedExpensesList);
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
