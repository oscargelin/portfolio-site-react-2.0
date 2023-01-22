import styled from "styled-components";
import colors from "../../constants/colors";

type Props = {
  showBorder?: boolean;
};

const LinkItem = styled.a<Props>`
  border-bottom: ${(props) =>
    props.showBorder ? `1px solid ${colors.cream}` : "1px solid transparent"};
  padding: 7px;
  &:hover {
    cursor: pointer;
    text-shadow: 0px 0px 4px ${colors.cream};
  }
`;
export default LinkItem;
