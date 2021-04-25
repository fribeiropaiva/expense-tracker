import styled from 'styled-components';

export const Container = styled.div`
  width: 94%;
  height: 100px;
  box-shadow: 1px 1px 7px #b6c8e7;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;

  .expense-item__date {
    width: 150px;
    height: 100%;
    background: #b6c8e7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;

    p:nth-child(2) {
      font-size: 0.9rem;
      margin: 3px 0;
    }

    p:nth-child(3) {
      font-size: 1.6rem;
    }
  }
`;