import styled from "styled-components";

type Props = {
  backgroundColor: string;
};

const WindowButton = styled.div<Props>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 0px 4px black;
  &:hover {
    box-shadow: 0px 0px 4px 1px black;
  }
`;
export default WindowButton;
