import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#3c3c3c" : "#fff8c9")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#fff8c9" : "#3c3c3c")};
    color: #555;
    transform: translateY(-2px);
  }
`
