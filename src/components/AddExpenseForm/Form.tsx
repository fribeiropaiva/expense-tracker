import { useState, FormEvent } from 'react';
import { FormContainer } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

interface FormProps {
  updateExpensesList: (expense: Expense) => void;
  expensesList: Expense[];
}

function Form({ updateExpensesList, expensesList }: FormProps) {
  const [addingExpense, setAddingExpense] = useState(false);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [expenseDate, setExpenseDate] = useState('');

  function handleAddNewExpense() {
    setAddingExpense(true);
  }

  function handleCancel() {
    setAddingExpense(false);
  }

  function handleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setExpenseTitle(event.target.value);
  }

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setExpenseAmount(Number(event.target.value));
  }

  function handleChangeDate(event: React.ChangeEvent<HTMLInputElement>) {
    setExpenseDate(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const expense = {
      title: expenseTitle,
      amount: expenseAmount,
      date: expenseDate,
      id: expenseTitle+expenseAmount+expenseDate
    }

    const repeatedExpense = expensesList.filter(createdExpense => createdExpense.id === expense.id);

    if (!repeatedExpense.length) updateExpensesList(expense);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {addingExpense ?
      <>
        <label>
          <span>Title</span>
          <input
            type='text'
            value={expenseTitle}
            onChange={handleChangeTitle}
            />
        </label>
        <label>
          <span>Amount</span>
          <input
            type='number'
            value={expenseAmount}
            onChange={handleChangeAmount}
            step='0.01'
            min='0'
            max='999999999.99'
            />
        </label>
        <label>
          <span>Date</span>
          <input
            type='date'
            value={expenseDate}
            onChange={handleChangeDate}
            />
        </label>
        <div className='adding-expense-buttons'>
          <button type='submit' disabled={!(expenseAmount && expenseTitle && expenseDate)}>Add Expense</button>
          <button type='button' onClick={handleCancel}>Cancel</button>
        </div>
      </>
      :
      <button type='button' className='add-new-expense' onClick={handleAddNewExpense}>Add New Expense</button>
      }
    </FormContainer>
  )
}

export default Form;