import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    max-width: 940px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      height: 42px;
      width: 172px;
      background: #10bed8;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#10bed8')};
      }
      span {
        padding-left: 5px;
      }
    }
    strong {
      color: #10bed8;
      font-size: 32px;
      margin: 0;
    }
  }
  ul {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Topics = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  opacity: ${props => (props.past ? 0.6 : 1)};
  div {
    display: flex;
    align-items: center;
    img {
      width: 80px;
    }
    strong {
      margin-left: 15px;
      display: block;
      color: #10bed8;
      font-size: 20px;
      font-weight: normal;
    }
  }

  span {
    display: block;
    margin-top: 3px;
  }
`;
