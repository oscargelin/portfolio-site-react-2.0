import styled from "styled-components";
import Colors from "../../constants/Colors";

type ContainerType = {
  height?: string;
  width?: string;
};

const Container = styled.div<ContainerType>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${Colors.cream};
  margin: 5vh 5vw;
  border-radius: 6px;
  box-shadow: 0px 0px 4px black;
`;

export default Container;
