import styled from "styled-components";
import Colors from "../../constants/Colors";

type ContainerType = {
  height: string;
};

const Container = styled.div<ContainerType>`
  height: ${(props) => props.height};
  width: 100%;
  background-color: ${Colors.cream};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default Container;
