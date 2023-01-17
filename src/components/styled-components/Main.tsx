import styled from "styled-components";

type MainType = {
  rowStart: number;
  rowEnd: number;
  columnStart: number;
  columnEnd: number;
};

const Main = styled.div<MainType>`
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: ${(props) => props.columnEnd};
  grid-row-start: ${(props) => props.rowStart};
  grid-row-end: ${(props) => props.rowEnd};
  border: 1px solid black;
`;
export default Main;
