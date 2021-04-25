import { Graph } from './styles';

function ExpensesGraph() {
  const months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const heights = ['10%', '20%', '0', '50%', '0', '0', '15%', '10%', '5%', '7%', '0', '0'];

  return (
    <Graph>
      {months.map((month, idx) => (
        <div className='expenses__graph--bar'>
          <div className='bar' style={{height: heights[idx]}}></div>
          <span>{month}</span>
        </div>
      ))}
    </Graph>
  )
}

export default ExpensesGraph;