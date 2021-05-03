import styled from 'styled-components';

export const BarContainer = styled.div`
  width: 8.33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  @media (max-width: 480px) {
    font-size: 0.5rem;
  }

  .bar {
    width: 20px;
    height: 80%;
    background: #00094e;
    border-bottom: 1px solid #00094e;
  }
`