import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #f9fbfe;
  border-radius: 5px;
  height: 200px;
  width: 100%;
  padding: 15px;
  display: flex;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    border-radius: unset;
  }

  label {
    margin-right: 45px;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 33%;

    span {
      margin-bottom: 5px;
      font-size: 1.5rem;
    }

    input {
      width: 94%;
      padding: 10px;
      border-radius: 5px;
      border-style: groove;

      &:focus {
        outline: none;
      }

      &[type=date] {
        padding: 8px;
      }
    }

    @media (max-width: 480px) {
      span {
        font-size: 1.2rem;
      }

      input {
        width: 100%;
      }
    }
  }

  .adding-expense-buttons {
    align-self: baseline;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: space-around;
    width: 20rem;

    @media (max-width: 480px) {
      width: 16rem;
    }
  }

  button {
    align-self: baseline;
    bottom: 10px;
    right: 10px;
    padding: 20px;
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    background: #6378e0;
    color: #f9fbfe;

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    &.add-new-expense {
      align-self: center;
      margin: 0 auto;
      padding: 30px;
    }

    &:disabled {
      background: gray;
    }
  }
`
