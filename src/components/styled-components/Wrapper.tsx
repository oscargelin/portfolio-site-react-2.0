import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  backgroundColor: string;
};

const Wrapper = styled.div<Props>`
  background: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  transition: all ease-in-out 2s;
`;

export default Wrapper;
