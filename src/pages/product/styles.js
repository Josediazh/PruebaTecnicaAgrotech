import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(251,249,250);
`;


export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-family: monospace;
  font-size: 28px;
`;

export const Table = styled.table`
  border: 0 solid;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  border-spacing: 2px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.1);
`;

export const Th = styled.th`
  padding: calc(.23rem * 3);
  text-align: left;
  font-style: 20px;
  font-family: monospace;
`;

export const THead = styled.thead`
  color: black;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
`

export const TrTbody = styled.tr`
  border: none;
  display: table-row;
  &:nth-of-type(odd){
    background-color: rgba(219,220,221,0.4);
  }
  &:nth-of-type(even){
    background-color: white;
  }
`

export const TdTbody = styled.td`
  padding: calc(.23rem * 3);
  border-spacing: 0px;
  font-family: monospace;
  font-size: 16px;
`

export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  border: 1px solid rgb(20,71,230);
  color: rgb(20,71,230);

  &:hover {
    background-color: rgb(20,71,230);
    color: white;
  }
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

export const Textarea = styled.textarea`
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

export const Error = styled.p`
  color: #e53e3e;
  margin-top: 0px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: left;
`;