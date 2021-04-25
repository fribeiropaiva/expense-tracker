import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;

  select {
    padding: 10px 50px;
    border-radius: 3px;
    background: #f9fbfe;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
`