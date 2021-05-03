import { BarContainer } from './styles';

interface ExpenseGraphBarProps {
  month: string;
  amountAndPercentage: {
    amount: number;
    percentage: number;
  }
  graphFilterOption: string;
}

function ExpenseGraphBar({ month, amountAndPercentage, graphFilterOption }: ExpenseGraphBarProps) {
  return (
    <BarContainer key={month+'-bar'} className='expenses__graph--bar'>
      <span>{graphFilterOption === 'percentage' ? amountAndPercentage.percentage.toFixed(2) + '%' : '$' + amountAndPercentage.amount.toFixed(2)}</span>
      <div className='bar' style={{height: amountAndPercentage.percentage}}></div>
      <span>{month}</span>
    </BarContainer>
  )
}

export default ExpenseGraphBar;