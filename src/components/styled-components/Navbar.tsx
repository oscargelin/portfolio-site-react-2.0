import styled from "styled-components";
import colors from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

type Props = {
  backgroundColor?: string;
};

const Navbar = styled.nav<Props>`
  color: ${colors.cream};
  font-family: ${Fonts.audioWide};
  font-weight: bold;
  background: ${(props) => props.backgroundColor};
`;
export default Navbar;
