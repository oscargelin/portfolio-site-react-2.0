import styled from "styled-components";
import colors from "../../constants/colors";
type Props = {
  backgroundColor: string;
};

const Button = styled.button<Props>`
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.cream};
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    text-shadow: 0px 0px 4px ${colors.cream};
  }
  transition: all ease-in-out 0.2s;
`;
export default Button;
