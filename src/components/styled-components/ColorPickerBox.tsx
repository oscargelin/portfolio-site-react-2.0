import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  height: string;
  width: string;
  backgroundColor: string;
};

const ColorPickerBox = styled.div<Props>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 4px;
  box-shadow: 0px 0px 4px ${colors.cream};
  background: ${(props) => props.backgroundColor};
  &:hover {
    box-shadow: 0px 0px 6px 1px #fff;
  }
`;
export default ColorPickerBox;
