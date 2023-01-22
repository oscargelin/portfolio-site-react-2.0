import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  width?: string;
  color: string;
  marginY: string;
  marginX: string;
  isWindowHidden: boolean;
  isWindowClosed: boolean;
};

const Container = styled.div<Props>`
  width: ${(props) => props.width};
  background-color: ${colors.cream};
  margin-top: ${(props) => props.marginY};
  margin-bottom: ${(props) => props.marginY};
  margin-left: ${(props) => props.marginX};
  margin-right: ${(props) => props.marginX};
  border-radius: 6px;
  box-shadow: 0px 0px 4px black;
  color: ${(props) => props.color};
  transform: translate(
    ${(props) =>
      props.isWindowClosed
        ? "5000px, 5000px"
        : props.isWindowHidden
        ? "5000px"
        : "0"}
  );
  transition: all ease-in-out 0.4s;
`;
export default Container;
