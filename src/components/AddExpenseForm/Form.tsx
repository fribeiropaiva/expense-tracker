import { useState } from 'react';
import { FormContainer } from './styles';

function Form() {
  const [addingExpense, setAddingExpense] = useState(false);

  function handleAddNewExpense() {
    setAddingExpense(true);
  }

  function handleCancel() {
    setAddingExpense(false);
  }

  return (
    <FormContainer>
      {addingExpense ?
      <>
        <label>
          <span>Title</span>
          <input />
        </label>
        <label>
          <span>Amount</span>
          <input />
        </label>
        <label>
          <span>Date</span>
          <input />
        </label>
        <div className='adding-expense-buttons'>
          <button type='button'>Add Expense</button>
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