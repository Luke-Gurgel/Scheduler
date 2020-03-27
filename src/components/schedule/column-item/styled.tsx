import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

interface DraggableContainerProps extends ThemeProps {
  isDragging: boolean
}

export const Container = styled.div<DraggableContainerProps>`
  display: flex;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  flex-direction: column;
  background-color: ${(props: DraggableContainerProps) =>
    props.isDragging ? `${props.theme.bg3}` : `${props.theme.bg2}`};

  span:nth-child(1) {
    font-size: 1rem;
    font-weight: bold;
    color: ${(props: ThemeProps) => `${props.theme.txt2}`};
  }

  span:nth-child(2) {
    margin-top: 6px;
    font-size: 0.8rem;
    font-weight: normal;
    color: ${(props: ThemeProps) => `${props.theme.txt3}`};
  }

  @media screen and (max-width: 800px) {
    margin: 0 15px 0 0;
    height: 6vh;
    flex: 0 0 auto;
  }
`
