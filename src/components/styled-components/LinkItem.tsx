import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  showBorder?: boolean;
  darkMode?: boolean;
};

const LinkItem = styled.a<Props>`
  border-bottom: ${(props) =>
    props.showBorder
      ? `1px solid ${props.darkMode ? colors.cream : colors.blueThunder}`
      : "1px solid transparent"};
  padding: 7px;
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px
      ${(props) =>
        props.darkMode ? "4px " + colors.cream : "1px " + colors.blueThunder};
  }
`;
export default LinkItem;
