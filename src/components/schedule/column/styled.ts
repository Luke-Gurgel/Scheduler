import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  width: 20vw;
  flex-direction: column;
  border-left: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};
  border-bottom: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};

  :last-child {
    border-right: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};
  }
`

export const WeekDayTitle = styled.h3`
  margin: 15px 0 0 0;
  text-align: center;
  color: ${(props: ThemeProps) => `${props.theme.txt2}`};
`

export const DateSubtitle = styled.span`
  padding: 6px 0;
  font-size: 0.7rem;
  text-align: center;
  color: ${(props: ThemeProps) => `${props.theme.txt3}`};
`

interface DroppableListProps extends ThemeProps {
  isDraggingOver: boolean
}

export const List = styled.div<DroppableListProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 12px;
  min-height: 15vh;
  transition: background-color 0.4s ease-in-out;

  background-color: ${(props: DroppableListProps) =>
    props.isDraggingOver ? "rgba(0,0,0,0.2)" : `transparent`};
`
