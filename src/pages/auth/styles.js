import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg,#4099ff,#82bcff)
`;

export const Wrapper = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-family: monospace;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: monospace;
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid rgb(20,71,230);
  color: rgb(20,71,230);
  font-family: monospace;
  &:hover {
    background-color: rgb(20,71,230);
    color: white;
  }
`;

export const Error = styled.p`
  color: #e53e3e;
  margin-top: 5px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: left;
  font-family: monospace;
`;