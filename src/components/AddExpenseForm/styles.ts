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
    }
  }

  .adding-expense-buttons {
    align-self: baseline;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: space-around;
    width: 320px;
    transition: 1s;
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

    &.add-new-expense {
      align-self: center;
      margin: 0 auto;
      padding: 30px;
    }
  }
`
