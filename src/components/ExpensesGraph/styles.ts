import styled from 'styled-components';

export const Graph = styled.div`
  width: 94%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  padding: 30px 10px;
  box-shadow: 1px 1px 7px #b6c8e7;
  margin: 0 auto 30px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  .expenses-graph__filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    box-shadow: -1px 1px 4px #9fb7e0;
    display: flex;
    height: 1.3rem;

    button {
      background: transparent;
      border: none;
      padding: 2px 9px;
      color: #9fb7e0;
      cursor: pointer;
      width: 100px;
      text-align: center;
      & + button {
        position: relative;

        &:before {
          position: absolute;
          width: 1px;
          height: 100%;
          background-color: #b6c8e7;
          left: 0;
          top: -1px;
        }
      }

      &:hover {
        box-shadow: 2px 1px 4px  #789ad3;
        transition: 0.5s;
        color: #789ad3;
      }

      &.active {
        box-shadow: -1px 1px 4px  #3863ad;
        color: #3863ad;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .expenses__graph--bar {
    width: 8.33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .bar {
      width: 20px;
      height: 80%;
      background: #00094e;
      border-bottom: 1px solid #00094e;
    }
  }
`