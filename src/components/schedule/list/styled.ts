import styled from "styled-components"
import { ThemeProps } from "src/types"

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

  @media screen and (max-width: 800px) {
    width: inherit;
    flex-direction: row;
    align-items: center;
    border-right: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};
  }
`

export const SectionContainer = styled.div<{ focused: boolean }>`
  display: flex;
  padding: 10px 0;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s linear;

  box-shadow: ${({ focused }) =>
    focused ? " 0px 4px 10px 0px rgba(0, 0, 0, 0.1)" : ""};
  background-color: ${({ theme, focused }) =>
    focused ? theme.bg2 : "transparent"};

  @media screen and (max-width: 800px) {
    padding: 0 15px;
    min-width: 60px;

    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (hover: hover) and (pointer: fine) {
    :hover {
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      background-color: ${(props: ThemeProps) => props.theme.bg2};
    }
  }
`

export const WeekDayTitle = styled.h3`
  margin: 0;
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.txt2};
`

export const DateSubtitle = styled.span`
  padding: 6px 0;
  font-size: 0.7rem;
  text-align: center;
  color: ${(props: ThemeProps) => props.theme.txt3};
`

interface DroppableListProps extends ThemeProps {
  isDraggingOver: boolean
}

export const List = styled.div<DroppableListProps>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px;
  min-height: 12vh;
  transition: background-color 0.4s ease-in-out;

  background-color: ${(props: DroppableListProps) =>
    props.isDraggingOver ? "rgba(0,0,0,0.2)" : `transparent`};

  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 8vh;
    flex-wrap: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
