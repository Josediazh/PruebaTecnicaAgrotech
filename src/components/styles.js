import { Link } from 'react-router';
import styled from 'styled-components';

export const ContentSpinner = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: linear-gradient(45deg,#4099ff,#82bcff)
`;

export const Spinner = styled.div`
  width: 50px;
    height: 50px;
    border: 5px solid white;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;
    will-change: transform;
    transform-style: preserve-3d;
    @keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}
`;

export const UserInfo = styled.div`
  background-color: rgb(20,71,230);
  color: white;
  font-size: 14px;
  font-family: monospace;
  padding: 5px;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
`;

export const SpanInfo = styled.span`
  background-color: rgb(20,71,230);
  color: white;
  font-size: 14px;
  font-family: monospace;
  padding: 5px;
  display: flex;
  flex-direction: row;
  &:nth-of-type(1){
    align-self: flex-start;
  }
  &:nth-of-type(2){
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 5%;
  left: 0px;
  background-color: rgb(20,71,230);
  height: 100vh;
`

export const ListMenu = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-top: 40px;
`

export const ItemMenu = styled.li`
  color: rgb(0,0,0);
  font-size: 16px;
  font-family: monospace;
  border-bottom: 1px solid rgba(20,71,230,0.2);
  padding: 20px 20px;
  background-color: white;
`

export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: black;
    -webkit-transition: color ease-in-out 300ms;
    -moz-transition: color ease-in-out 300ms;
    -o-transition: color ease-in-out 300ms;
    transition: color ease-in-out 300ms;
  &:hover{
    color: rgb(20,71,230) !important;
  }
  &:visited{
    color: black;
  }
`