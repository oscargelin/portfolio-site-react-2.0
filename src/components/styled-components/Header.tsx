import styled from "styled-components";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

const Header = styled.header`
  box-shadow: 0px 0px 4px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2f4f4f;
  font-size: 42px;
  font-family: ${Fonts.russoOne};
  font-weight: bold;
  height: 80px;
`;
export default Header;
