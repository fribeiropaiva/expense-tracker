import { useState } from 'react';
import { Graph } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';
import ExpenseGraphBar from '../ExpenseGraphBar/ExpenseGraphBar';

interface ExpensesGraphProps {
  expenses: Expense[];
}

function ExpensesGraph({ expenses }: ExpensesGraphProps) {
  const [graphFilterOption, setGraphFilterOption] = useState('percentage');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const total = expenses.reduce((acm, current) => {
    return acm + current.amount
  }, 0);

  function getMonthPercentage(expenseMonth:string) {
    let amountAndPercentage = {
      amount: 0,
      percentage: 0
    };
    const expensesOnMonth = expenses.filter(expense => {
      return new Date(expense.date).toLocaleString('en-US', { month: 'short'}) === expenseMonth
    })

    if (expensesOnMonth.length) {
      amountAndPercentage.amount = expensesOnMonth.reduce((acm, current) => { return acm + current.amount }, 0);
      amountAndPercentage.percentage = (amountAndPercentage.amount * 100)/total;
      return amountAndPercentage
    }

    return amountAndPercentage;
  }

  return (
    <Graph>
      <div className='expenses-graph__filter'>
        <button className={graphFilterOption === 'percentage' ? 'active' : ''} onClick={() => setGraphFilterOption('percentage')}>Percentage</button>
        <button className={graphFilterOption === 'amount' ? 'active' : ''} onClick={() => setGraphFilterOption('amount')}>Amount</button>
      </div>
      {months.map((month) => {
        const amountAndPercentage = getMonthPercentage(month);
        return (
          <ExpenseGraphBar key={month +'-bar'} month={month} amountAndPercentage={amountAndPercentage} graphFilterOption={graphFilterOption} />
        )
      })}
    </Graph>
  )
}

export default ExpensesGraph;