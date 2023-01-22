import styled from "styled-components";
import { Fullscreen } from "@styled-icons/material-rounded/Fullscreen";
import colors from "../../constants/colors";

type Props = {
  color: string;
};

const MaximizeWindow = styled(Fullscreen)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export default MaximizeWindow;
