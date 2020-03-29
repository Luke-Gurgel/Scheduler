import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0.5em;
`

interface DraggableContainerProps extends ThemeProps {
  isDragging: boolean
}

export const InnerContainer = styled.div<DraggableContainerProps>`
  display: flex;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props: DraggableContainerProps) =>
    props.isDragging ? props.theme.bg3 : props.theme.bg2};

  box-shadow: ${(props: DraggableContainerProps) =>
    props.isDragging ? "0px 10px 17px 0px rgba(0,0,0, 0.2);" : ""};

  span {
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    color: ${(props: ThemeProps) => props.theme.txt2};
  }

  img {
    height: 8vh;
    width: 8vh;
    border-radius: 50%;
  }

  @media screen and (max-width: 315px) {
    img {
      height: 6vh;
      width: 6vh;
    }

    span {
      font-size: 0.8rem;
    }
  }
`
