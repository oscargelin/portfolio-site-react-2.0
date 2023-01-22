import styled from "styled-components";
import { Menu } from "@styled-icons/ionicons-solid/Menu";
import colors from "../../constants/colors";

type Props = {
  color: string;
};

const HamburgerMenu = styled(Menu)<Props>`
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
export default HamburgerMenu;
