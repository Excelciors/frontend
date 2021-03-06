import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #10bed8;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      width: 120px;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #ffffff;
      margin-bottom: 10px;
    }
    a {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      color: #ffffff;
    }
  }
  button {
    margin-left: 10px;
    height: 42px;
    width: 71px;
    background: #fff;
    font-weight: bold;
    color: #10bed8;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#10bed8')};
    }
  }
`;
