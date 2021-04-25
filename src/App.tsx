import { GlobalStyles } from './globalStyles';
import Form from './components/AddExpenseForm/Form';

function App() {
  return (
    <>
      <main className='expense-tracker__container'>
        <Form />
        <section className='expenses'>
          <div className='expenses__filter'>
            <p>Filter by year</p>
            <select>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </select>
          </div>
          <div className='expenses__graph'>

          </div>
          <div className='expenses__list'>

          </div>
        </section>
      </main>
      <GlobalStyles />
    </>
  );
}

export default App;
