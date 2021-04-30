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
    let totalOnMonth = 0;
    const expensesOnMonth = expenses.filter(expense => {
      return new Date(expense.date).toLocaleString('en-US', { month: 'short'}) === expenseMonth
    })

    if (expensesOnMonth.length) {
      totalOnMonth = expensesOnMonth.reduce((acm, current) => { return acm + current.amount }, 0);
      return (totalOnMonth * 100)/total;
    }

    return totalOnMonth;
  }

  return (
    <Graph>
      {months.map((month, idx) => {
        const graphHeight = getMonthPercentage(month);
        return (
          <div key={month+'-bar'} className='expenses__graph--bar'>
            <div className='bar' style={{height: graphHeight}}></div>
            <span>{month}</span>
          </div>
        )
      })}
    </Graph>
  )
}

export default ExpensesGraph;