import styled from "styled-components";
import Colors from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

const Header = styled.header`
  box-shadow: 0px 0px 4px black;
  display: flex;
  align-items: center;
  color: #2f4f4f;
  font-size: 42px;
  font-family: ${Fonts.russoOne};
  font-weight: bold;
  grid-column-start: 1;
  grid-column-end: 3;
  height: 80px; //Avaslutade här. fixa height så att mainContent tar upp övrig height:
`;
export default Header;
