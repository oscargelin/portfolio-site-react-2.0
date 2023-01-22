import styled from "styled-components";
import colors from "../../constants/colors";
import { Fonts } from "../../constants/Fonts";

type Props = {
  fontSize?: string;
};

const Header = styled.header<Props>`
  box-shadow: 0px 0px 4px black;
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  height: 80px;
  position: relative;
`;
export default Header;
