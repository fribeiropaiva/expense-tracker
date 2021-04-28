import { useState } from 'react';
import { GlobalStyles } from './globalStyles';
import Form from './components/AddExpenseForm/Form';
import ExpensesContainer from './components/ExpensesContainer/ExpensesContainer';
import { Expense } from './components/ExpensesContainer/ExpensesContainer';


function App() {
  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 2, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 3,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expensesList, setExpensesList] = useState<Expense[]>([]);

  function updateExpensesList(newExpense: Expense) {
    setExpensesList((expensesList: Expense[]) => [...expensesList, newExpense]);
  }

  return (
    <>
      <main className='expense-tracker__container'>
        <Form updateExpensesList={updateExpensesList}/>
        <ExpensesContainer expenses={expensesList} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default App;
