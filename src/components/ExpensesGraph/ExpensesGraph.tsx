import { Graph } from './styles';
import { Expense } from '../ExpensesContainer/ExpensesContainer';

interface ExpensesGraphProps {
  expenses: Expense[];
}

function ExpensesGraph({ expenses }: ExpensesGraphProps) {
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
      {months.map((month, idx) => {
        const amountAndPercentage = getMonthPercentage(month);
        return (
          <div key={month+'-bar'} className='expenses__graph--bar'>
            <span>${amountAndPercentage.amount}</span>
            <div className='bar' style={{height: amountAndPercentage.percentage}}></div>
            <span>{month}</span>
          </div>
        )
      })}
    </Graph>
  )
}

export default ExpensesGraph;