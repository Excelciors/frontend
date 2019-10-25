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
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#c00040')};
      }
      span {
        padding-left: 5px;
      }
    }
    strong {
      color: #fff;
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
