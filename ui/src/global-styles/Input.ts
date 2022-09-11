import styled from "styled-components";

export const Input = styled.input`
  transition: all 0.1s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #fff;
  font-size: 1rem;

  &:focus {
    box-shadow: 0 0 5px purple;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid black;
  }
  
`;
