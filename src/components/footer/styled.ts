import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  p {
    font-size: 0.8rem;
    font-style: italic;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.txt3};
  }

  @media screen and (max-width: 562px) {
    display: none;
  }
`
